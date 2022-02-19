// A chart for average tuu time in minutes and the number of tuus done per time

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Legend,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

// import DurationSelector from "../DurationSelector";
// import NothingToShow from "../../NothingToShow";
import { connect } from "react-redux";

// import {
//   getAvgDurationOfTuusPerDayPerYear,
//   getAvgDurationOfTuusPerDayPerMonth,
//   getAvgDurationOfTuusPerDay,
// } from "../../../../redux/actions/metrics";

import windowSize from "../../../utils/windowSize";
import NothingToShow from "./NothingToShow";
import DurationSelector from "./DurationSelector";

const data = [
//   { name: "Group A", value: 400 },
//   { name: "Group B", value: 300 },
//   { name: "Group C", value: 300 },
//   { name: "Group D", value: 200 },
//   { name: "Group D", value: 200 },
//   { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

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
//   data,
  dataHours,
  loading,

}) => {
  const { width, height } = windowSize();
  const [duration, setDuration] = useState("week");

  const onChangeDuration = (e) => {
    setDuration(e.target.value);
    if (e.target.value === "month") {
    //   getAvgDurationOfTuusPerDayPerMonth();
    }
    if (e.target.value === "week") {
    //   getAvgDurationOfTuusPerDay();
    }
    if (e.target.value === "year") {
    //   getAvgDurationOfTuusPerDayPerYear();
    }
  };

  return (
    <div className='charts flex_middle'>
      <div className='app card' style={{ width: "90%", height: "90%" }}>
        <div className='triple_grid'>
          <div></div>
          <div className='title flex_middle'>Country Origins</div>
          <div className="flex_middle">
            <DurationSelector onChangeDuration={onChangeDuration} duration={duration} />
          </div>
        </div>
        {loading ? (
          <div className='spinner-new'></div>
        ) : (
          <>
            {data.length > 0 ? (
              <ResponsiveContainer
                width='99%'
                height={width < 480 ? 240 : "99%"}
              >
                <PieChart>
                  <Pie
                    data={data}
                    cx='50%'
                    cy='50%'
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill='#8884d8'
                    dataKey='value'
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend
                    layout='horizontal'
                    verticalAlign='bottom'
                    align='center'
                  />
                </PieChart>
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

// VisitorChart.propTypes = {
//   getAvgDurationOfTuusPerDayPerYear: PropTypes.func.isRequired,
//   getAvgDurationOfTuusPerDayPerMonth: PropTypes.func.isRequired,
//   getAvgDurationOfTuusPerDay: PropTypes.func.isRequired,
// };

const mapStateToProps = (state) => ({});

const mapStateToActions = {
//   getAvgDurationOfTuusPerDayPerYear,
//   getAvgDurationOfTuusPerDayPerMonth,
//   getAvgDurationOfTuusPerDay,
};

export default connect(mapStateToProps, mapStateToActions)(VisitorChart);
