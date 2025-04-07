import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import useSound from "use-sound";

import swoosh from "../../../../resources/sounds/resumeSwoosh.mp3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

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
        className="max-w-md min-h-[220px] hover:text-brand hover:border-brand flex flex-col items-start justify-around px-8 py-4 border-slate-700 bg-slate-900 bg-opacity-75 backdrop-blur-sm opacity-80 rounded-xl border shadow-xl w-full text-white"
      >
          <div className='text-lg font-bold tracking-tight'>{title}</div>
          <div className='text-sm text-gray-300'>{description}</div>
        <div className="w-full flex items-center justify-between gap-4 mt-1 lg:flex-col lg:items-start">
          <div className="flex flex-wrap gap-1 text-sm">
            {tags.length > 0 &&
              tags.map((element, index) => (
                <div key={index} className='text-gray-400 gap-x-1 flex'>
                  {element}
                  {index !== tags.length - 1 && <div>&#8226;</div>}
                </div>
              ))}
          </div>
          {achievements.length > 0 && (
            <div className='flex flex-wrap gap-4 text-gray-400 text-xs'>
              {achievements.map((val, index) => (
                <div
                  className='border px-2 py-1 rounded-md border-violet-500 dark:border-violet-500 flex items-center justify-center gap-x-1'
                  key={index}>
                  <FontAwesomeIcon icon={faStar} />
                  <span>
                    {val}
                  </span>
                </div>
              ))}
            </div>
            )}
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
