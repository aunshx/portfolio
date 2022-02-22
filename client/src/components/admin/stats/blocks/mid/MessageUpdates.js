// A chart for average tuu time in minutes and the number of tuus done per time

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import moment from "moment";

import { connect } from "react-redux";

import { getRecentMessagesLimit } from "../../../../../redux/actions/metrics";

const MessageUpdates = ({
  // Redux Actions
  getRecentMessagesLimit,
  // Redux State
  metrics: { totalNoReplyMessagesLoading, totalNoReplyMessagesBlock },
  settings: { displayMode },
}) => {
  useEffect(() => getRecentMessagesLimit(), []);

  return (
    <div className='charts flex_middle'>
      <div
        className={
          displayMode ? "app block block--dark block-message" : "app block block-message"
        }
        style={{ justifyContent: "space-between" }}
      >
        <div className='title flex_middle'>Message Advice</div>
        {totalNoReplyMessagesLoading ? (
          <div className='spinner-new-block'></div>
        ) : (
          <>
            {totalNoReplyMessagesBlock > 0 ? (
              <div
                className='value--change--text ft-bold'
                style={{ textAlign: "center", fontSize: "0.8em" }}
              >
                You have <span style={{ color: "#ff5252" }}>unreplied</span>{" "}
                messages. Please reply to them!
              </div>
            ) : (
              <div
                className='value--change--text ft-bold'
                style={{ textAlign: "center", fontSize: "0.85em" }}
              >
                You have <span style={{ color: "#7ed957" }}>replied</span> to
                all messages. <span style={{ color: "#f5bd25" }}>Cheers!</span>
              </div>
            )}
          </>
        )}
        <div></div>
      </div>
    </div>
  );
};

MessageUpdates.propTypes = {
  settings: PropTypes.object.isRequired,
  metrics: PropTypes.object.isRequired,
  getRecentMessagesLimit: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  settings: state.settings,
  metrics: state.metrics,
});

const mapStateToActions = {
  getRecentMessagesLimit,
};

export default connect(mapStateToProps, mapStateToActions)(MessageUpdates);
