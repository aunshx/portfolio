import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVial } from "@fortawesome/free-solid-svg-icons";

import Card from "./tools/Card";

import Title from "../../common/layout/Title";

const Research = ({
  innerRef,
  // Redux State
  settings: { displayMode },
}) => {
  return (
    <div className='app' ref={innerRef}>
      <div className='research'>
        <Title icon={<FontAwesomeIcon icon={faVial} />} title={"Research"} />
        <div className='body'>
          <div className='flex_middle'>
            <Card
              title={"5G Dual Band Pass Filter for Wi-Fi and WLAN Operations"}
              link={
                "https://drive.google.com/file/d/1vU5t8YAz7mKWWKG1-l77xMDisG6grjzA/view?usp=sharing"
              }
              description={
                "Project proposes a new generation of dual band pass 5G filter for Wi-Fi and WLAN operating t 2.45 GHz and 5.5 GHz."
              }
              tags={["5G", "Sponsored", "Telecommunication"]}
              achievements={["Published", "Best Paper"]}
            />
          </div>
          <div className='flex_middle'>
            <Card
              title={"Automated Steering Mechanism"}
              link={
                "https://drive.google.com/file/d/1ttdNB7z2pF7-3aN8B8jFnxNZ0vlveiLR/view?usp=sharing"
              }
              description={
                "An autonomous steering mechanism that uses Sobel filters (OpenCV) to detect lanes and passes deviation data to steering in real-time."
              }
              tags={["Image Processing", "ML", "Electronics"]}
              achievements={["Presented"]}
            />
          </div>
          <div className='flex_middle'>
            <Card
              title={"5G Dual Band Pass Filter for Wi-Fi and WLAN Operations"}
              link={
                "https://drive.google.com/file/d/1vU5t8YAz7mKWWKG1-l77xMDisG6grjzA/view?usp=sharing"
              }
              description={
                "Project proposes a new generation of dual band pass 5G filter for Wi-Fi and WLAN operating t 2.45 GHz and 5.5 GHz."
              }
              tags={["5G", "Sponsored", "Telecommunication"]}
              achievements={["Cost-effective"]}
            />
          </div>
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
