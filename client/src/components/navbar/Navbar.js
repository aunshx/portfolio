import React from 'react';
import PropTypes from 'prop-types';

const Navbar = (props) => {
  return <div className='navbar flex_between'>
    <div className="left">
      aunsh.
    </div>
    <div className="right flex_between">
       <div className='element cursor_pointer'>Home</div>
      <div className='element cursor_pointer'>Projects</div>
      <div className='element cursor_pointer'>Articles</div>
      <div className='element cursor_pointer'>Skills</div>
      <div className='element cursor_pointer'>Contact</div>
      <div className="resume">
        Resume
      </div>
    </div>
  </div>;
};

Navbar.propTypes = {};

export default Navbar;
