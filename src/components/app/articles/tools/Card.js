import { Tooltip } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import useSound from "use-sound";

import swoosh from '../../../../resources/sounds/resumeSwoosh.mp3';

const Card = ({
  technology,
  imagesArray,
  articleImage,
  title,
  link,
  // Redux States
  settings: { displayMode, sound },
}) => {
  const [playOn] = useSound(swoosh, { volume: 0.2 });
  const [colorBorder, setColorBorder] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    switch (true) {
      case technology[0] === "react":
        return setColorBorder("#61dbfb");
      case technology[0] === "blockchain":
        return setColorBorder("#1973F4");
      case technology[0] === "redux":
        return setColorBorder("#61dbfb");
      case technology[0] === "node":
        return setColorBorder("#0fb825");
      case technology[0] === "mongo":
        return setColorBorder("#61dbfb");
      case technology[0] === "postman":
        return setColorBorder("#61dbfb");
      case technology[0] === "postgres":
        return setColorBorder("#61dbfb");
      case technology[0] === "passport":
        return setColorBorder("#61dbfb");
      case technology[0] === "jwt":
        return setColorBorder("#eb3474");
      case technology[0] === "javascript":
        return setColorBorder("#ffc403");
      case technology[0] === "reddit":
        return setColorBorder("#d15e0d");

      default:
        return null;
    }
  }, []);

  const onLoad = () => setIsLoading(false);

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
        <div
          className='image'
          style={{ borderBottom: `2px solid ${colorBorder}` }}
        >
          <div className='check-it-out flex_middle'>Read More</div>
          <div
            style={{
              display: isLoading ? "none" : "block",
              width: "100%",
              height: "100%",
            }}
          >
            <img src={articleImage} alt={title} onLoad={onLoad} />
          </div>
          <div
            style={{
              display: isLoading ? "block" : "none",
              position: "relative",
              paddingTop: "100px",
            }}
            className='flex_middle'
          >
            <div className='loader-me'></div>
          </div>
        </div>
        <div className='tags flex_right'>
          {imagesArray.length > 0 &&
            imagesArray.map((element, index) => (
              <Tooltip title={element.alt} placement='top' key={index}>
                <div style={{ marginRight: "0.5em" }}>
                  <img src={element.image} alt={element.alt} />
                </div>
              </Tooltip>
            ))}
        </div>
        <div className='app' style={{ justifyContent: "space-between" }}>
          <div className='title flex_middle'>{title}</div>
        </div>
      </div>
    </a>
  );
};

Card.propTypes = {
  displayMode: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  settings: state.settings
})

export default connect(mapStateToProps)(Card);
