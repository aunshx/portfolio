import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {sayings} from '../sayings'

const SynopsisAllTime = ({}) => {

  return (
    <div className='value--change--text'>
      {sayings[Math.floor(Math.random() * 10)] || "What a Number!"}
    </div>
  );
};

SynopsisAllTime.propTypes = {
};

const mapStateToProps = (state) => ({
});

const mapStateToActions = {};

export default connect(mapStateToProps, mapStateToActions)(SynopsisAllTime);
