import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import useSound from "use-sound";

import swoosh from "../../../../resources/sounds/resumeSwoosh.mp3";

const Card = ({
  title,
  link,
  description,
  tags,
  achievements,
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
        className="max-w-md max-h-xl min-h-[230px] bg-none border-2 border-gray-800 dark:border-gray-800 rounded-lg hover:scale-105 transition projects-card hover:text-brand dark:hover:border-brand dark:hover:text-brand p-4"
      >
        <div className="flex flex-col gap-y-2">
          <div className='text-lg font-bold tracking-tight'>{title}</div>
          <div className='text-md text-gray-400'>{description}</div>
          <div className="flex flex-wrap gap-2 text-sm">
            {tags.length > 0 &&
              tags.map((element, index) => (
                <div key={index} className='text-gray-500 gap-x-2 flex'>
                  {element} 
                  {index !== tags.length - 1 && <div>&#8226;</div>}
                </div>
              ))}
          </div>
          <div className='flex flex-wrap gap-4 text-gray-500 text-xs mt-1'>
            {achievements.length > 0 &&
              achievements.map((val, index) => (
                <div
                  className='border px-2 py-1 rounded-md border-violet-500 dark:border-violet-500'
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
