import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from "react-redux";
import useWindow from "react-window-size-simple";
import useSound from "use-sound";

import { faBars, faRadiation, faShare, faVolumeMute, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Drawer, Tooltip } from "@mui/material";
import {
  makeStyles,
} from "@mui/styles";
import { NavLink } from "react-router-dom";

import SidebarMini from './SidebarMini';

import resumeSwoosh from "../../../resources/sounds/resumeSwoosh.mp3";
import toggle from "../../../resources/sounds/toggle.mp3";

import {
  musicOff,
  musicOn,
  soundOff,
  soundOn,
  toggleAnimationChange,
  toggleDarkMode,
  toggleLightMode,
} from "../../../redux/actions/settings";
import { RESUME_LINK } from '../../../resources/constants';

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

const ToggleSwitch = ({ displayMode, toggleTheme }) => {
  const display = displayMode ? "toggle-switch-dark" : "toggle-switch";
  return (
    <div onClick={toggleTheme} className='cursor_pointer'>
      <div className={display}>
        <div className='star'></div>
        <div className='moon'></div>
      </div>
    </div>
  );
};

const Navbar = ({
  shadowToggle,
  goToHome,
  goToAbout,
  goToWork,
  goToProjects,
  goToResearch,
  goToSkills,
  goToArticles,
  goToEducation,
  // Redux State
  settings: { displayMode, sound, backgroundAnimation },
  // Redux Actions
  soundOn,
  soundOff,
  toggleAnimationChange,
}) => {
  const [playOn2] = useSound(resumeSwoosh, { volume: 0.2 });
  const [playOn] = useSound(toggle, { volume: 0.2 });

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

  const soundTurnOff = () => {
    soundOff();
    if (sound) {
      playOn();
    }
  };

  const soundTurnOn = () => {
    soundOn();
  };

  return (
    <>
      <div
        className='navbar flex items-center justify-between w-full general-card fixed top-0 px-16 z-[200]'
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
        <div className='cursor-pointer'>
          <NavLink to='/'>
            <div className='text-2xl text-brand font-bold'>aunsh.</div>
          </NavLink>
        </div>
        {width > 787 ? (
          <div className='text-xl flex items-center justify-evenly gap-x-8'>
            {backgroundAnimation ? (
              <div
                className='text-brand cursor-pointer'
              >
                <Tooltip
                  title={
                    <div color='inherit'>Background Animation On</div>
                  }
                  placement='bottom'
                >
                  <div>
                    <FontAwesomeIcon
                      icon={faRadiation}
                      onClick={toggleAnimationOff}
                      style={{
                        fontSize: 20,
                      }}
                      className='rotate'
                    />
                  </div>
                </Tooltip>
              </div>
            ) : (
              <div
                className='text-gray-400 cursor-pointer'
              >
                <Tooltip title='Background Animation Off' placement='left'>
                  <div>
                    <FontAwesomeIcon
                      icon={faRadiation}
                      onClick={toggleAnimationOn}
                      style={{
                        fontSize: 20,
                      }}
                    />
                  </div>
                </Tooltip>
              </div>
            )}
            {sound ? (
              <div className='cursor-pointer'>
                <Tooltip title='Sound-On' placement='left'>
                  <div>
                    <FontAwesomeIcon
                      icon={faVolumeUp}
                      onClick={soundTurnOff}
                      style={{
                        fontSize: 20,
                      }}
                      className='text-brand'
                    />
                  </div>
                </Tooltip>
              </div>
            ) : (
              <div className='cursor-pointer'>
                <Tooltip title='Sound-Off' placement='left'>
                  <div>
                    <FontAwesomeIcon
                      icon={faVolumeMute}
                      onClick={soundTurnOn}
                      style={{
                        fontSize: 20,
                      }}
                      className='text-gray-400'
                    />
                  </div>
                </Tooltip>
              </div>
            )}
            <a href={RESUME_LINK} target='_blank' rel='noreferrer nofollow'>
              <div
                className='resume-btn flex items-center justify-between gap-x-2'
                onMouseEnter={changeDownloadEnter}
                onMouseLeave={changeDownloadLeave}
              >
                <FontAwesomeIcon icon={faShare} className='icon' />
                <div className='text'>Résumé/CV</div>
              </div>
            </a>
          </div>
        ) : (
          <div className='flex items-center justify-center gap-x-2'>
            {backgroundAnimation ? (
              <div
                className='text-brand cursor-pointer'
                style={{ marginRight: "1.4em" }}
              >
                <Tooltip
                    title={'Background Animation On'}
                  placement='bottom'
                >
                  <div>
                    <FontAwesomeIcon
                      icon={faRadiation}
                      onClick={toggleAnimationOff}
                      style={{
                        fontSize: 19,
                      }}
                      className='rotate'
                    />
                  </div>
                </Tooltip>
              </div>
            ) : (
              <div className='cursor-pointer'>
                <Tooltip title='Background Animation Off' placement='left'>
                  <div>
                    <FontAwesomeIcon
                      icon={faRadiation}
                      onClick={toggleAnimationOn}
                      style={{
                        fontSize: 19,
                      }}
                    />
                  </div>
                </Tooltip>
              </div>
            )}
            <Tooltip title='Menu' placement='left'>
              <div>
                <FontAwesomeIcon
                  icon={faBars}
                  onClick={verticalMenu}
                  style={{
                    fontSize: 21,
                  }}
                />
              </div>
            </Tooltip>
          </div>
        )}
        {width < 787 && (
          <Drawer
            anchor={"right"}
            open={drawer}
            onClose={verticalMenu}
          >
            <SidebarMini
              close={verticalMenu}
              goToHome={goToHome}
              goToWork={goToWork}
              goToProjects={goToProjects}
              goToResearch={goToResearch}
              goToSkills={goToSkills}
              goToArticles={goToArticles}
              goToEducation={goToEducation}
            />
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