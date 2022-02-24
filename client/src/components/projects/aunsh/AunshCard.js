import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  Box,
  Card,
  Collapse,
  Fade,
  IconButton,
  Modal,
  Tooltip,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";

import Tags from "../Tags";
import TagsSmall from "../TagsSmall";

import defaultImg from "../../../resources/images/default.jpg";
import reduxLogo from "../../../resources/images/reduxLogo.png";
import reactLogo from "../../../resources/images/reactLogo.png";
import jsLogo from "../../../resources/images/jsLogo.png";
import nodeLogo from "../../../resources/images/nodeLogo.png";
import psqlLogo from "../../../resources/images/psqlLogo.png";
import aunshLogo from "../../../resources/images/aunshLogo.png";

import useWindow from "../../../utils/windowSize";
import { connect } from "react-redux";

import { detailsLight, detailsDark } from "./details";

const style = {
  position: "fixed",
  top: "50%",
  left: "50%",
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

const AunshCard = ({
  // Redux State
  settings: { displayMode },
}) => {
  const { width, height } = useWindow();
  const [expanded, setExpanded] = useState(false);
  // const [isPhotoOpen, setIsPhotoOpen] = useState(false);
  const [carousel, setCarousel] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [darkModePics, setDarkModePics] = useState(0);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const activateCarousel = () => {
    setCarousel(true)
  }

  const deactivateCarousel = () => {
    setCarousel(false);
  };

  const showDarkModePicsAndArray = () => {
    setDarkModePics(true);
  };

  const showLightModePicsAndArray = () => {
    setDarkModePics(false);
  };

  const increaseCurrentIndex = () => {
    if(currentIndex === detailsLight.length - 1) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }

  const decreaseCurrentIndex = () => {
    if(currentIndex === 0) {
      setCurrentIndex(detailsLight.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }
  return (
    <div
      className={
        displayMode
          ? "individual individual--projects--dark--bodinga"
          : "individual"
      }
      data-aos='fade-up'
      onMouseEnter={activateCarousel}
      onMouseLeave={deactivateCarousel}
    >
      <div className='double_grid'>
        <div
          className='image'
          // onClick={() => setIsPhotoOpen(true)}
        >
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
          <img
            src={
              darkModePics
                ? detailsDark[currentIndex].imgSource || defaultImg
                : detailsLight[currentIndex].imgSource || defaultImg
            }
            alt='Bodinga Home Page'
            className={detailsLight[currentIndex].needsFit ? 'image-needs-fit' : ''}
          />
          {carousel && (
            <div className={darkModePics ? "text text--dark" : "text"}>
              <div className='main-carousel'>
                {darkModePics
                  ? detailsDark[currentIndex].imgText || defaultImg
                  : detailsLight[currentIndex].imgText || defaultImg}
              </div>
              <div className='icon-carousel flex_middle'>
                <Tooltip title='Expand Photo' placement='top'>
                  <div style={{ marginRight: "0.5em" }}>
                    <OpenInFullIcon
                      className='expand-carousel'
                      style={{ fontSize: 13, marginTop: "0.2em" }}
                    />
                  </div>
                </Tooltip>
                {darkModePics ? (
                  <div className='moon cursor_pointer'>
                    <Tooltip title='Dark mode pics' placement='left'>
                      <div>
                        <FontAwesomeIcon
                          icon={faMoon}
                          className={"mobile_logo--tilted"}
                          onClick={showLightModePicsAndArray}
                          style={{
                            fontSize: 13,
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
                            fontSize: 13,
                            marginTop: "3px",
                          }}
                        />
                      </div>
                    </Tooltip>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <div className='details app' style={{ justifyContent: "space-around" }}>
          <a
            href='https://aunsh.com'
            target={"_blank"}
            rel='noreferrer nofollow'
          >
            <div
              className='title flex_middle'
              style={{ marginBottom: "-0.6em" }}
            >
              <div
                style={{
                  objectFit: "contain",
                  width: "35px",
                  margin: "0.4em 0.5em 0 0",
                }}
              >
                <img src={aunshLogo} alt='Bodinga Logo' />
              </div>
              <div>aunsh.com</div>
            </div>
          </a>
          <div className='description'>
            My portfolio website including projects and contact for a visitor
            and an admin dashboard for statistics and messages received.
          </div>
          <div className='links'>
            <div className='flex_middle'>
              <a
                href='https://github.com/aunshx/portfolio'
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
                href=''
                target={"_blank"}
                rel='noreferrer nofollow'
                alt='Live Demo'
                className='indi'
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=''>
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
                    <TagsSmall
                      text={"React"}
                      logo={reactLogo}
                      classGiven={"react"}
                    />
                    <TagsSmall text={"JS"} logo={jsLogo} classGiven={"js"} />
                    <TagsSmall
                      text={"Redux"}
                      logo={reduxLogo}
                      classGiven={"redux"}
                    />
                    <TagsSmall
                      text={"Node"}
                      logo={nodeLogo}
                      classGiven={"node"}
                    />
                    <TagsSmall
                      text={"Postgres"}
                      logo={psqlLogo}
                      classGiven={"express"}
                    />
                    <TagsSmall
                      text={"Express"}
                      logo={""}
                      classGiven={"postgres"}
                    />
                  </div>
                )}
                {width > 650 && (
                  <>
                    <Tags
                      text={"React"}
                      logo={reactLogo}
                      classGiven={"react"}
                    />
                    <Tags text={"JS"} logo={jsLogo} classGiven={"js"} />
                    <Tags
                      text={"Redux"}
                      logo={reduxLogo}
                      classGiven={"redux"}
                    />
                    <Tags text={"Node"} logo={nodeLogo} classGiven={"node"} />
                    <Tags
                      text={"Postgres"}
                      logo={psqlLogo}
                      classGiven={"express"}
                    />
                    <Tags text={"Express"} logo={""} classGiven={"postgres"} />
                  </>
                )}
              </div>
              <div className='details app'>
                <div className='title'>Details</div>
                <div className='list'>
                  <ul>
                    <li>
                      Automated business flow of sale and purchase of items.
                    </li>
                    <li>
                      Complete diagnosis flow including patient registration,
                      case records, prescription, diagnosis and billing.
                    </li>
                    <li>
                      Intelligent metrics and statistics of each owner, pet or
                      business to target the right customers & negotiate better
                      prices with vendors.
                    </li>
                    <li>
                      Automatic reminders by email and sms to target the right
                      customers based on the metrics calculated
                    </li>
                    <li>
                      Current event scheduler and in-built appointment system
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Collapse>
      </div>
      {/* <Modal
        open={isPhotoOpen}
        onClose={() => setIsPhotoOpen(false)}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
          style: {
            backgroundColor: "rgba(0,0,0,0.8)",
          },
        }}
      >
        <Fade in={isPhotoOpen}>
          <Box style={style}>
            <Card style={{ padding: "0.2em" }}>
              <div className='flex_right'>
                <CloseIcon
                  onClick={() => setIsPhotoOpen(false)}
                  className='cancel cursor_pointer'
                  style={{ marginRight: "0.3em" }}
                />
              </div>
              <div style={{ padding: "0.3em 0.6em 0.6em 0.6em" }}>
                <img src={defaultImg} alt='Bodinga Home Page' />
              </div>
            </Card>
          </Box>
        </Fade>
      </Modal> */}
    </div>
  );
};

AunshCard.propTypes = {
  settings: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  settings: state.settings,
});

const mapStateToActions = {};

export default connect(mapStateToProps, mapStateToActions)(AunshCard);
