// A chart for average tuu time in minutes and the number of tuus done per time

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";


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
    totalHitsType,
  },
  settings: { displayMode },
}) => {
  const { width, height } = windowSize();
  const [currentValue, setCurrentValue] = useState(0)
  const [currentValueSign, setCurrentValueSign] = useState(false)

  useEffect(() => {
    if (totalHitsType === "today") {
      if(totalHitsSynopsisToday === 0){
          setCurrentValue(
            (
              parseInt(totalHitsBlock) *
              100
            ).toFixed(1)
          );
      } else {
          setCurrentValue(
            (
              ((parseInt(totalHitsBlock) - parseInt(totalHitsSynopsisToday)) /
                parseInt(totalHitsSynopsisToday)) *
              100
            ).toFixed(1)
          );
          console.log(currentValue, totalHitsSynopsisToday);
      }
    }
    if (totalHitsType === "week") {
      if (totalHitsSynopsisWeek === 0) {
        setCurrentValue((parseInt(totalHitsBlock) * 100).toFixed(1));
      } else {
              setCurrentValue(
                (
                  ((parseInt(totalHitsBlock) -
                    parseInt(totalHitsSynopsisWeek)) /
                    parseInt(totalHitsSynopsisWeek)) *
                  100
                ).toFixed(1)
              );
      }
    }
    if (totalHitsType === "month") {
      if (totalHitsSynopsisMonth === 0) {
        setCurrentValue((parseInt(totalHitsBlock) * 100).toFixed(1));
      } else {
        setCurrentValue(
          (
            ((parseInt(totalHitsBlock) - parseInt(totalHitsSynopsisMonth)) /
              parseInt(totalHitsSynopsisMonth)) *
            100
          ).toFixed(1)
        );
      }
    }
    if (totalHitsType === "year") {
      if (totalHitsSynopsisYear === 0) {
        setCurrentValue((parseInt(totalHitsBlock) * 100).toFixed(1));
      } else {
        setCurrentValue(
          (
            ((parseInt(totalHitsBlock) - parseInt(totalHitsSynopsisYear)) /
              parseInt(totalHitsSynopsisYear)) *
            100
          ).toFixed(1)
        );
      }
    }
    if (totalHitsType === "all-time") {
      if (totalHitsSynopsisAllTime === 0) {
        setCurrentValue((parseInt(totalHitsBlock) * 100).toFixed(1));
      } else {
              setCurrentValue(
                (
                  ((parseInt(totalHitsBlock) -
                    parseInt(totalHitsSynopsisAllTime)) /
                    parseInt(totalHitsSynopsisAllTime)) *
                  100
                ).toFixed(1)
              );
      }
    }
  }, [totalHitsType, totalHitsBlock]);

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
            <div className='value--change'>
              {currentValue[0] === "-" ? (
                <div style={{ color: "#ff5252" }} className='flex_middle'>
                  <div style={{ marginRight: "0.3em", marginTop: "0.3em" }}>
                    <TrendingDownIcon />
                  </div>
                  <div>{Math.abs(currentValue)}%</div>
                </div>
              ) : (
                <div style={{ color: "#7ed957" }} className='flex_middle'>
                  <div style={{ marginRight: "0.3em", marginTop: "0.3em" }}>
                    <TrendingUpIcon />
                  </div>
                  <div>{Math.abs(currentValue)}%</div>
                </div>
              )}
            </div>
          </>
        )}
        <div>
          
        </div>
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
