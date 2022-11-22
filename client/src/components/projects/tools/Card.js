import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Tooltip, Zoom } from "@mui/material";
import { makeStyles } from "@mui/styles";

import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from "@mui/icons-material/Launch";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";

const useStyles = makeStyles((theme) => ({
  customTooltip: {
    backgroundColor: "rgb(230, 230, 230)",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
    color: "rgb(100, 100, 100)",
  },
}));


const Card = ({
  pics,
  title,
  link,
  subTitle,
  description,
  tech,
  websiteUrl,
  gitUrl,
  // Redux State
  settings: { displayMode },
}) => {
    const classes = useStyles();

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
          <div className='description flex_left'>{description}</div>
          <div className='tech-stack flex_right'>
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
              <div className='icon'>
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
              <div className='icon' style={{ marginRight: '0' }} >
                <a
                  href={websiteUrl}
                  target={"_blank"}
                  rel='noopener noreferrer nofollow'
                >
                  <LaunchIcon style={{ fontSize: 20 }} />
                </a>
              </div>
            </Tooltip>
          </div>
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
