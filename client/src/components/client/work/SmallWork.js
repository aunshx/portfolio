import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import useWindow from "react-window-size-simple";

import { companies } from './data/data'
import CompanyDetails from "./tools/CompanyDetails";
import VerticalSlider from "./tools/VerticalSlider";

import Title from "../../common/layout/Title";
import HorizontalSlider from "./tools/HorizontalSlider";

const SmallWork = ({
  innerRef,
  // Redux State
  settings: { displayMode },
}) => {
  useEffect(() => {});

  const { width } = useWindow();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [glowOn, setGlowOn] = useState(false);

  const changeCurrentIndex = (index) => {
    setGlowOn(true);
    setCurrentIndex(index);
    setTimeout(() => setGlowOn(false), 200);
  };

  return (
    <div className='app' ref={innerRef}>
      <div className='work'>
        <div style={{ marginBottom: "2.5em" }}>
          <Title icon={<FontAwesomeIcon icon={faBriefcase} />} title={"Work"} />
        </div>
        <div className='list-small flex_left'>
          <HorizontalSlider
            companies={companies}
            currentIndex={currentIndex}
            glowOn={glowOn}
            changeCurrentIndex={changeCurrentIndex}
          />
        </div>
        <div className='app'>
          <div
            className='body app'
            style={width < 800 ? {} : { alignItems: "flex-start" }}
          >
            <div className='details'>
              {!glowOn && <CompanyDetails company={companies[currentIndex]} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SmallWork.propTypes = {
  settings: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  settings: state.settings,
});

const mapStateToActions = {};

export default connect(mapStateToProps, mapStateToActions)(SmallWork);
