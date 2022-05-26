import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FooterAdmin = ({}) => {
  return (
    <div className='footer--admin flex_middle'>
      <div className='text cursor_pointer'>
        <span style={{ marginBottom: "0.5em", fontSize: "0.8em" }}>
          {String.fromCodePoint("0X00A9")}
        </span>{" "}
        <a href='/login' target={"_blank"} rel='noreferrer nofollow'>
          aunsh.
        </a>
        <span style={{ fontSize: "0.8em", fontWeight: "400" }}> 2022</span>
      </div>
    </div>
  );
};

FooterAdmin.propTypes = {};

export default FooterAdmin;
