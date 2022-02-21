// A chart for average tuu time in minutes and the number of tuus done per time

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import {
  getTotalOngoingMessagesToday,
  getTotalOngoingMessagesWeek,
  getTotalOngoingMessagesMonth,
  getTotalOngoingMessagesYear,
  getTotalOngoingMessagesAllTime,
} from "../../../../redux/actions/metrics";

import windowSize from "../../../../utils/windowSize";
import NothingToShow from "../NothingToShow";
import DurationSelector from "../DurationSelector";

const TotalOngoings = ({
  // Redux Actions
  getTotalOngoingMessagesToday,
  getTotalOngoingMessagesWeek,
  getTotalOngoingMessagesMonth,
  getTotalOngoingMessagesYear,
  getTotalOngoingMessagesAllTime,
  // Redux State
  metrics: { totalOngoingMessagesLoading, totalOngoingMessagesBlock },
  settings: { displayMode },
}) => {
  const { width, height } = windowSize();
  const [duration, setDuration] = useState("today");

  useEffect(() => getTotalOngoingMessagesToday(), [])

  const onChangeDuration = (e) => {
    setDuration(e.target.value);
    if (e.target.value === "today") {
      getTotalOngoingMessagesToday();
    }
    if (e.target.value === "week") {
      getTotalOngoingMessagesWeek();
    }
    if (e.target.value === "month") {
      getTotalOngoingMessagesMonth();
    }
    if (e.target.value === "year") {
      getTotalOngoingMessagesYear();
    }
    if (e.target.value === "all-time") {
      getTotalOngoingMessagesAllTime();
    }
  };

  return (
    <div className='charts flex_middle'>
      <div
        className={displayMode ? "app block block--dark" : "app block"}
        style={{ justifyContent: "space-between" }}
      >
        <div className='title flex_middle'>Total Ongoings</div>
        {totalOngoingMessagesLoading ? (
          <div className='spinner-new-block'></div>
        ) : (
          <>
            <div className='value' style={{ color: "#ffb429" }}>
              {totalOngoingMessagesBlock}
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

TotalOngoings.propTypes = {
  settings: PropTypes.object.isRequired,
  metrics: PropTypes.object.isRequired,
  getTotalOngoingMessagesToday: PropTypes.func.isRequired,
  getTotalOngoingMessagesWeek: PropTypes.func.isRequired,
  getTotalOngoingMessagesMonth: PropTypes.func.isRequired,
  getTotalOngoingMessagesYear: PropTypes.func.isRequired,
  getTotalOngoingMessagesAllTime: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  settings: state.settings,
  metrics: state.metrics,
});

const mapStateToActions = {
  getTotalOngoingMessagesToday,
  getTotalOngoingMessagesWeek,
  getTotalOngoingMessagesMonth,
  getTotalOngoingMessagesYear,
  getTotalOngoingMessagesAllTime,
};

export default connect(mapStateToProps, mapStateToActions)(TotalOngoings);
