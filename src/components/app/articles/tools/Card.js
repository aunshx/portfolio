import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import useSound from "use-sound";

import swoosh from "../../../../resources/sounds/resumeSwoosh.mp3";

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
        className="max-w-md max-h-xl min-h-[180px] w-full bg-none border-2 border-gray-800 dark:border-gray-800 rounded-lg hover:scale-105 transition general-card hover:text-brand dark:hover:border-brand dark:hover:text-brand p-4"
      >
        <div className="flex flex-col gap-y-2">
          <div className='text-lg font-bold tracking-tight'>{title}</div>
          <div className='text-sm text-gray-400'>{description}</div>
          <div className='flex flex-wrap gap-4 text-gray-500 text-xs mt-1'>
            {technology.length > 0 &&
              technology.map((val, index) => (
                <div
                  className='text-gray-600 bg-gray-900  focus:outline-none font-xs rounded-xl text-sm px-2 py-1 min-w-16 text-center'
                  key={index}>
                  {val}
                </div>
              ))}
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
