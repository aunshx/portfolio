import React from 'react';
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

const useStyles = makeStyles(theme => ({
  customTooltip: {
    backgroundColor: 'rgb(245, 245, 245)',
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
    color: 'rgb(72, 72, 72)'
  },
}));

const Sidebar = (props) => {
    const classes = useStyles()
  return <div className='sidebar_main'>
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
  </div>;
};

Sidebar.propTypes = {};

export default Sidebar;
