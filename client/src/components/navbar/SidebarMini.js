import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useSound from "use-sound";
import { connect } from "react-redux";

import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faHome, faMobileAlt, faNewspaper, faTools, faUser, faVolumeMute, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "@mui/material";

import { makeStyles } from "@mui/styles";

import CloseIcon from '@mui/icons-material/Close';
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import MusicOffIcon from "@mui/icons-material/MusicOff"

import mediumLogo from "../../resources/images/mediumLogo.png";
import mediumLogoHover from "../../resources/images/mediumLogoHover.png";
import mediumLogoDark from "../../resources/images/mediumLogoDark.png";
import githubLogo from "../../resources/images/githubLogo.png";
import githubLogoHover from "../../resources/images/githubLogoHover.png";
import githubLogoDark from "../../resources/images/githubLogoDark.png";
import linkedInLogo from "../../resources/images/linkedInLogo.png";
import linkedInLogoHover from "../../resources/images/linkedInLogoHover.png";
import linkedInLogoDark from "../../resources/images/linkedInLogoDark.png";

import pop from "../../resources/sounds/pop.mp3";

import resume from '../../resources/articles/aunsh_resume.pdf'

import {
  soundOn,
  soundOff,
  musicOn,
  musicOff,
} from "../../redux/actions/settings";

const useStyles = makeStyles((theme) => ({
  customTooltip: {
    backgroundColor: "rgb(245, 245, 245)",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
    color: "rgb(72, 72, 72)",
  },
}));

const SidebarMini = ({
  close,
  // Redux State
  settings: { displayMode, music, sound },
  // Redux Actions
  soundOn,
  soundOff,
  musicOn,
  musicOff,
}) => {
  const [playOn] = useSound(pop, { volume: 1 })
  const classes = useStyles();

  const [githubHover, setGithubHover] = useState(false);
  const [mediumHover, setMediumHover] = useState(false);
  const [linkedInHover, setLinkedInHover] = useState(false);

  const githubHoverMoveEnter = () => {
    setGithubHover(true);
    if (sound) {
      playOn();
    }
  };

  const githubHoverMoveLeave = () => {
    setGithubHover(false);
  };

  const mediumHoverMoveEnter = () => {
    setMediumHover(true);
    if (sound) {
      playOn();
    }
  };

  const mediumHoverMoveLeave = () => {
    setMediumHover(false);
  };

  const linkedInHoverMoveEnter = () => {
    setLinkedInHover(true);
    if (sound) {
      playOn();
    }
  };

  const linkedInHoverMoveLeave = () => {
    setLinkedInHover(false);
  };

  const elementHover = () => {
    if (sound) {
      playOn();
    }
  };

  const soundTurnOff = () => {
    soundOff();
  };

  const soundTurnOn = () => {
    soundOn();
  };

  const musicTurnOff = () => {
    musicOff();
  };

  const musicTurnOn = () => {
    musicOn();
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
        <div className='flex_evenly'>
          {sound ? (
            <div className='sound-on cursor_pointer'>
              <Tooltip title='Sound-On' placement='left'>
                <div>
                  <FontAwesomeIcon
                    icon={faVolumeUp}
                    onClick={soundTurnOff}
                    style={{
                      fontSize: 15,
                      marginBottom: "0.05em",
                    }}
                  />
                </div>
              </Tooltip>
            </div>
          ) : (
            <div className='sound-off cursor_pointer'>
              <Tooltip title='Sound-Off' placement='left'>
                <div>
                  <FontAwesomeIcon
                    icon={faVolumeMute}
                    onClick={soundTurnOn}
                    style={{
                      fontSize: 15,
                      marginBottom: "0.05em",
                    }}
                  />
                </div>
              </Tooltip>
            </div>
          )}
          {music ? (
            <div className='music-on cursor_pointer'>
              <Tooltip title='Music-On' placement='left'>
                <div>
                  <MusicNoteIcon
                    onClick={musicTurnOff}
                    style={{
                      fontSize: 16,
                      marginTop: "0.2em",
                    }}
                  />
                </div>
              </Tooltip>
            </div>
          ) : (
            <div className='music-off cursor_pointer'>
              <Tooltip title='Music-Off' placement='left'>
                <div>
                  <MusicOffIcon
                    onClick={musicTurnOn}
                    style={{
                      fontSize: 16,
                      marginTop: "0.2em",
                    }}
                  />
                </div>
              </Tooltip>
            </div>
          )}
        </div>
        <NavLink
          to='/'
          className={"element"}
          activeStyle={{ color: "rgb(0, 145, 255)" }}
          exact
        >
          <div className='flex_between' onMouseEnter={elementHover}>
            <div>
              <FontAwesomeIcon icon={faHome} style={{ marginRight: "0.5em" }} />
            </div>
            <div>Home</div>
          </div>
        </NavLink>
        <NavLink
          to='/user'
          className={"element"}
          activeStyle={{ color: "rgb(0, 145, 255)" }}
        >
          <div className='flex_between' onMouseEnter={elementHover}>
            <div>
              <FontAwesomeIcon icon={faUser} style={{ marginRight: "0.5em" }} />
            </div>
            <div>About</div>
          </div>
        </NavLink>
        <NavLink
          to='/projects'
          className={"element"}
          activeStyle={{ color: "rgb(0, 145, 255)" }}
        >
          <div className='flex_between' onMouseEnter={elementHover}>
            <div>
              <FontAwesomeIcon
                icon={faTools}
                style={{ marginRight: "0.5em" }}
              />
            </div>
            <div>Projects</div>
          </div>
        </NavLink>
        <NavLink
          to='/articles'
          className={"element"}
          activeStyle={{ color: "rgb(0, 145, 255)" }}
        >
          <div className='flex_between'>
            <div>
              <FontAwesomeIcon
                icon={faNewspaper}
                style={{ marginRight: "0.5em" }}
              />
            </div>
            <div>Articles</div>
          </div>
        </NavLink>
        <NavLink
          to='/skills'
          className={"element"}
          activeStyle={{ color: "rgb(0, 145, 255)" }}
        >
          <div className='flex_between' onMouseEnter={elementHover}>
            <div>
              <FontAwesomeIcon
                icon={faBrain}
                style={{ marginRight: "0.5em" }}
              />
            </div>
            <div>Skills</div>
          </div>
        </NavLink>
        <NavLink
          to='/contact'
          className={"element"}
          activeStyle={{ color: "rgb(0, 145, 255)" }}
        >
          <div className='flex_between' onMouseEnter={elementHover}>
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
          <a href={resume} download='aunsh_resume.pdf'>
            <div className='resume'>Resume</div>
          </a>
        </div>
      </div>
    </div>
  );
};

SidebarMini.propTypes = {
  settings: PropTypes.object.isRequired,
  soundOn: PropTypes.func.isRequired,
  soundOff: PropTypes.func.isRequired,
  musicOn: PropTypes.func.isRequired,
  musicOff: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  settings: state.settings,
});

const mapStateToActions = {
  soundOn,
  soundOff,
  musicOn,
  musicOff,
};

export default connect(mapStateToProps, mapStateToActions)(SidebarMini);