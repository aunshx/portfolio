import React from 'react';
import PropTypes from 'prop-types';

const Navbar = (props) => {
  return <div className='navbar flex_between'>
    <div className="left">
      aunsh.
    </div>
    <div className="middle flex_between">
      <div>Home</div>
      <div>Projects</div>
      <div>Articles</div>
      <div>Skills</div>
      <div>Contact</div>
    </div>
    <div className="right">
      Resume
    </div>
  </div>;
};

Navbar.propTypes = {};

export default Navbar;
