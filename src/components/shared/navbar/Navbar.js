import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { connect } from "react-redux";
import useWindow from "react-window-size-simple";
import useSound from "use-sound";

import { faBars, faRadiation, faShare, faVolumeMute, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Drawer, Tooltip } from "@mui/material";
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


const Navbar = ({
  shadowToggle,
  goToHome,
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
  const [isNameInView, setIsNameInView] = useState(true);

  const { width } = useWindow();

  const nameObserver = useRef(null);

  useEffect(() => {
    const nameElement = document.getElementById('main-name');

    if (nameElement) {
      const options = {
        root: null,
        threshold: 0.2,
      };

      nameObserver.current = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          setIsNameInView(entry.isIntersecting);
          if (sound && entry.isIntersecting !== isNameInView) {
            // Play sound when state changes (optional)
            playOn();
          }
        });
      }, options);

      nameObserver.current.observe(nameElement);

      return () => {
        if (nameObserver.current) {
          nameObserver.current.disconnect();
        }
      };
    }
  }, [isNameInView, sound, playOn]);

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
            <div className='logo-container text-3xl text-brand font-bold'>
              <span className="logo-a">a</span>
              <span className={`logo-unsh ${isNameInView ? 'hidden' : 'visible'}`}>unsh</span>
              <span className="logo-dot">.</span>
            </div>
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

      {/* Styling is now handled in App.css */}
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