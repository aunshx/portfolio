import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {Tooltip} from '@mui/material'
import { Link } from 'react-router-dom'


import useWindow from "react-window-size-simple";
import { connect } from 'react-redux';

const ArticleOne = ({
  delay,
  technology,
  imagesArray,
  articleImage,
  title,
  runAos,
  link,
  description,
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
      case technology[0] === "javascript":
        return setColorBorder("#ffc403");
      case technology[0] === "reddit":
        return setColorBorder("#d15e0d");

      default:
        return null;
    }
  }, []);

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
        data-aos={runAos ? (width < 787 ? "fade-in" : "fade-in") : ""}
        data-aos-offset={width < 787 && 30}
      >
        <div
          className='image'
          style={{ borderBottom: `2px solid ${colorBorder}` }}
        >
          <div className='check-it-out flex_middle'>Read More</div>
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
        <div className='app' style={{ justifyContent: "space-between" }}>
          <div className='title flex_middle'>{title}</div>
          <div className='description flex_middle'>
            {description ||
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, maiores."}
          </div>
        </div>
      </div>
    </Link>
  );
};

ArticleOne.propTypes = {
  displayMode: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  settings: state.settings
})

export default connect(mapStateToProps)(ArticleOne);
