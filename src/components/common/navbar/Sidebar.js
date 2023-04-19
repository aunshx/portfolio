import React from 'react';
import PropTypes from 'prop-types';
import useSound from 'use-sound'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faHome, faMobileAlt, faNewspaper, faTools, faUser, faBriefcase, faVial, faBox } from "@fortawesome/free-solid-svg-icons";

import pop from '../../../resources/sounds/pop.mp3'

import store from '../../../store'
import { MOUSE_ENTER, MOUSE_LEAVE } from '../../../redux/actions/types';

const Sidebar = ({
  shadowToggle,
  hover,
  goToHome,
  goToAbout,
  goToWork,
  goToProjects,
  goToResearch,
  goToSkills,
  goToArticles,
  goToContact,
  goToNpm,
  // Redux State
  settings: { displayMode, sound },
}) => {
  const [playOn] = useSound(pop, { volume: 0.2 });

  const maximize = () => {
    store.dispatch({
      type: MOUSE_ENTER,
    });
  };

  const minimize = () => {
    store.dispatch({
      type: MOUSE_LEAVE,
    });
  };

  const elementHover = () => {
    if (sound) {
      playOn();
    }
  };
  return (
    <>
      {hover ? (
        <div
          className={
            hover
              ? "sidebar_main_maximize"
              : "sidebar_main_maximize sidebar_main-active"
          }
          onMouseLeave={minimize}
          onClick={minimize}
          style={
            shadowToggle
              ? {}
              : displayMode
              ? {
                  boxShadow: "none",
                  background: "transparent",
                }
              : {
                  boxShadow: "none",
                  background: "transparent",
                }
          }
        >
          <div className='app'>
            <div
              onClick={goToHome}
              className={"element"}
              style={{ cursor: "pointer" }}
            >
              <div className='flex_between' onMouseEnter={elementHover}>
                <div>
                  <FontAwesomeIcon
                    icon={faHome}
                    style={{ marginRight: "0.5em", marginTop: "0.7em" }}
                  />
                </div>
                <div className='writing' style={{ marginTop: "0.5em" }}>
                  Home
                </div>
              </div>
            </div>
            <div
              onClick={goToAbout}
              className={"element"}
              style={{ cursor: "pointer" }}
            >
              <div className='flex_between' onMouseEnter={elementHover}>
                <div>
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{ marginRight: "0.5em" }}
                  />
                </div>
                <div className='writing'>About</div>
              </div>
            </div>
            <div
              onClick={goToWork}
              className={"element"}
              style={{ cursor: "pointer" }}
            >
              <div className='flex_between' onMouseEnter={elementHover}>
                <div>
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    style={{ marginRight: "0.5em" }}
                  />
                </div>
                <div className='writing'>Work</div>
              </div>
            </div>
            <div
              onClick={goToProjects}
              className={"element"}
              style={{ cursor: "pointer" }}
            >
              <div className='flex_between' onMouseEnter={elementHover}>
                <div>
                  <FontAwesomeIcon
                    icon={faTools}
                    style={{ marginRight: "0.5em" }}
                  />
                </div>
                <div className='writing'>Projects</div>
              </div>
            </div>
            <div
              onClick={goToResearch}
              className={"element"}
              style={{ cursor: "pointer" }}
            >
              <div className='flex_between' onMouseEnter={elementHover}>
                <div>
                  <FontAwesomeIcon
                    icon={faVial}
                    style={{ marginRight: "0.5em" }}
                  />
                </div>
                <div className='writing'>Research</div>
              </div>
            </div>
            <div
              onClick={goToNpm}
              className={"element"}
              style={{ cursor: "pointer" }}
            >
              <div className='flex_between' onMouseEnter={elementHover}>
                <div>
                  <FontAwesomeIcon
                    icon={faBox}
                    style={{ marginRight: "0.5em" }}
                  />
                </div>
                <div className='writing'>Packages</div>
              </div>
            </div>
            <div
              onClick={goToArticles}
              className={"element"}
              style={{ cursor: "pointer" }}
            >
              <div className='flex_between' onMouseEnter={elementHover}>
                <div>
                  <FontAwesomeIcon
                    icon={faNewspaper}
                    style={{ marginRight: "0.5em" }}
                  />
                </div>
                <div className='writing'>Articles</div>
              </div>
            </div>
            <div
              onClick={goToSkills}
              className={"element"}
              style={{ cursor: "pointer" }}
            >
              <div className='flex_between' onMouseEnter={elementHover}>
                <div>
                  <FontAwesomeIcon
                    icon={faBrain}
                    style={{ marginRight: "0.5em" }}
                  />
                </div>
                <div className='writing'>Skills</div>
              </div>
            </div>
            <div
              onClick={goToContact}
              className={"element"}
              style={{ cursor: "pointer" }}
            >
              <div className='flex_between' onMouseEnter={elementHover}>
                <div>
                  <FontAwesomeIcon
                    icon={faMobileAlt}
                    style={{ marginRight: "0.5em" }}
                  />
                </div>
                <div className='writing'>Contact</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className='sidebar_main'
          onMouseEnter={maximize}
          onClick={maximize}
          style={
            shadowToggle
              ? {
                transition: '0.2s ease-in-out'
              }
              : displayMode
              ? {
                  boxShadow: "none",
                  background: "transparent",
                }
              : {
                  boxShadow: "none",
                  background: "transparent",
                }
          }
        >
          <div className='app'>
            <div
              onClick={goToHome}
              className={"element"}
              style={{ cursor: "pointer" }}
            >
              <div className='flex_between'>
                <div>
                  <FontAwesomeIcon
                    icon={faHome}
                    style={{ marginRight: "0.5em" }}
                  />
                </div>
              </div>
            </div>
            <div
              onClick={goToAbout}
              className={"element"}
              style={{ cursor: "pointer" }}
            >
              <div className='flex_between'>
                <div>
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{ marginRight: "0.5em" }}
                  />
                </div>
              </div>
            </div>
            <div
              onClick={goToWork}
              className={"element"}
              style={{ cursor: "pointer" }}
            >
              <div className='flex_between'>
                <div>
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    style={{ marginRight: "0.5em" }}
                  />
                </div>
              </div>
            </div>
            <div
              onClick={goToProjects}
              className={"element"}
              style={{ cursor: "pointer" }}
            >
              <div className='flex_between'>
                <div>
                  <FontAwesomeIcon
                    icon={faTools}
                    style={{ marginRight: "0.5em" }}
                  />
                </div>
              </div>
            </div>
            <div
              onClick={goToResearch}
              className={"element"}
              style={{ cursor: "pointer" }}
            >
              <div className='flex_between'>
                <div>
                  <FontAwesomeIcon
                    icon={faVial}
                    style={{ marginRight: "0.5em" }}
                  />
                </div>
              </div>
            </div>
            <div
              onClick={goToNpm}
              className={"element"}
              style={{ cursor: "pointer" }}
            >
              <div className='flex_between'>
                <div>
                  <FontAwesomeIcon
                    icon={faBox}
                    style={{ marginRight: "0.5em" }}
                  />
                </div>
              </div>
            </div>
            <div
              onClick={goToArticles}
              className={"element"}
              style={{ cursor: "pointer" }}
            >
              <div className='flex_between'>
                <div>
                  <FontAwesomeIcon
                    icon={faNewspaper}
                    style={{ marginRight: "0.5em" }}
                  />
                </div>
              </div>
            </div>
            <div
              onClick={goToSkills}
              className={"element"}
              style={{ cursor: "pointer" }}
            >
              <div className='flex_between'>
                <div>
                  <FontAwesomeIcon
                    icon={faBrain}
                    style={{ marginRight: "0.5em" }}
                  />
                </div>
              </div>
            </div>
            <div
              onClick={goToContact}
              className={"element"}
              style={{ cursor: "pointer" }}
            >
              <div className='flex_between'>
                <div>
                  <FontAwesomeIcon
                    icon={faMobileAlt}
                    style={{ marginRight: "0.5em" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Sidebar.propTypes = {
  settings: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  settings: state.settings,
});

const mapStateToActions = {};

export default connect(mapStateToProps, mapStateToActions)(Sidebar);

