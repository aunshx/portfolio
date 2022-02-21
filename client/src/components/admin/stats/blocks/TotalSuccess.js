// A chart for average tuu time in minutes and the number of tuus done per time

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import {
  getTotalSuccessMessagesToday,
  getTotalSuccessMessagesWeek,
  getTotalSuccessMessagesMonth,
  getTotalSuccessMessagesYear,
  getTotalSuccessMessagesAllTime,
} from "../../../../redux/actions/metrics";

import windowSize from "../../../../utils/windowSize";
import NothingToShow from "../NothingToShow";
import DurationSelector from "../DurationSelector";

const TotalSuccesses = ({
  // Redux Actions
  getTotalSuccessMessagesToday,
  getTotalSuccessMessagesWeek,
  getTotalSuccessMessagesMonth,
  getTotalSuccessMessagesYear,
  getTotalSuccessMessagesAllTime,
  // Redux State
  metrics: { totalSuccessMessagesLoading, totalSuccessMessagesBlock },
  settings: { displayMode },
}) => {
  const { width, height } = windowSize();
  const [duration, setDuration] = useState("today");

  useEffect(() => getTotalSuccessMessagesToday(), []);

  const onChangeDuration = (e) => {
    setDuration(e.target.value);
    if (e.target.value === "today") {
      getTotalSuccessMessagesToday();
    }
    if (e.target.value === "week") {
      getTotalSuccessMessagesWeek();
    }
    if (e.target.value === "month") {
      getTotalSuccessMessagesMonth();
    }
    if (e.target.value === "year") {
      getTotalSuccessMessagesYear();
    }
    if (e.target.value === "all-time") {
      getTotalSuccessMessagesAllTime();
    }
  };

  return (
    <div className='charts flex_middle'>
      <div
        className={displayMode ? "app block block--dark" : "app block"}
        style={{ justifyContent: "space-between" }}
      >
        <div className='title flex_middle'>Success</div>
        {totalSuccessMessagesLoading ? (
          <div className='spinner-new-block'></div>
        ) : (
          <>
            <div className='value' style={{ color: "#7ed957" }}>
              {totalSuccessMessagesBlock}
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

TotalSuccesses.propTypes = {
  settings: PropTypes.object.isRequired,
  metrics: PropTypes.object.isRequired,
  getTotalSuccessMessagesToday: PropTypes.func.isRequired,
  getTotalSuccessMessagesWeek: PropTypes.func.isRequired,
  getTotalSuccessMessagesMonth: PropTypes.func.isRequired,
  getTotalSuccessMessagesYear: PropTypes.func.isRequired,
  getTotalSuccessMessagesAllTime: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  settings: state.settings,
  metrics: state.metrics,
});

const mapStateToActions = {
  getTotalSuccessMessagesToday,
  getTotalSuccessMessagesWeek,
  getTotalSuccessMessagesMonth,
  getTotalSuccessMessagesYear,
  getTotalSuccessMessagesAllTime,
};

export default connect(mapStateToProps, mapStateToActions)(TotalSuccesses);
