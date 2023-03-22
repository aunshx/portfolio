import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import useSound from "use-sound";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import CheckIcon from "@mui/icons-material/Check";

import swoosh from "../../../../resources/sounds/resumeSwoosh.mp3";

const Card = ({
  icon,
  title,
  link,
  description,
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
    <Link
      to={{
        pathname: link,
      }}
      className='checkout flex_middle'
      target={"_blank"}
      rel='noreferrer nofollow'
    >
      <div
        className={displayMode ? "individual individual--dark" : "individual"}
        onMouseEnter={elementHover}
        style={{ minHeight: "100px" }}
      >
        <div className='check-it-out flex_middle'>Read More</div>

        <div className='app' style={{ justifyContent: "space-between" }}>
          <div className='icon'>{icon}</div>
          <div className='title flex_middle'>{title}</div>
          <div className='description flex_middle'>{description}</div>
        </div>
      </div>
    </Link>
  );
};

Card.propTypes = {
  displayMode: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  settings: state.settings,
});

export default connect(mapStateToProps)(Card);
