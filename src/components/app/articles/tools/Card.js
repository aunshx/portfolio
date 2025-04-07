import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import useSound from "use-sound";

import swoosh from "../../../../resources/sounds/resumeSwoosh.mp3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHandsClapping } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "@mui/material";

const Stats = ({ type, value}) => {
  const icon = type === 'views' ? faEye : faHandsClapping;
  const tooltipTitle = type === 'views' ? 'Views' : 'Upvotes';
  return (
    <Tooltip title={tooltipTitle}>
      <div title={tooltipTitle} className="flex items-center justify-center gap-x-2 text-sm text-gray-200">
        <FontAwesomeIcon icon={icon} />
        <div>
          {value}
        </div>
      </div>
    </Tooltip>
  );
};

const Card = ({
  title,
  stats,
  link,
  description,
  technology,
  delay,
  // Redux States
  settings: { sound }
}) => {

  const [playOn] = useSound(swoosh, { volume: 0.2 });

  const elementHover = () => {
    if (sound) {
      playOn();
    }
  };

  return (
    <a
      href={link}
      target={"_blank"}
      rel='noreferrer nofollow'
    >
      <div
        onMouseEnter={elementHover}
        className="max-w-md min-h-[220px] hover:text-brand hover:border-brand flex flex-col items-start justify-around px-8 py-4 border-zinc-700 bg-zinc-900 bg-opacity-75 backdrop-blur-sm opacity-80 rounded-xl border shadow-xl w-full text-white"
      >
        <div className="flex flex-col gap-y-2">
          <div className='text-lg font-bold tracking-tight'>{title}</div>
          <div className='text-sm text-gray-300'>{description}</div>
        </div>
        <div className="w-full flex items-center justify-between gap-4 mt-1 lg:flex-col lg:items-start">
          <div className='flex flex-wrap gap-4 text-gray-400 text-xs mt-1'>
            {technology.length > 0 &&
              technology.map((val, index) => (
                <div
                  className='text-gray-400 bg-gray-800  focus:outline-none text-xs rounded-lg px-2 py-1 min-w-16 text-center'
                  key={index}>
                  {val}
                </div>
              ))}

          </div>
          <div className="flex gap-x-4">
            {Object.entries(stats).map(([k, value], index) => {
              return <Stats key={index} type={k} value={value} />
            })}
          </div>
        </div>
      </div>
    </a>
  );
};

Card.propTypes = {
  displayMode: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  settings: state.settings,
});

export default connect(mapStateToProps)(Card);
