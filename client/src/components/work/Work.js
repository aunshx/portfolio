import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";


import VerticalSlider from "./tools/VerticalSlider";

import { companies } from './data/data'
import CompanyDetails from "./tools/CompanyDetails";

const Work = ({
  innerRef,
  // Redux State
  settings: { displayMode },
}) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [glowOn, setGlowOn] = useState(false)

    const changeCurrentIndex = (index) => {
      setGlowOn(true)
      setCurrentIndex(index)
      setTimeout(() => setGlowOn(false), 200);
    }

  return (
    <div className='app' ref={innerRef}>
      <div className='work'>
        <div className='title flex_middle' data-aos='flip-down'>
          <div style={{ marginRight: "0.5em" }}>
            <FontAwesomeIcon icon={faBriefcase} />
          </div>
          <div>Work</div>
        </div>
        <div className='body app' style={{ alignItems: 'flex-start' }} >
          <VerticalSlider
            companies={companies}
            currentIndex={currentIndex}
            glowOn={glowOn}
            changeCurrentIndex={changeCurrentIndex}
          />
          <div className='details'>
            <CompanyDetails company={companies[currentIndex]} />
          </div>
        </div>
      </div>
    </div>
  );
};

Work.propTypes = {
  settings: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  settings: state.settings,
});

const mapStateToActions = {};

export default connect(mapStateToProps, mapStateToActions)(Work);
