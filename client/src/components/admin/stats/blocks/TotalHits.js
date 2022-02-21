// A chart for average tuu time in minutes and the number of tuus done per time

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import {
  getTotalHitsToday,
  getTotalHitsWeek,
  getTotalHitsMonth,
  getTotalHitsYear,
  getTotalHitsAllTime,
} from "../../../../redux/actions/metrics";

import windowSize from "../../../../utils/windowSize";
import NothingToShow from "../NothingToShow";
import DurationSelector from "../DurationSelector";

const TotalHits = ({
  // Redux Actions
  getTotalHitsToday,
  getTotalHitsWeek,
  getTotalHitsMonth,
  getTotalHitsYear,
  getTotalHitsAllTime,
  // Redux State
  metrics: { totalHitsBlockLoading, totalHitsBlock },
  settings: { displayMode },
}) => {
  const { width, height } = windowSize();
  const [duration, setDuration] = useState("today");

  useEffect(() => getTotalHitsToday(), []);

  const onChangeDuration = (e) => {
    setDuration(e.target.value);
    if (e.target.value === "today") {
      getTotalHitsToday();
    }
    if (e.target.value === "week") {
      getTotalHitsWeek();
    }
    if (e.target.value === "month") {
      getTotalHitsMonth();
    }
    if (e.target.value === "year") {
      getTotalHitsYear();
    }
    if (e.target.value === "all-time") {
      getTotalHitsAllTime();
    }
  };

  return (
    <div className='charts flex_middle'>
      <div
        className={displayMode ? "app block block--dark" : "app block"}
        style={{ justifyContent: "space-between" }}
      >
        <div className='title flex_middle'>Total Hits</div>
        {totalHitsBlockLoading ? (
          <div className='spinner-new-block'></div>
        ) : (
          <>
            <div className='value'>{totalHitsBlock}</div>
          </>
        )}
        <div>
          <DurationSelector
            onChangeDuration={onChangeDuration}
            duration={duration}
          />
        </div>
      </div>
    </div>
  );
};

TotalHits.propTypes = {
  settings: PropTypes.object.isRequired,
  metrics: PropTypes.object.isRequired,
  getTotalHitsToday: PropTypes.func.isRequired,
  getTotalHitsWeek: PropTypes.func.isRequired,
  getTotalHitsMonth: PropTypes.func.isRequired,
  getTotalHitsYear: PropTypes.func.isRequired,
  getTotalHitsAllTime: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  settings: state.settings,
  metrics: state.metrics,
});

const mapStateToActions = {
  getTotalHitsToday,
  getTotalHitsWeek,
  getTotalHitsMonth,
  getTotalHitsYear,
  getTotalHitsAllTime,
};

export default connect(mapStateToProps, mapStateToActions)(TotalHits);
