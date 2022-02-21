// A chart for average tuu time in minutes and the number of tuus done per time

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import {
  getTotalColdMessagesToday,
  getTotalColdMessagesWeek,
  getTotalColdMessagesMonth,
  getTotalColdMessagesYear,
  getTotalColdMessagesAllTime,
} from "../../../../../redux/actions/metrics";

import windowSize from "../../../../../utils/windowSize";
import DurationSelector from "../../DurationSelector";

const TotalColds = ({
  // Redux Actions
  getTotalColdMessagesToday,
  getTotalColdMessagesWeek,
  getTotalColdMessagesMonth,
  getTotalColdMessagesYear,
  getTotalColdMessagesAllTime,
  // Redux State
  metrics: { totalColdsBlockLoading, totalColdMessagesBlock },
  settings: { displayMode },
}) => {
  const { width, height } = windowSize();
  const [duration, setDuration] = useState("today");

  useEffect(() => getTotalColdMessagesToday(), []);

  const onChangeDuration = (e) => {
    setDuration(e.target.value);
    if (e.target.value === "today") {
      getTotalColdMessagesToday();
    }
    if (e.target.value === "week") {
      getTotalColdMessagesWeek();
    }
    if (e.target.value === "month") {
      getTotalColdMessagesMonth();
    }
    if (e.target.value === "year") {
      getTotalColdMessagesYear();
    }
    if (e.target.value === "all-time") {
      getTotalColdMessagesAllTime();
    }
  };

  return (
    <div className='charts flex_middle'>
      <div
        className={displayMode ? "app block block--dark" : "app block"}
        style={{ justifyContent: "space-between" }}
      >
        <div className='title flex_middle'>Cold</div>
        {totalColdsBlockLoading ? (
          <div className='spinner-new-block'></div>
        ) : (
          <>
            <div className='value' style={{ color: "#c0c0c0" }}>
              {totalColdMessagesBlock}
            </div>
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

TotalColds.propTypes = {
  settings: PropTypes.object.isRequired,
  metrics: PropTypes.object.isRequired,
  getTotalColdMessagesToday: PropTypes.func.isRequired,
  getTotalColdMessagesWeek: PropTypes.func.isRequired,
  getTotalColdMessagesMonth: PropTypes.func.isRequired,
  getTotalColdMessagesYear: PropTypes.func.isRequired,
  getTotalColdMessagesAllTime: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  settings: state.settings,
  metrics: state.metrics,
});

const mapStateToActions = {
  getTotalColdMessagesToday,
  getTotalColdMessagesWeek,
  getTotalColdMessagesMonth,
  getTotalColdMessagesYear,
  getTotalColdMessagesAllTime,
};

export default connect(mapStateToProps, mapStateToActions)(TotalColds);
