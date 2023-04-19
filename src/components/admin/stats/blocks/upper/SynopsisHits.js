// A chart for average tuu time in minutes and the number of tuus done per time

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import SynopsisToday from "./synopsis/SynopsisToday";
import SynopsisWeek from "./synopsis/SynopsisWeek";
import SynopsisMonth from "./synopsis/SynopsisMonth";
import SynopsisYear from "./synopsis/SynopsisYear";
import SynopsisAllTime from "./synopsis/SynopsisAllTime";

const SynopsisHits = ({
  // Redux State
  metrics: {
    totalHitsSynopsisLoading,
    totalHitsType,
  },
  settings: { displayMode },
}) => {

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
          {totalHitsType === "today" && <SynopsisToday />}
          {totalHitsType === "week" && <SynopsisWeek />}
          {totalHitsType === "month" && <SynopsisMonth />}
          {totalHitsType === "year" && <SynopsisYear />}
          {totalHitsType === "all-time" && <SynopsisAllTime />}
          </>
        )}
        <div></div>
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
