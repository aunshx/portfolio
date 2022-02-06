import React from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => {
  return (
    <div className='footer flex_middle'>
        <div className="text">
           <span style={{ marginBottom: '0.5em', fontSize: '0.6em' }}>{String.fromCodePoint('0X00A9')}</span> a.
         <span style={{ fontSize: '0.6em', fontWeight: '400' }}> 2022</span>
        </div>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
