import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {Tooltip} from '@mui/material'


import useWindow from '../../utils/windowSize';
import { connect } from 'react-redux';

const ArticleOne = ({
  delay,
  technology,
  imagesArray,
  articleImage,
  title,
  runAos,
  // Redux States
  settings: { displayMode },
}) => {
  const { width, height } = useWindow();
  const [colorBorder, setColorBorder] = useState("");

  useEffect(() => {
    switch (true) {
      case technology[0] === "react":
        return setColorBorder("#61dbfb");
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
      case technology[0] === "reddit":
        return setColorBorder("#d15e0d");

      default:
        return null;
    }
  }, []);

  return (
    <div
      className={displayMode ? "individual individual--dark" : "individual"}
      data-aos={runAos ? (width < 787 ? "fade-in" : "fade-in") : ""}
      data-aos-offset={width < 787 && 30}
    >
      <div
        className='image'
        style={{ borderBottom: `2px solid ${colorBorder}` }}
      >
        <img src={articleImage} alt='Article default' />
      </div>
      <div className='tags flex_right'>
        {imagesArray.length > 0 &&
          imagesArray.map((element, index) => (
            <Tooltip title={element.alt} placement='top'>
              <div style={{ marginRight: "0.5em" }} key={index}>
                <img src={element.image} alt={element.alt} />
              </div>
            </Tooltip>
          ))}
      </div>
      <div className='app' style={{ justifyContent: 'space-between' }}>
        <div className='title'>{title}</div>
        <div className='description'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
          temporibus odio voluptatum, reprehenderit alias in.
        </div>
        <div className='checkout flex_middle'>
          <div>Read full article</div>
          <div style={{ marginLeft: "0.5em" }}>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>
    </div>
  );
};

ArticleOne.propTypes = {
  displayMode: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  settings: state.settings
})

export default connect(mapStateToProps)(ArticleOne);
