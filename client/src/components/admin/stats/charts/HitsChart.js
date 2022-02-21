// A chart for average tuu time in minutes and the number of tuus done per time

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { connect } from "react-redux";

import {
  getTotalHitsChartYear,
  getTotalHitsChartMonth,
  getTotalHitsChartWeek,
} from "../../../../redux/actions/metrics";

import windowSize from "../../../../utils/windowSize";
import NothingToShow from "../NothingToShow";
import ShortDurationSelector from "./ShortDurationSelector";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const VisitorChart = ({
  // Redux Actions
  getTotalHitsChartYear,
  getTotalHitsChartMonth,
  getTotalHitsChartWeek,
  // Redux State
  metrics: { totalHitsChartLoading, totalHitsChart },
  settings: { displayMode },
}) => {
  const { width, height } = windowSize();
  const [duration, setDuration] = useState("week");

  useEffect(() => getTotalHitsChartWeek(), []);

  const onChangeDuration = (e) => {
    setDuration(e.target.value);
    if (e.target.value === "week") {
      getTotalHitsChartWeek();
    }
    if (e.target.value === "month") {
      getTotalHitsChartMonth();
    }
    if (e.target.value === "year") {
      getTotalHitsChartYear();
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
          <div className='title flex_middle'>Traffic</div>
          <div className='flex_middle'>
            <ShortDurationSelector
              onChangeDuration={onChangeDuration}
              duration={duration}
            />
          </div>
        </div>
        {totalHitsChartLoading ? (
          <div className='spinner-new' style={{ marginTop: "7em" }}></div>
        ) : (
          <>
            {totalHitsChart.length > 0 ? (
              <ResponsiveContainer
                width='99%'
                height={width < 480 ? 240 : "99%"}
              >
                <LineChart
                  data={totalHitsChart}
                  margin={{
                    top: 20,
                    right: 50,
                    left: 0,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray='3 3' />
                  <XAxis dataKey='name' tick={{ fontSize: "0.8em" }} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type='monotone'
                    dataKey='hits'
                    stroke='rgb(0, 145, 255)'
                  />
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <div style={{ marginTop: "6em" }}>
                <NothingToShow
                  primaryMessage={"Chart is empty"}
                  secondaryMessage={"You've no messages hence no chart!"}
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

VisitorChart.propTypes = {
  settings: PropTypes.object.isRequired,
  metrics: PropTypes.object.isRequired,
  getTotalHitsChartWeek: PropTypes.func.isRequired,
  getTotalHitsChartMonth: PropTypes.func.isRequired,
  getTotalHitsChartYear: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  settings: state.settings,
  metrics: state.metrics,
});

const mapStateToActions = {
  getTotalHitsChartYear,
  getTotalHitsChartMonth,
  getTotalHitsChartWeek,
};

export default connect(mapStateToProps, mapStateToActions)(VisitorChart);
