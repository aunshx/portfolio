import React, { useState } from "react";
import PropTypes from "prop-types";
import useWindow from "react-window-size-simple";
import { connect } from "react-redux";

const Card = ({
  pics,
  title,
  link,
  subTitle,
  // Redux State
  settings: { displayMode },
}) => {

    const [currentImage, setCurrentImage] = useState(0)
  return (
    <div className='card-container'>
      <div className='grid'>
        <div
          className='image-container'
          // style={{ border: "1px solid blue" }}
        >
          <a href={link} target={"_blank"} rel='noopener noreferrer nofollow'>
            <div className='image'>
              <img
                src={pics[currentImage].imgSource}
                alt={pics[currentImage].imgText}
              />
            </div>
          </a>
        </div>
        <div className='details-container'>
          <div
            className='title app'
            style={{
              alignItems: "flex-end",
            }}
          >
            <a href={link} target={"_blank"} rel='noopener noreferrer nofollow'>
              <div className='name'>{title}</div>
            </a>
            <div className='sub-title'>{subTitle}</div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  settings: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  settings: state.settings,
});

const mapStateToActions = {};

export default connect(mapStateToProps, mapStateToActions)(Card);
