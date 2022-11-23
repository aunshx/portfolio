import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Tooltip,
  Zoom,
  Box,
  Fade,
  Modal,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from "@mui/icons-material/Launch";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import useWindow from "react-window-size-simple";

import BigPic from "./BigPic";

const useStyles = makeStyles((theme) => ({
  customTooltip: {
    backgroundColor: "rgb(230, 230, 230)",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
    color: "rgb(100, 100, 100)",
  },
}));

const style = {
  position: "fixed",
  top: "40%",
  left: "54%",
  transform: "translate(-50%, -50%)",
//   bgcolor: "white",
  boxShadow: 24,
  border: "none",
  outline: "none",
  padding: "1em",
  width: "70%",
  height: "60%",
};


const InvertedCard = ({
  pics,
  title,
  link,
  subTitle,
  description,
  tech,
  gitUrl,
  // Redux State
  settings: { displayMode },
}) => {
  const classes = useStyles();

  const { width } = useWindow();
  const [isLoading, setIsLoading] = useState(true);
  const [isBigPicOpen, setIsBigPicOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [borderColorNow, setBorderColorNow] = useState("");

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    switch (true) {
      case title === "aunsh.com":
        setBorderColorNow("#34cfeb");
        break;

      case title === "Fun w/ Reddit":
        setBorderColorNow("#de793e");
        break;

      case title === "gotuu.in":
        setBorderColorNow("#3ede69");
        break;

      default:
        return null;
    }
  }, []);


  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const increaseCurrentIndex = () => {
    if (currentIndex === pics.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
    setIsLoading(true);
  };

  const decreaseCurrentIndex = () => {
    if (currentIndex === 0) {
      setCurrentIndex(pics.length - 1);
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

  const onLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className='card-container'>
      <div className='invert-grid'>
        <div className='details-container'>
          <div
            className='title app'
            style={{
              alignItems: "flex-start",
            }}
          >
            <a href={link} target={"_blank"} rel='noopener noreferrer nofollow'>
              <div className='name'>{title}</div>
            </a>
            <div className='sub-title'>{subTitle}</div>
          </div>
          <div className='description flex_left'>{description}</div>
          <div className='tech-stack flex_left'>
            {tech.length > 0 &&
              tech.map((element, index) => (
                <div className='tech' key={index}>
                  {element}
                </div>
              ))}
          </div>
          <div className='icons flex_right'>
            <Tooltip
              title='Open Image Carousel'
              placement='top'
              classes={{ tooltip: classes.customTooltip }}
              TransitionComponent={Zoom}
              enterDelay={390}
            >
              <div className='icon' onClick={bigPicOpen}>
                <OpenInFullIcon style={{ fontSize: 20 }} />
              </div>
            </Tooltip>
            <Tooltip
              title='To Github Profile'
              placement='top'
              classes={{ tooltip: classes.customTooltip }}
              TransitionComponent={Zoom}
              enterDelay={390}
            >
              <div className='icon'>
                <a
                  href={gitUrl}
                  target={"_blank"}
                  rel='noopener noreferrer nofollow'
                >
                  <GitHubIcon style={{ fontSize: 20 }} />
                </a>
              </div>
            </Tooltip>
            <Tooltip
              title='To Web App'
              placement='top'
              classes={{ tooltip: classes.customTooltip }}
              TransitionComponent={Zoom}
              enterDelay={390}
            >
              <div className='icon' style={{ marginRight: "0" }}>
                <a
                  href={link}
                  target={"_blank"}
                  rel='noopener noreferrer nofollow'
                >
                  <LaunchIcon style={{ fontSize: 20 }} />
                </a>
              </div>
            </Tooltip>
          </div>
        </div>
        <div className='image-container'>
          <a href={link} target={"_blank"} rel='noopener noreferrer nofollow'>
            <div
              className='image'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={pics[currentIndex].imgSource}
                alt={pics[currentIndex].imgText}
                style={
                  isHovering
                    ? {
                        boxShadow: `0px 0px 20px 0px ${borderColorNow}`,
                        transition: ".1s ease-in-out",
                      }
                    : {}
                }
              />
            </div>
          </a>
        </div>
      </div>
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
              pics={pics}
              currentIndex={currentIndex}
              increaseCurrentIndex={increaseCurrentIndex}
              decreaseCurrentIndex={decreaseCurrentIndex}
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

InvertedCard.propTypes = {
  settings: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  settings: state.settings,
});

const mapStateToActions = {};

export default connect(mapStateToProps, mapStateToActions)(InvertedCard);
