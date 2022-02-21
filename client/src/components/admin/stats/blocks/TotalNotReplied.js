// A chart for average tuu time in minutes and the number of tuus done per time

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import {
  getTotalNoReplyMessagesToday,
  getTotalNoReplyMessagesWeek,
  getTotalNoReplyMessagesMonth,
  getTotalNoReplyMessagesYear,
  getTotalNoReplyMessagesAllTime,
} from "../../../../redux/actions/metrics";

import windowSize from "../../../../utils/windowSize";
import NothingToShow from "../NothingToShow";
import DurationSelector from "../DurationSelector";

const TotalNoReply = ({
  // Redux Actions
  getTotalNoReplyMessagesToday,
  getTotalNoReplyMessagesWeek,
  getTotalNoReplyMessagesMonth,
  getTotalNoReplyMessagesYear,
  getTotalNoReplyMessagesAllTime,
  // Redux State
  metrics: { totalNoReplyMessagesLoading, totalNoReplyMessagesBlock },
  settings: { displayMode },
}) => {
  const { width, height } = windowSize();
  const [duration, setDuration] = useState("today");

  useEffect(() => getTotalNoReplyMessagesToday(), []);

  const onChangeDuration = (e) => {
    setDuration(e.target.value);
    if (e.target.value === "today") {
      getTotalNoReplyMessagesToday();
    }
    if (e.target.value === "week") {
      getTotalNoReplyMessagesWeek();
    }
    if (e.target.value === "month") {
      getTotalNoReplyMessagesMonth();
    }
    if (e.target.value === "year") {
      getTotalNoReplyMessagesYear();
    }
    if (e.target.value === "all-time") {
      getTotalNoReplyMessagesAllTime();
    }
  };

  return (
    <div className='charts flex_middle'>
      <div
        className={displayMode ? "app block block--dark" : "app block"}
        style={{ justifyContent: "space-between" }}
      >
        <div className='title flex_middle'>Not Replied</div>
        {totalNoReplyMessagesLoading ? (
          <div className='spinner-new-block'></div>
        ) : (
          <>
            <div className='value' style={{ color: "#ff5252" }}>
              {totalNoReplyMessagesBlock}
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

TotalNoReply.propTypes = {
  settings: PropTypes.object.isRequired,
  metrics: PropTypes.object.isRequired,
  getTotalNoReplyMessagesToday: PropTypes.func.isRequired,
  getTotalNoReplyMessagesWeek: PropTypes.func.isRequired,
  getTotalNoReplyMessagesMonth: PropTypes.func.isRequired,
  getTotalNoReplyMessagesYear: PropTypes.func.isRequired,
  getTotalNoReplyMessagesAllTime: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  settings: state.settings,
  metrics: state.metrics,
});

const mapStateToActions = {
  getTotalNoReplyMessagesToday,
  getTotalNoReplyMessagesWeek,
  getTotalNoReplyMessagesMonth,
  getTotalNoReplyMessagesYear,
  getTotalNoReplyMessagesAllTime,
};

export default connect(mapStateToProps, mapStateToActions)(TotalNoReply);
