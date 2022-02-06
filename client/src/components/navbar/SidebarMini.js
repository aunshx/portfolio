import React from 'react';
import PropTypes from 'prop-types';

import CloseIcon from '@mui/icons-material/Close';

const SidebarMini = (props) => {
  return <div className='sidebar'>
      <div className="title triple_grid">
        <div></div>
        <div className="text">
          Menu
        </div>
        <div className="icon cursor_pointer flex_middle">
          <CloseIcon style={{ fontSize: 16, marginTop: '0.1em' }} className='cancel' />
        </div>
      </div>
  </div>;
};

SidebarMini.propTypes = {};

export default SidebarMini;
