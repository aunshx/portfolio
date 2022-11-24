import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useSound from "use-sound";
import { connect } from "react-redux";
import useWindow from "react-window-size-simple";

import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faSun, faMoon, faDownload, faVolumeUp, faVolumeMute, faRadiation } from "@fortawesome/free-solid-svg-icons";
import { Drawer, Tooltip } from "@mui/material";
import {
    makeStyles,
} from "@mui/styles";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import MusicOffIcon from "@mui/icons-material/MusicOff";

import SidebarMini from './SidebarMini'

import toggle from "../../../resources/sounds/toggle.mp3";
import resumeSwoosh from "../../../resources/sounds/resumeSwoosh.mp3";
import resume from "../../../resources/articles/resume.pdf";

import {
  toggleLightMode,
  toggleDarkMode,
  soundOn,
  soundOff,
  musicOn,
  musicOff,
  toggleAnimationChange,
} from "../../../redux/actions/settings";

const setDark = () => {
  localStorage.setItem("theme", "dark");
  document.documentElement.setAttribute("data-theme", "dark");
};

const setLight = () => {
  localStorage.setItem("theme", "light");
  document.documentElement.setAttribute("data-theme", "light");
};

const useStyles = makeStyles(theme => ({
  customTooltip: {
    backgroundColor: 'rgb(245, 245, 245)',
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
    color: 'rgb(72, 72, 72)'
  },
}));

const Navbar = ({
  shadowToggle,
  // Redux State
  settings: { displayMode, sound, music, backgroundAnimation },
  // Redux Actions
  soundOn,
  soundOff,
  toggleLightMode,
  toggleDarkMode,
  musicOn,
  musicOff,
  toggleAnimationChange,
}) => {
  const [playOn2] = useSound(resumeSwoosh, { volume: 0.2 });
  const [playOn] = useSound(toggle, { volume: 0.2 });

  const classes = useStyles();

  const [menu, setMenu] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [displayDownload, setDisplayDownload] = useState(false);

  const { width } = useWindow();

  const verticalMenu = () => {
    setMenu(!menu);
    setDrawer(!drawer);
  };

  const changeDownloadEnter = () => {
    setDisplayDownload(true);
    if (sound) {
      playOn2();
    }
  };

  const changeDownloadLeave = () => {
    setDisplayDownload(false);
  };

  const toggleThemeToDark = (e) => {
    setDark();
    toggleDarkMode();
    if (sound) {
      playOn();
    }
  };

  const toggleAnimationOn = () => {
    toggleAnimationChange(true);
    if (sound) {
      playOn();
    }
  };

  const toggleAnimationOff = () => {
    toggleAnimationChange(false);
    if (sound) {
      playOn();
    }
  };

  const toggleThemeToLight = (e) => {
    setLight();
    toggleLightMode();
    if (sound) {
      playOn();
    }
  };

  const soundTurnOff = () => {
    soundOff();
    if (sound) {
      playOn();
    }
  };

  const soundTurnOn = () => {
    soundOn();
  };

  const musicTurnOff = () => {
    musicOff();
    if (sound) {
      playOn();
    }
  };

  const musicTurnOn = () => {
    musicOn();
    if (sound) {
      playOn();
    }
  };

  return (
    <>
      <div
        className='navbar flex_between'
        style={
          shadowToggle
            ? displayMode
              ? {
                  boxShadow:
                    "2px 2px 2px 1px rgba(80, 80, 80, 0.2), transition: '0.15s ease-in-out'",
                }
              : {
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                  transition: "0.15s ease-in-out",
                }
            : {
                background: "transparent",
              }
        }
      >
        <div className='cursor_pointer'>
          <NavLink to='/'>
            <div className='left'>aunsh.</div>
          </NavLink>
        </div>
        <div className='right flex_evenly'>
          {displayMode ? (
            <div className='moon cursor_pointer'>
              <Tooltip title='Dark' placement='left'>
                <div>
                  <FontAwesomeIcon
                    icon={faMoon}
                    className={"mobile_logo--tilted"}
                    onClick={toggleThemeToLight}
                    style={{
                      fontSize: 17,
                      marginTop: "0.35em",
                      color: "grey",
                    }}
                  />
                </div>
              </Tooltip>
            </div>
          ) : (
            <div className='sun cursor_pointer'>
              <Tooltip title='Light' placement='left'>
                <div>
                  <FontAwesomeIcon
                    icon={faSun}
                    className={"mobile_logo--tilted"}
                    onClick={toggleThemeToDark}
                    style={{
                      fontSize: 19,
                      marginTop: "0.35em",
                      color: "orange",
                    }}
                  />
                </div>
              </Tooltip>
            </div>
          )}
          {backgroundAnimation ? (
            <div
              className='sound-on cursor_pointer'
              style={{ marginRight: "2.2em" }}
            >
              <Tooltip title='Background Animation On' placement='left'>
                <div>
                  <FontAwesomeIcon
                    icon={faRadiation}
                    onClick={toggleAnimationOff}
                    style={{
                      fontSize: 18,
                      marginTop: "0.3em",
                    }}
                    className='radiation'
                  />
                </div>
              </Tooltip>
            </div>
          ) : (
            <div
              className='sound-off cursor_pointer'
              style={{ marginRight: "2.2em" }}
            >
              <Tooltip title='Background Animation Off' placement='left'>
                <div>
                  <FontAwesomeIcon
                    icon={faRadiation}
                    onClick={toggleAnimationOn}
                    style={{
                      fontSize: 18,
                      marginTop: "0.3em",
                    }}
                    className='radiation-off'
                  />
                </div>
              </Tooltip>
            </div>
          )}
          {sound ? (
            <div className='sound-on cursor_pointer'>
              <Tooltip title='Sound-On' placement='left'>
                <div>
                  <FontAwesomeIcon
                    icon={faVolumeUp}
                    onClick={soundTurnOff}
                    style={{
                      fontSize: 17,
                      marginTop: "0.3em",
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
                      fontSize: 19,
                      marginTop: "0.3em",
                    }}
                  />
                </div>
              </Tooltip>
            </div>
          )}
          {music ? (
            <div className='sound-on cursor_pointer' style={{ margin: "0" }}>
              <Tooltip title='Music-On' placement='left'>
                <div>
                  <MusicNoteIcon
                    onClick={musicTurnOff}
                    style={{
                      fontSize: 20,
                      marginTop: "0.35em",
                    }}
                  />
                </div>
              </Tooltip>
            </div>
          ) : (
            <div className='sound-off cursor_pointer' style={{ margin: "0" }}>
              <Tooltip title='Music-Off' placement='left'>
                <div>
                  <MusicOffIcon
                    onClick={musicTurnOn}
                    style={{
                      fontSize: 20,
                      marginTop: "0.35em",
                    }}
                  />
                </div>
              </Tooltip>
            </div>
          )}
          <a href={resume} download='Aunsh_Resume.pdf'>
            <Tooltip
              title='Download Resume'
              placement='left'
              classes={{ tooltip: classes.customTooltip }}
            >
              <div
                className='resume flex_middle'
                onMouseEnter={changeDownloadEnter}
                onMouseLeave={changeDownloadLeave}
              >
                {displayDownload ? (
                  <div>
                    <FontAwesomeIcon icon={faDownload} className='icon' />
                  </div>
                ) : (
                  <div className='text'>Resume</div>
                )}
              </div>
            </Tooltip>
          </a>
        </div>
        {width < 787 && (
          <div className='right-mini flex_evenly'>
            {displayMode ? (
              <div className='moon cursor_pointer'>
                <Tooltip title='Dark' placement='left'>
                  <div>
                    <FontAwesomeIcon
                      icon={faMoon}
                      onClick={toggleThemeToLight}
                      style={{
                        fontSize: 15,
                        marginTop: "0.3em",
                        color: "grey",
                      }}
                    />
                  </div>
                </Tooltip>
              </div>
            ) : (
              <div className='sun cursor_pointer'>
                <Tooltip title='Light' placement='left'>
                  <div>
                    <FontAwesomeIcon
                      icon={faSun}
                      onClick={toggleThemeToDark}
                      style={{
                        fontSize: 17,
                        marginTop: "0.3em",
                        color: "orange",
                      }}
                    />
                  </div>
                </Tooltip>
              </div>
            )}
            <div>
              {menu ? (
                <div className='flex_middle'>
                  <Tooltip title='Menu' placement='left'>
                    <div>
                      <FontAwesomeIcon
                        icon={faBars}
                        className={"mobile_logo--tilted"}
                        onClick={verticalMenu}
                        style={{
                          fontSize: 17,
                        }}
                      />
                    </div>
                  </Tooltip>
                </div>
              ) : (
                <div className='flex_middle'>
                  <Tooltip title='Menu' placement='left'>
                    <div>
                      <FontAwesomeIcon
                        icon={faBars}
                        className={"mobile_logo"}
                        onClick={verticalMenu}
                        style={{
                          fontSize: 17,
                        }}
                      />
                    </div>
                  </Tooltip>
                </div>
              )}
              <div></div>
            </div>
          </div>
        )}
      </div>
      <div>
        {width < 787 && (
          <Drawer
            anchor={"right"}
            open={drawer}
            onClose={verticalMenu}
            className='sidebar_nav-right'
          >
            <SidebarMini close={verticalMenu} />
          </Drawer>
        )}
      </div>
    </>
  );
};

Navbar.propTypes = {
  settings: PropTypes.object.isRequired,
  toggleLightMode: PropTypes.func.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
  soundOn: PropTypes.func.isRequired,
  soundOff: PropTypes.func.isRequired,
  musicOn: PropTypes.func.isRequired,
  musicOff: PropTypes.func.isRequired,
  toggleAnimationChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  settings: state.settings,
});

const mapStateToActions = {
  toggleLightMode,
  toggleDarkMode,
  soundOn,
  soundOff,
  musicOn,
  musicOff,
  toggleAnimationChange,
};

export default connect(mapStateToProps, mapStateToActions)(Navbar)