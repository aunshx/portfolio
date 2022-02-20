// A chart for average tuu time in minutes and the number of tuus done per time

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import {
  getTotalHitsToday,
  getTotalHitsWeek,
  getTotalHitsMonth,
  getTotalHitsYear,
  getTotalHitsAllTime,
} from "../../../../redux/actions/metrics";

import windowSize from "../../../../utils/windowSize";
import NothingToShow from "../NothingToShow";
import DurationSelector from "../DurationSelector";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#0FBB28",
  "#FF8042",
  "#FD8042",
  "#AF0042",
  "#HF0042",
  "#FF0032",
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill='white'
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline='central'
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const VisitorChart = ({
  // Redux Actions
  getTotalHitsToday,
  getTotalHitsWeek,
  getTotalHitsMonth,
  getTotalHitsYear,
  getTotalHitsAllTime,
  // Redux State
  metrics: { totalHitsBlockLoading, totalHitsBlock },
  settings: { displayMode },
}) => {
  const { width, height } = windowSize();
  const [duration, setDuration] = useState("today");

  const onChangeDuration = (e) => {
    setDuration(e.target.value);
    if (e.target.value === "today") {
      getTotalHitsToday();
    }
    if (e.target.value === "week") {
      getTotalHitsWeek();
    }
    if (e.target.value === "month") {
      getTotalHitsMonth();
    }
    if (e.target.value === "year") {
      getTotalHitsYear();
    }
    if (e.target.value === "all-time") {
      getTotalHitsAllTime();
    }
  };

  return (
    <div className='charts flex_middle'>
      <div
        className={displayMode ? "app card card--dark" : "app card"}
        style={{ width: "90%", height: "90%" }}
      >
        <div className='triple_grid'>
          <div></div>
          <div className='title flex_middle'>Total Hits</div>
          <div className='flex_middle'></div>
        </div>
        {totalHitsBlockLoading ? (
          <div className='spinner-new'></div>
        ) : (
          <>
            {totalHitsBlock.length > 0 ? (
              <></>
            ) : (
              <div>
                  0
              </div>
            )}
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

VisitorChart.propTypes = {
  settings: PropTypes.object.isRequired,
  metrics: PropTypes.object.isRequired,
  getTotalHitsToday: PropTypes.func.isRequired,
  getTotalHitsWeek: PropTypes.func.isRequired,
  getTotalHitsMonth: PropTypes.func.isRequired,
  getTotalHitsYear: PropTypes.func.isRequired,
  getTotalHitsAllTime: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  settings: state.settings,
  metrics: state.metrics,
});

const mapStateToActions = {
  getTotalHitsToday,
  getTotalHitsWeek,
  getTotalHitsMonth,
  getTotalHitsYear,
  getTotalHitsAllTime,
};

export default connect(mapStateToProps, mapStateToActions)(VisitorChart);
