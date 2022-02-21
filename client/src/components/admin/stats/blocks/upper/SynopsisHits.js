// A chart for average tuu time in minutes and the number of tuus done per time

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import windowSize from "../../../../../utils/windowSize";

const SynopsisHits = ({
  // Redux State
  metrics: { 
    totalHitsBlock,
    totalHitsSynopsisLoading,
    totalHitsSynopsisToday,
    totalHitsSynopsisWeek,
    totalHitsSynopsisMonth,
    totalHitsSynopsisYear,
    totalHitsSynopsisAllTime,
  },
  settings: { displayMode },
}) => {
  const { width, height } = windowSize();

  return (
    <div className='charts flex_middle'>
      <div
        className={displayMode ? "app block block--dark" : "app block"}
        style={{ justifyContent: "space-between" }}
      >
        <div className='title flex_middle'>Total Hits</div>
        {totalHitsSynopsisLoading ? (
          <div className='spinner-new-block'></div>
        ) : (
          <>
            <div className='value'>{totalHitsBlock}</div>
          </>
        )}
      </div>
    </div>
  );
};

SynopsisHits.propTypes = {
  settings: PropTypes.object.isRequired,
  metrics: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  settings: state.settings,
  metrics: state.metrics,
});

const mapStateToActions = {

};

export default connect(mapStateToProps, mapStateToActions)(SynopsisHits);
