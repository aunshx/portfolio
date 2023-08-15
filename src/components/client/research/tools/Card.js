import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import useSound from "use-sound";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import CheckIcon from "@mui/icons-material/Check";

import swoosh from "../../../../resources/sounds/resumeSwoosh.mp3";

const Card = ({
  title,
  link,
  description,
  tags,
  achievements,
  // Redux States
  settings: { displayMode, sound },
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
      className='checkout flex_middle'
      target={"_blank"}
      rel='noreferrer nofollow'
    >
      <div
        className={displayMode ? "individual individual--dark" : "individual"}
        onMouseEnter={elementHover}
      >
        <div className='app' style={{ justifyContent: "space-between" }}>
          <div className='title flex_middle'>{title}</div>
          <div className='tags flex_middle'>
            {tags.length > 0 &&
              tags.map((element, index) => (
                <div key={index} className='tag'>
                  {element}
                </div>
              ))}
          </div>
          <div className='description flex_middle'>{description}</div>
          <div className='achievements flex_middle'>
            {achievements.length > 0 &&
              achievements.map((element, index) => (
                <div
                  className='element'
                  key={index}
                  style={
                    index + 1 === achievements.length
                      ? {
                          margin: "0",
                        }
                      : {}
                  }
                >
                  {element === "Best Paper" ? (
                    <div className='flex_middle'>
                      <StarIcon
                        style={{ fontSize: 10, margin: "0 0.2em 0.2em 0" }}
                      />
                      <div>{element}</div>
                    </div>
                  ) : (
                    <div className='flex_middle'>
                      <CheckIcon
                        style={{ fontSize: 10, margin: "0 0.2em 0.2em 0" }}
                      />
                      <div>{element}</div>
                    </div>
                  )}
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
