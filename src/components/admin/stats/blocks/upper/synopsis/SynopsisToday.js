// A chart for average tuu time in minutes and the number of tuus done per time

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

const SynopsisHits = ({
  // Redux State
  metrics: {
    totalHitsBlock,
    totalHitsSynopsisToday,
  },
}) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
      if (totalHitsSynopsisToday === 0) {
        setCurrentValue((parseInt(totalHitsBlock) * 100).toFixed(1));
      } else {
        setCurrentValue(
          (
            ((parseInt(totalHitsBlock) - parseInt(totalHitsSynopsisToday)) /
              parseInt(totalHitsSynopsisToday)) *
            100
          ).toFixed(1)
        );
      }
  }, []);

  return (
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
        )}
      <div>
            {currentValue == 0 ? (
              <div className='value--change--text'>
                No. of hits has remained{" "}
                <span style={{ color: "grey" }}>constant</span> since yesterday
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
      </div>
      </>
  );
};

SynopsisHits.propTypes = {
  metrics: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  metrics: state.metrics,
});

const mapStateToActions = {
};

export default connect(mapStateToProps, mapStateToActions)(SynopsisHits);
