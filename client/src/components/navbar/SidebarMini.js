import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faHome, faMobileAlt, faNewspaper, faTools, faUser } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "@mui/material";

import { makeStyles } from "@mui/styles";

import CloseIcon from '@mui/icons-material/Close';

import mediumLogo from "../../resources/images/mediumLogo.png";
import mediumLogoHover from "../../resources/images/mediumLogoHover.png";
import mediumLogoDark from "../../resources/images/mediumLogoDark.png";
import githubLogo from "../../resources/images/githubLogo.png";
import githubLogoHover from "../../resources/images/githubLogoHover.png";
import githubLogoDark from "../../resources/images/githubLogoDark.png";
import linkedInLogo from "../../resources/images/linkedInLogo.png";
import linkedInLogoHover from "../../resources/images/linkedInLogoHover.png";
import linkedInLogoDark from "../../resources/images/linkedInLogoDark.png";

const useStyles = makeStyles((theme) => ({
  customTooltip: {
    backgroundColor: "rgb(245, 245, 245)",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
    color: "rgb(72, 72, 72)",
  },
}));

const SidebarMini = ({ close,
  // Redux State
  settings: { displayMode }
}) => {
  const classes = useStyles();

  const [githubHover, setGithubHover] = useState(false);
  const [mediumHover, setMediumHover] = useState(false);
  const [linkedInHover, setLinkedInHover] = useState(false);

  const githubHoverMoveEnter = () => {
    setGithubHover(true);
  };

  const githubHoverMoveLeave = () => {
    setGithubHover(false);
  };

  const mediumHoverMoveEnter = () => {
    setMediumHover(true);
  };

  const mediumHoverMoveLeave = () => {
    setMediumHover(false);
  };

  const linkedInHoverMoveEnter = () => {
    setLinkedInHover(true);
  };

  const linkedInHoverMoveLeave = () => {
    setLinkedInHover(false);
  };
  return (
    <div className='sidebar'>
      <div className='title flex_around'>
        <div></div>
        <div className='text'>Menu</div>
        <div className='icon cursor_pointer flex_middle'>
          <CloseIcon
            style={{ fontSize: 16, marginTop: "0.1em" }}
            className='cancel'
            onClick={close}
          />
        </div>
      </div>
      <div className='app'>
        <NavLink to='/' activeStyle={{ color: "rgb(105, 182, 242)" }}>
          <div className='element flex_between'>
            <div>
              <FontAwesomeIcon icon={faHome} style={{ marginRight: "0.5em" }} />
            </div>
            <div>Home</div>
          </div>
        </NavLink>
        <NavLink to='/user' activeStyle={{ color: "rgb(105, 182, 242)" }}>
          <div className='element flex_between'>
            <div>
              <FontAwesomeIcon icon={faUser} style={{ marginRight: "0.5em" }} />
            </div>
            <div>About</div>
          </div>
        </NavLink>
        <NavLink to='/projects' activeStyle={{ color: "rgb(105, 182, 242)" }}>
          <div className='element flex_between'>
            <div>
              <FontAwesomeIcon
                icon={faTools}
                style={{ marginRight: "0.5em" }}
              />
            </div>
            <div>Projects</div>
          </div>
        </NavLink>
        <NavLink to='/articles' activeStyle={{ color: "rgb(105, 182, 242)" }}>
          <div className='element flex_between'>
            <div>
              <FontAwesomeIcon
                icon={faNewspaper}
                style={{ marginRight: "0.5em" }}
              />
            </div>
            <div>Articles</div>
          </div>
        </NavLink>
        <NavLink to='/skills' activeStyle={{ color: "rgb(105, 182, 242)" }}>
          <div className='element flex_between'>
            <div>
              <FontAwesomeIcon
                icon={faBrain}
                style={{ marginRight: "0.5em" }}
              />
            </div>
            <div>Skills</div>
          </div>
        </NavLink>
        <NavLink to='/contact' activeStyle={{ color: "rgb(105, 182, 242)" }}>
          <div className='element flex_between'>
            <div>
              <FontAwesomeIcon
                icon={faMobileAlt}
                style={{ marginRight: "0.5em" }}
              />
            </div>
            <div>Contact</div>
          </div>
        </NavLink>
        <div className='element ft-bold' style={{ marginTop: "0em" }}>
          Socials
        </div>
        <a
          href='https://github.com/aunshx'
          target={"_blank"}
          rel='noreferrer nofollow'
          alt='Github Logo'
        >
          <div
            className='element flex_between'
            style={{ padding: "0em", marginTop: "0.2em" }}
          >
            <Tooltip
              title='Go To Github Profile'
              placement='right'
              classes={{ tooltip: classes.customTooltip }}
            >
              <div
                style={{ objectFit: "contain", width: "18px" }}
                onMouseEnter={githubHoverMoveEnter}
                onMouseLeave={githubHoverMoveLeave}
              >
                {githubHover ? (
                  <img src={githubLogoHover} alt='Github Logo' />
                ) : (
                  <img
                    src={displayMode ? githubLogoDark : githubLogo}
                    alt='Github Logo'
                  />
                )}
              </div>
            </Tooltip>
          </div>
        </a>
        <a
          href='https://aunsh.medium.com'
          target={"_blank"}
          rel='noreferrer nofollow'
          alt='Medium Logo'
        >
          <div
            className='element flex_between'
            style={{ paddingTop: "0.2em", marginTop: "0.4em" }}
          >
            <Tooltip
              title='Go To Medium Profile'
              placement='right'
              classes={{ tooltip: classes.customTooltip }}
            >
              <div
                style={{ objectFit: "contain", width: "18px" }}
                onMouseEnter={mediumHoverMoveEnter}
                onMouseLeave={mediumHoverMoveLeave}
              >
                {mediumHover ? (
                  <img src={mediumLogoHover} alt='Medium Logo' />
                ) : (
                  <img
                    src={displayMode ? mediumLogoDark : mediumLogo}
                    alt='Medium Logo'
                  />
                )}
              </div>
            </Tooltip>
          </div>
        </a>
        <a
          href='https://linked.com/aunsh'
          target={"_blank"}
          rel='noreferrer nofollow'
          alt='Medium Logo'
        >
          <div
            className='element flex_between'
            style={{ padding: "0em", marginTop: "0.2em" }}
          >
            <Tooltip
              title='Go To LinkedIn Profile'
              placement='right'
              classes={{ tooltip: classes.customTooltip }}
            >
              <div
                style={{ objectFit: "contain", width: "18px" }}
                onMouseEnter={linkedInHoverMoveEnter}
                onMouseLeave={linkedInHoverMoveLeave}
              >
                {linkedInHover ? (
                  <img src={linkedInLogoHover} alt='LinkedIn Logo' />
                ) : (
                  <img
                    src={displayMode ? linkedInLogoDark : linkedInLogo}
                    alt='LinkedIn Logo'
                  />
                )}
              </div>
            </Tooltip>
          </div>
        </a>
        <div className='element'>
          <div className='resume'>Resume</div>
        </div>
      </div>
    </div>
  );
};

SidebarMini.propTypes = {
  settings: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  settings: state.settings,
});

const mapStateToActions = {};

export default connect(mapStateToProps, mapStateToActions)(SidebarMini);