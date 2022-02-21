// A chart for average tuu time in minutes and the number of tuus done per time

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

import windowSize from "../../../../../utils/windowSize";

import {sayings} from './sayings'

const SynopsisHits = ({
  // Redux State
  metrics: {
    totalHitsBlock,
    totalHitsSynopsisLoading,
    totalHitsSynopsisToday,
    totalHitsSynopsisWeek,
    totalHitsSynopsisMonth,
    totalHitsSynopsisYear,
    totalHitsType,
  },
  settings: { displayMode },
}) => {
  const [currentValue, setCurrentValue] = useState(0)

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
            {totalHitsType === "all-time" ? (
              <div className='value--change--text'>
                {sayings[Math.floor(Math.random() * 10)] || 'What a Number!'}
              </div>
            ) : (
              <>
                {currentValue == 0 ? (
                  <div className='value--change'>
                    <div style={{ color: "grey" }} className='flex_middle'>
                      <div style={{ marginRight: "0.3em", marginTop: "0.3em" }}>
                        <TrendingFlatIcon />
                      </div>
                      <div>0%</div>
                    </div>
                  </div>
                ) : (
                  <div className='value--change'>
                    {currentValue[0] === "-" ? (
                      <div style={{ color: "#ff5252" }} className='flex_middle'>
                        <div
                          style={{ marginRight: "0.3em", marginTop: "0.3em" }}
                        >
                          <TrendingDownIcon />
                        </div>
                        <div>{Math.abs(currentValue)}%</div>
                      </div>
                    ) : (
                      <div style={{ color: "#7ed957" }} className='flex_middle'>
                        <div
                          style={{ marginRight: "0.3em", marginTop: "0.3em" }}
                        >
                          <TrendingUpIcon />
                        </div>
                        <div>{Math.abs(currentValue)}%</div>
                      </div>
                    )}
                  </div>
                )}
              </>
            )}
          </>
        )}
        <div>
          {totalHitsType === "today" && (
            <>
              {currentValue == 0 ? (
                <div className='value--change--text'>
                  No. of hits has remained{" "}
                  <span style={{ color: "grey" }}>constant</span> since
                  yesterday
                </div>
              ) : (
                <div className='value--change--text flex_left'>
                  {currentValue[0] === "-" ? (
                    <div>
                      No. of hits has{" "}
                      <span style={{ color: "#ff5252" }}>reduced</span> since
                      yesterday
                    </div>
                  ) : (
                    <div>
                      No. of hits has{" "}
                      <span style={{ color: "#7ed957" }}>increased</span> since
                      yesterday
                    </div>
                  )}
                </div>
              )}
            </>
          )}
          {totalHitsType === "week" && (
            <>
              {currentValue == 0 ? (
                <div className='value--change--text'>
                  No. of hits has remained{" "}
                  <span style={{ color: "grey" }}>constant</span> since last
                  week
                </div>
              ) : (
                <div className='value--change--text flex_left'>
                  {currentValue[0] === "-" ? (
                    <div>
                      No. of hits has{" "}
                      <span style={{ color: "#ff5252" }}>reduced</span> since
                      last week
                    </div>
                  ) : (
                    <div>
                      No. of hits has{" "}
                      <span style={{ color: "#7ed957" }}>increased</span> since
                      last week
                    </div>
                  )}
                </div>
              )}
            </>
          )}
          {totalHitsType === "month" && (
            <>
              {currentValue == 0 ? (
                <div className='value--change--text'>
                  No. of hits has remained{" "}
                  <span style={{ color: "grey" }}>constant</span> since last
                  month
                </div>
              ) : (
                <div className='value--change--text flex_left'>
                  {currentValue[0] === "-" ? (
                    <div>
                      No. of hits has{" "}
                      <span style={{ color: "#ff5252" }}>reduced</span> since
                      last month
                    </div>
                  ) : (
                    <div>
                      No. of hits has{" "}
                      <span style={{ color: "#7ed957" }}>increased</span> since
                      last month
                    </div>
                  )}
                </div>
              )}
            </>
          )}
          {totalHitsType === "year" && (
            <>
              {currentValue == 0 ? (
                <div className='value--change--text'>
                  No. of hits has remained{" "}
                  <span style={{ color: "grey" }}>constant</span> since last
                  year
                </div>
              ) : (
                <div className='value--change--text flex_left'>
                  {currentValue[0] === "-" ? (
                    <div>
                      No. of hits has{" "}
                      <span style={{ color: "#ff5252" }}>reduced</span> since
                      last year
                    </div>
                  ) : (
                    <div>
                      No. of hits has{" "}
                      <span style={{ color: "#7ed957" }}>increased</span> since
                      last year
                    </div>
                  )}
                </div>
              )}
            </>
          )}
          {totalHitsType === "all-time" && <></>}
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
