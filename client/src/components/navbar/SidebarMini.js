import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faHome, faMobileAlt, faNewspaper, faTools } from "@fortawesome/free-solid-svg-icons";

import CloseIcon from '@mui/icons-material/Close';

const SidebarMini = ({ close }) => {
  return <div className='sidebar'>
      <div className="title triple_grid">
        <div></div>
        <div className="text">
          Menu
        </div>
        <div className="icon cursor_pointer flex_middle">
          <CloseIcon style={{ fontSize: 16, marginTop: '0.1em' }} className='cancel' onClick={close} />
        </div>
      </div>
      <div className="app">
        <NavLink to='/' activeStyle={{ color: 'rgb(105, 182, 242)' }} >
          <div className="element flex_between">
          <div>
            <FontAwesomeIcon icon={faHome} style={{ marginRight: '0.5em' }} />
          </div>
          <div>Home</div>
        </div>
        </NavLink>
        <NavLink to='/projects' activeStyle={{ color: 'rgb(105, 182, 242)' }}>
          <div className="element flex_between">
          <div>
            <FontAwesomeIcon icon={faTools} style={{ marginRight: '0.5em' }} />
          </div>
          <div>Projects</div>
        </div>
        </NavLink>
        <NavLink to='/articles' activeStyle={{ color: 'rgb(105, 182, 242)' }}>
          <div className="element flex_between">
          <div>
            <FontAwesomeIcon icon={faNewspaper} style={{ marginRight: '0.5em' }} />
          </div>
          <div>Articles</div>
        </div>
        </NavLink>
        <NavLink to='/skills' activeStyle={{ color: 'rgb(105, 182, 242)' }}>
          <div className="element flex_between">
          <div>
            <FontAwesomeIcon icon={faBrain} style={{ marginRight: '0.5em' }} />
          </div>
          <div>Skills</div>
        </div>
        </NavLink>
       <NavLink to='/contact' activeStyle={{ color: 'rgb(105, 182, 242)' }}>
          <div className="element flex_between">
          <div>
            <FontAwesomeIcon icon={faMobileAlt} style={{ marginRight: '0.5em' }} />
          </div>
          <div>Contact</div>
        </div>
       </NavLink>
        <div className="element">
          <div className="resume">
            Resume
          </div>
        </div>
      </div>
  </div>;
};

SidebarMini.propTypes = {};

export default SidebarMini;
