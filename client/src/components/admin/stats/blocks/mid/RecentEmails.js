// A chart for average tuu time in minutes and the number of tuus done per time

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import moment from 'moment'

import { connect } from "react-redux";

import {
  getRecentMessagesLimit,
} from "../../../../../redux/actions/metrics";

const RecentEmails = ({
  // Redux Actions
  getRecentMessagesLimit,
  // Redux State
  metrics: { recentMessagesLimitLoading, recentMessagesLimit },
  settings: { displayMode },
}) => {
  useEffect(() => getRecentMessagesLimit(), []);

  return (
    <div className='charts flex_middle'>
      <div
        className={
          displayMode ? "app block-long block-long--dark" : "app block-long"
        }
      >
        <div className='title flex_middle'>Recent Messages</div>
        {recentMessagesLimitLoading ? (
          <div
            className='spinner-new-block'
            style={{ marginTop: "1.5em" }}
          ></div>
        ) : (
          <>
            {recentMessagesLimit.length > 0 && (
              <>
                {recentMessagesLimit.map((element, index) => (
                  <div className='third_grid' key={index}>
                    <div className='flex_middle element'>{index + 1}</div>
                    <div className='flex_middle element'>{element.email}</div>
                    <div
                      className='flex_middle element'
                      style={{ fontSize: "0.75em" }}
                    >
                      {moment(element.createdAt).fromNow()}
                    </div>
                  </div>
                ))}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

RecentEmails.propTypes = {
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

export default connect(mapStateToProps, mapStateToActions)(RecentEmails);
