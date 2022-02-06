import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faComment, faHome, faMobileAlt, faNewspaper, faTools } from "@fortawesome/free-solid-svg-icons";

import {
    Tooltip
} from '@mui/material'

import {
    makeStyles,
} from "@mui/styles";

import mediumLogo from '../../resources/images/mediumLogo.png'
import mediumLogoHover from '../../resources/images/mediumLogoHover.png'
import githubLogo from '../../resources/images/githubLogo.png'
import githubLogoHover from '../../resources/images/githubLogoHover.png'

const useStyles = makeStyles(theme => ({
  customTooltip: {
    backgroundColor: 'rgb(245, 245, 245)',
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
    color: 'rgb(72, 72, 72)'
  },
}));

const Sidebar = (props) => {
    const classes = useStyles()

    const [hover, setHover] = useState(true)
    const [githubHover, setGithubHover] = useState(false)
    const [mediumHover, setMediumHover] = useState(false)

    const maximize = () => {
        setHover(true)
    }

    const minimize = () => {
        setHover(false)
    }

    const githubHoverMoveEnter = () => {
        setGithubHover(true)
    }

    const githubHoverMoveLeave = () => {
        setGithubHover(false)
    }

    const mediumHoverMoveEnter = () => {
        setMediumHover(true)
    }

    const mediumHoverMoveLeave = () => {
        setMediumHover(false)
    }

  return (
       <>
      {hover ? (
          <div className='sidebar_main_maximize'
            // onMouseLeave={minimize}
          >
      <div className="app">
        <NavLink to='/' activeStyle={{ color: 'rgb(105, 182, 242)' }} exact >
          <div className="element flex_between">

                  <div>
            <FontAwesomeIcon icon={faHome} style={{ marginRight: '0.5em' }}  />
          </div>
          <div className='writing'>
              Home
          </div>
        </div>
        </NavLink>
        <NavLink to='/projects' activeStyle={{ color: 'rgb(105, 182, 242)' }} >
          <div className="element flex_between">

                  <div>
            <FontAwesomeIcon icon={faTools} style={{ marginRight: '0.5em' }}  />
          </div>
          <div className='writing'>
              Projects
          </div>
        </div>
        </NavLink>
        <NavLink to='/articles' activeStyle={{ color: 'rgb(105, 182, 242)' }} >
          <div className="element flex_between">

                  <div>
            <FontAwesomeIcon icon={faNewspaper} style={{ marginRight: '0.5em' }}  />
          </div>
          <div className='writing'>
              Articles
          </div>
        </div>
        </NavLink>
        <NavLink to='/skills' activeStyle={{ color: 'rgb(105, 182, 242)' }} >
          <div className="element flex_between">

                  <div>
            <FontAwesomeIcon icon={faBrain} style={{ marginRight: '0.5em' }}  />
          </div>
          <div className='writing'>
              Skills
          </div>
        </div>
        </NavLink>
        <NavLink to='/contact' activeStyle={{ color: 'rgb(105, 182, 242)' }} >
          <div className="element flex_between">

                  <div>
            <FontAwesomeIcon icon={faMobileAlt} style={{ marginRight: '0.5em' }}  />
          </div>
          <div className='writing'>
              Contact
          </div>
        </div>
        </NavLink>
                <div className='writing' style={{ marginTop: '1.3em', fontWeight: 'bold' }}>
            Socials
        </div>
        <a href='https://github.com/aunshx' target={'_blank'} rel='noreferrer nofollow' alt="Github Logo" >
          <div className="element flex_between" style={{ padding: '0.7em', marginTop: '0.4em' }}>

        <Tooltip title="Go To Github Profile" placement='right'  classes={{ tooltip: classes.customTooltip, }}>
            <div style={{ objectFit: 'contain', width: '25px' }} onMouseEnter={githubHoverMoveEnter} onMouseLeave={githubHoverMoveLeave}>
            {githubHover ? (
                <img src={githubLogoHover} alt="Github Logo" />
            ) : (
                <img src={githubLogo} alt="Github Logo" />
            )}
          </div>
        </Tooltip>
        </div>
        </a>
        <a href='https://aunsh.medium.com' target={'_blank'} rel='noreferrer nofollow' alt="Medium Logo" >
          <div className="element flex_between" style={{ padding: '0.7em' }}>
             <Tooltip title="Go To Medium Profile" placement='right'  classes={{ tooltip: classes.customTooltip, }}>
            <div style={{ objectFit: 'contain', width: '25px' }} onMouseEnter={mediumHoverMoveEnter} onMouseLeave={mediumHoverMoveLeave}>
            {mediumHover ? (
                <img src={mediumLogoHover} alt="Medium Logo" />
            ) : (
                <img src={mediumLogo} alt="Medium Logo" />
            )}
          </div>
        </Tooltip>
        </div>
        </a>
      </div>
  </div>
      ) : (
          <div className='sidebar_main' onMouseEnter={maximize}>
      <div className="app">
        <NavLink to='/' activeStyle={{ color: 'rgb(105, 182, 242)' }} exact >
          <div className="element flex_between">
          <Tooltip title='Home' placement='right' classes={{
          tooltip: classes.customTooltip,
        }} >
              <div>
            <FontAwesomeIcon icon={faHome} style={{ marginRight: '0.5em' }}  />
          </div>
          </Tooltip>
        </div>
        </NavLink>
        <NavLink to='/' activeStyle={{ color: 'rgb(105, 182, 242)' }} exact >
          <div className="element flex_between">
          <Tooltip title='Projects' placement='right' classes={{
          tooltip: classes.customTooltip,
        }} >
              <div>
            <FontAwesomeIcon icon={faTools} style={{ marginRight: '0.5em' }}  />
          </div>
          </Tooltip>
        </div>
        </NavLink>
        <NavLink to='/' activeStyle={{ color: 'rgb(105, 182, 242)' }} exact >
          <div className="element flex_between">
          <Tooltip title='Articles' placement='right' classes={{
          tooltip: classes.customTooltip,
        }} >
              <div>
            <FontAwesomeIcon icon={faNewspaper} style={{ marginRight: '0.5em' }}  />
          </div>
          </Tooltip>
        </div>
        </NavLink>
        <NavLink to='/' activeStyle={{ color: 'rgb(105, 182, 242)' }} exact >
          <div className="element flex_between">
          <Tooltip title='Skills' placement='right' classes={{
          tooltip: classes.customTooltip,
        }} >
              <div>
            <FontAwesomeIcon icon={faBrain} style={{ marginRight: '0.5em' }}  />
          </div>
          </Tooltip>
        </div>
        </NavLink>
        <NavLink to='/' activeStyle={{ color: 'rgb(105, 182, 242)' }} exact >
          <div className="element flex_between">
          <Tooltip title='Contact' placement='right' classes={{
          tooltip: classes.customTooltip,
        }} >
              <div>
            <FontAwesomeIcon icon={faMobileAlt} style={{ marginRight: '0.5em' }}  />
          </div>
          </Tooltip>
        </div>
        </NavLink>
       
      </div>
  </div>
      )}
  </>
  )
};

Sidebar.propTypes = {};

export default Sidebar;
