import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Footer = ({  }) => {
  return (
    <div className='footer flex_middle'>
      <div className='text cursor_pointer'>
        <span style={{ marginBottom: "0.5em", fontSize: "0.8em" }}>
          Handcrafted with &#10084; by{" "}
          <a
            href='https://admin.aunsh.com/login'
            target={"_blank"}
            rel='noreferrer nofollow'
            style={{ fontSize: "0.95em", marginRight: "0.3em" }}
          >
            Aunsh B
          </a>{" "}
          |
        </span>{" "}
        <span style={{ margin: "0.3em 0.3em 0 0", fontSize: "0.8em" }}>
          {" "}
          {String.fromCodePoint("0X00A9")}
        </span>
        <span style={{ fontSize: "0.8em", fontWeight: "400" }}>2022</span>
      </div>
    </div>
  );
};

Footer.propTypes = {};  

export default Footer;
