import React, { useState } from "react";
import PropTypes from "prop-types";
import useWindow from "react-window-size-simple";
import { connect } from "react-redux";

import { Box, Collapse, Fade, IconButton, Modal, Tooltip } from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import Tags from "./Tags";
import TagsSmall from "./TagsSmall";

import defaultImg from "../../../resources/images/default/default.jpg";

import BigPic from "./BigPic";

const style = {
  position: "fixed",
  top: "40%",
  left: "54%",
  transform: "translate(-50%, -50%)",
  bgcolor: "white",
  boxShadow: 24,
  border: "none",
  padding: "1em",
  width: "70%",
  height: "60%",
};

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  width: "1em",
  height: "1em",
  color: "white",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Card = ({
  runAos,
  picsLight,
  picsDark,
  logo,
  details,
  description,
  websiteTitle,
  websiteUrl,
  gitUrl,
  tags,
  type,
  // Redux State
  settings: { displayMode },
}) => {
  const { width } = useWindow();
  const [isLoading, setIsLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [isBigPicOpen, setIsBigPicOpen] = useState(false);
  const [carousel, setCarousel] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [darkModePics, setDarkModePics] = useState(0);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const activateCarousel = () => {
    setCarousel(true);
  };

  const deactivateCarousel = () => {
    setCarousel(false);
  };

  const showDarkModePicsAndArray = () => {
    setIsLoading(true);
    setDarkModePics(true);
  };

  const showLightModePicsAndArray = () => {
    setIsLoading(true);
    setDarkModePics(false);
  };

  const increaseCurrentIndex = () => {
    if (currentIndex === picsLight.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
    setIsLoading(true);
  };

  const decreaseCurrentIndex = () => {
    if (currentIndex === 0) {
      setCurrentIndex(picsLight.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
    setIsLoading(true);
  };

  const bigPicClose = () => {
    setIsBigPicOpen(false);
  };

  const bigPicOpen = () => {
    setIsBigPicOpen(true);
  };

  const activation = () => {
    if (carousel) {
      setCarousel(false);
    } else {
      setCarousel(true);
    }
  };

  const onLoad = () => {
    setIsLoading(false);
  };

  return (
    <div
      className={
        displayMode
          ? `individual individual--projects--dark--${type}`
          : "individual"
      }
      data-aos={runAos ? "fade-up" : ""}
      onMouseEnter={activateCarousel}
      onMouseLeave={deactivateCarousel}
      onClick={activation}
    >
      <div className='image'>
        <div
          style={{
            display: isLoading ? "block" : "none",
            height: width > 1050 ? "400px" : "230px",
          }}
          className='flex_middle'
        >
          <div className='loader-me'></div>
        </div>
        <div style={{ display: isLoading ? "none" : "block" }}>
          <img
            src={
              darkModePics
                ? picsDark[currentIndex].imgSource || defaultImg
                : picsLight[currentIndex].imgSource || defaultImg
            }
            alt='Bodinga Home Page'
            className={
              picsLight[currentIndex].needsFit ? "image-needs-fit" : ""
            }
            onLoad={onLoad}
          />
        </div>
        {carousel && (
          <div className='next' onClick={increaseCurrentIndex}>
            <NavigateNextIcon style={{ fontSize: 30 }} />
          </div>
        )}
        {carousel && (
          <div className='before' onClick={decreaseCurrentIndex}>
            <NavigateBeforeIcon style={{ fontSize: 30 }} />
          </div>
        )}
        {carousel && (
          <div className={darkModePics ? "text text--dark" : "text"}>
            <div className='main-carousel'>
              {darkModePics
                ? picsDark[currentIndex].imgText || defaultImg
                : picsLight[currentIndex].imgText || defaultImg}
            </div>
            <div className='icon-carousel flex_middle'>
              {width > 650 && (
                <Tooltip title='Expand Photo' placement='top'>
                  <div style={{ marginRight: "0.7em" }} onClick={bigPicOpen}>
                    <OpenInFullIcon
                      className='expand-carousel'
                      style={{ fontSize: 18, marginTop: "0.3em" }}
                    />
                  </div>
                </Tooltip>
              )}
              {picsDark &&
                (darkModePics ? (
                  <div className='moon cursor_pointer'>
                    <Tooltip title='Dark mode pics' placement='left'>
                      <div>
                        <FontAwesomeIcon
                          icon={faMoon}
                          className={"mobile_logo--tilted"}
                          onClick={showLightModePicsAndArray}
                          style={{
                            fontSize: 18,
                            marginTop: "3px",
                          }}
                        />
                      </div>
                    </Tooltip>
                  </div>
                ) : (
                  <div className='sun cursor_pointer'>
                    <Tooltip title='Light mode pics' placement='left'>
                      <div>
                        <FontAwesomeIcon
                          icon={faSun}
                          className={"mobile_logo--tilted"}
                          onClick={showDarkModePicsAndArray}
                          style={{
                            fontSize: 18,
                            marginTop: "3px",
                          }}
                        />
                      </div>
                    </Tooltip>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
      {/* <div className='details app' style={{ justifyContent: "space-around" }}>
        <a href={websiteUrl} target={"_blank"} rel='noreferrer nofollow'>
          <div className='title flex_middle' style={{ marginBottom: "-0.6em" }}>
            <div
              style={{
                objectFit: "contain",
                width: "35px",
                margin: "0.4em 0.5em 0 0",
              }}
            >
              <img src={logo} alt='Bodinga Logo' />
            </div>
            <div>{websiteTitle}</div>
          </div>
        </a>
        <div className='description'>{description}</div>
        <div className='links'>
          <div className='flex_middle'>
            <a
              href={gitUrl}
              target={"_blank"}
              rel='noreferrer nofollow'
              alt='Github Repo link'
              className='indi'
            >
              Repo
            </a>
          </div>
          <Tooltip title='Show More Details' placement='top'>
            <div className='indi flex_middle'>
              <ExpandMore
                expand={expanded}
                aria-expanded={expanded}
                aria-label='show more'
              >
                <ExpandMoreIcon
                  style={{
                    fontSize: 28,
                  }}
                  className='expand'
                  onClick={handleExpandClick}
                />
              </ExpandMore>
            </div>
          </Tooltip>
          <div className='flex_middle'>
            <a
              href={websiteUrl}
              target={"_blank"}
              rel='noreferrer nofollow'
              alt='Live Demo'
              className='indi'
            >
              Demo
            </a>
          </div>
        </div>
      </div> */}
      {/* <div className=''>
        <Collapse
          in={expanded}
          timeout='auto'
          unmountOnExit
          style={{
            padding: 0,
          }}
        >
          <div className='expanded'>
            <div className='double'>
              <div className='app' style={{ justifyContent: "center" }}>
                <div className='title'>Tech Stack</div>
                {width <= 650 && (
                  <div className={width <= 650 ? "flex_middle" : ""}>
                    {tags.length > 0 &&
                      tags.map((element, index) => (
                        <TagsSmall key={index} text={element} />
                      ))}
                  </div>
                )}
                {width > 650 && (
                  <>
                    {tags.length > 0 &&
                      tags.map((element, index) => (
                        <Tags key={index} text={element} />
                      ))}
                  </>
                )}
              </div>
              <div className='details app'>
                <div className='title'>Details</div>
                <div className='list'>
                  <ul>
                    {details.length > 0 &&
                      details.map((element, index) => (
                        <li key={index}>{element}</li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Collapse>
      </div> */}
      <Modal
        open={isBigPicOpen}
        onClose={bigPicClose}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
          style: {
            backgroundColor: "rgba(0,0,0,0.8)",
          },
        }}
      >
        <Fade in={isBigPicOpen}>
          <Box style={style}>
            <BigPic
              close={bigPicClose}
              picsLight={picsLight}
              picsDark={picsDark}
              currentIndex={currentIndex}
              darkModePics={darkModePics}
              increaseCurrentIndex={increaseCurrentIndex}
              decreaseCurrentIndex={decreaseCurrentIndex}
              showDarkModePicsAndArray={showDarkModePicsAndArray}
              showLightModePicsAndArray={showLightModePicsAndArray}
              displayMode={displayMode}
              isLoading={isLoading}
              onLoad={onLoad}
              width={width}
            />
          </Box>
        </Fade>
      </Modal>
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
