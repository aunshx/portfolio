import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVial } from "@fortawesome/free-solid-svg-icons";

const Research = ({
  innerRef,
  // Redux State
  settings: { displayMode },
}) => {
  return (
    <div className='app' ref={innerRef}>
      <div className='research'>
        <div className='title flex_middle' data-aos='flip-down'>
          <div style={{ marginRight: "0.5em" }}>
            <FontAwesomeIcon icon={faVial} />
          </div>
          <div>Research</div>
        </div>
    </div>
    </div>
  );
};

Research.propTypes = {
  settings: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  settings: state.settings,
});

const mapStateToActions = {};

export default connect(mapStateToProps, mapStateToActions)(Research);
