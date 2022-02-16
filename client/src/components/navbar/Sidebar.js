import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useSound from 'use-sound'
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faHome, faMobileAlt, faNewspaper, faTools, faUser } from "@fortawesome/free-solid-svg-icons";

import {
    Tooltip
} from '@mui/material'

import {
    makeStyles,
} from "@mui/styles";

import mediumLogo from '../../resources/images/mediumLogo.png'
import mediumLogoHover from '../../resources/images/mediumLogoHover.png'
import mediumLogoDark from '../../resources/images/mediumLogoDark.png'
import githubLogo from '../../resources/images/githubLogo.png'
import githubLogoHover from '../../resources/images/githubLogoHover.png'
import githubLogoDark from '../../resources/images/githubLogoDark.png'
import linkedInLogo from '../../resources/images/linkedInLogo.png'
import linkedInLogoHover from '../../resources/images/linkedInLogoHover.png'
import linkedInLogoDark from '../../resources/images/linkedInLogoDark.png'

import pop from '../../resources/sounds/pop.mp3'

import store from '../../store'
import { MOUSE_ENTER, MOUSE_LEAVE } from '../../redux/actions/types';


const useStyles = makeStyles(theme => ({
  customTooltip: {
    backgroundColor: 'rgb(245, 245, 245)',
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
    color: 'rgb(72, 72, 72)'
  },
}));

const Sidebar = ({
  hover,
  // Redux State
  settings: { displayMode, sound }
}) => {
  const [playOn] = useSound(pop, { volume: 1 });

    const classes = useStyles()

    const [githubHover, setGithubHover] = useState(false)
    const [mediumHover, setMediumHover] = useState(false)
    const [linkedInHover, setLinkedInHover] = useState(false)

    const maximize = () => {
        store.dispatch({
          type: MOUSE_ENTER
        })
    }

    const minimize = () => {
         store.dispatch({
           type: MOUSE_LEAVE,
         });
    }

    const githubHoverMoveEnter = () => {
        setGithubHover(true)
        if(sound){
          playOn()
        }    }

    const githubHoverMoveLeave = () => {
        setGithubHover(false)
    }

    const mediumHoverMoveEnter = () => {
        setMediumHover(true)
        if(sound){
          playOn()
        }
    }

    const mediumHoverMoveLeave = () => {
        setMediumHover(false)
    }

    const linkedInHoverMoveEnter = () => {
        setLinkedInHover(true)
        if(sound){
          playOn()
        }
    }

    const linkedInHoverMoveLeave = () => {
        setLinkedInHover(false)
    }

    const elementHover = () => {
      if(sound){
        playOn()
      }
    }
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
        >
          <div className='app'>
            <NavLink
              to='/'
              className={"element"}
              activeStyle={{ color: "rgb(0, 145, 255)" }}
              exact
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
            </NavLink>
            <NavLink
              to='/user'
              className={"element"}
              activeStyle={{ color: "rgb(0, 145, 255)" }}
              exact
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
            </NavLink>
            <NavLink
              to='/projects'
              className={"element"}
              activeStyle={{ color: "rgb(0, 145, 255)" }}
              exact
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
            </NavLink>
            <NavLink
              to='/articles'
              className={"element"}
              activeStyle={{ color: "rgb(0, 145, 255)" }}
              exact
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
            </NavLink>
            <NavLink
              to='/skills'
              className={"element"}
              activeStyle={{ color: "rgb(0, 145, 255)" }}
              exact
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
            </NavLink>
            <NavLink
              to='/contact'
              className={"element"}
              activeStyle={{ color: "rgb(0, 145, 255)" }}
              exact
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
            </NavLink>
            <div
              className='writing'
              style={{ marginTop: "1.3em", fontWeight: "bold" }}
            >
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
                style={{ padding: "0.7em", marginTop: "0.4em" }}
              >
                <Tooltip
                  title='Go To Github Profile'
                  placement='right'
                  classes={{ tooltip: classes.customTooltip }}
                >
                  <div
                    style={{ objectFit: "contain", width: "25px" }}
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
                style={{ padding: "0.7em" }}
              >
                <Tooltip
                  title='Go To Medium Profile'
                  placement='right'
                  classes={{ tooltip: classes.customTooltip }}
                >
                  <div
                    style={{ objectFit: "contain", width: "25px" }}
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
              href='https://www.linkedin.com/in/aunsh/'
              target={"_blank"}
              rel='noreferrer nofollow'
              alt='Medium Logo'
            >
              <div
                className='element flex_between'
                style={{ padding: "0.7em" }}
              >
                <Tooltip
                  title='Go To LinkedIn Profile'
                  placement='right'
                  classes={{ tooltip: classes.customTooltip }}
                >
                  <div
                    style={{ objectFit: "contain", width: "25px" }}
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
          </div>
        </div>
      ) : (
        <div
          className='sidebar_main'
          onMouseEnter={maximize}
          onClick={maximize}
        >
          <div className='app'>
            <NavLink
              to='/'
              className={"element"}
              activeStyle={{ color: "rgb(0, 145, 255)" }}
              exact
              exact
            >
              <div className='flex_between'>
                <div>
                  <FontAwesomeIcon
                    icon={faHome}
                    style={{ marginRight: "0.5em" }}
                  />
                </div>
              </div>
            </NavLink>
            <NavLink
              to='/user'
              className={"element"}
              activeStyle={{ color: "rgb(0, 145, 255)" }}
              exact
              exact
            >
              <div className='flex_between'>
                <div>
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{ marginRight: "0.5em" }}
                  />
                </div>
              </div>
            </NavLink>
            <NavLink
              to='/projects'
              className={"element"}
              activeStyle={{ color: "rgb(0, 145, 255)" }}
              exact
            >
              <div className='flex_between'>
                <div>
                  <FontAwesomeIcon
                    icon={faTools}
                    style={{ marginRight: "0.5em" }}
                  />
                </div>
              </div>
            </NavLink>
            <NavLink
              to='/articles'
              className={"element"}
              activeStyle={{ color: "rgb(0, 145, 255)" }}
              exact
            >
              <div className='flex_between'>
                <div>
                  <FontAwesomeIcon
                    icon={faNewspaper}
                    style={{ marginRight: "0.5em" }}
                  />
                </div>
              </div>
            </NavLink>
            <NavLink
              to='/skills'
              className={"element"}
              activeStyle={{ color: "rgb(0, 145, 255)" }}
              exact
            >
              <div className='flex_between'>
                <div>
                  <FontAwesomeIcon
                    icon={faBrain}
                    style={{ marginRight: "0.5em" }}
                  />
                </div>
              </div>
            </NavLink>
            <NavLink
              to='/contact'
              className={"element"}
              activeStyle={{ color: "rgb(0, 145, 255)" }}
              exact
            >
              <div className='flex_between'>
                <div>
                  <FontAwesomeIcon
                    icon={faMobileAlt}
                    style={{ marginRight: "0.5em" }}
                  />
                </div>
              </div>
            </NavLink>
            <a
              href='https://github.com/aunshx'
              target={"_blank"}
              rel='noreferrer nofollow'
              alt='Github Logo'
              className='element'
            >
              <div className='flex_between' style={{ paddingRight: "0.5em" }}>
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
              className='element'
            >
              <div
                className='flex_between'
                style={{ paddingRight: "0.5em", marginTop: "-0.8em" }}
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
              className='element'
            >
              <div
                className='flex_between'
                style={{ paddingRight: "0.5em", marginTop: "-0.5em" }}
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

