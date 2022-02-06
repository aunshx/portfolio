import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return <div className='navbar flex_between'>
    <div className="left">
      aunsh.
    </div>
    <div className="right flex_between">
      <NavLink to='/'>
         <div className='element cursor_pointer'>Home</div>
      </NavLink>
      <NavLink to='/projects'>
      <div className='element cursor_pointer'>Projects</div>
      </NavLink>
      <NavLink to='/articles'>
         <div className='element cursor_pointer'>Articles</div>
      </NavLink>
      <NavLink to='/skills'>
         <div className='element cursor_pointer'>Skills</div>
      </NavLink>
      <NavLink to='/contacts'>
         <div className='element cursor_pointer'>Contact</div>
      </NavLink>
      <div className="resume">
        Resume
      </div>
    </div>
  </div>;
};

Navbar.propTypes = {};

export default Navbar;
