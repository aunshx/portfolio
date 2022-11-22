import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools } from "@fortawesome/free-solid-svg-icons";

import CardOld from "./tools/CardOld";
import Card from "./tools/Card";

import bodingaLogo from "../../resources/images/work-and-projects/logos/bodingaLogo.png";
import gotuuLogo from "../../resources/images/work-and-projects/logos/gotuuLogo.png";
import aunshLogo from "../../resources/images/work-and-projects/logos/aunshLogo.png";
import drsbsLogo from "../../resources/images/work-and-projects/logos/drsbsLogo.png";

import { aunshDetails } from "./data/details";
import {
  aunshPicsLight,
  aunshPicsDark,
  drSbsPics,
  gotuuPicsLight,
  gotuuPicsDark,
  bodingaPics,
} from "./data/photos";

const Projects = ({
  innerRef,
  // Redux State
  settings: { displayMode },
}) => {
  return (
    <div className='app' ref={innerRef}>
      <div className='projects'>
        <div className='title flex_middle' data-aos='flip-down'>
          <div style={{ marginRight: "0.5em" }}>
            <FontAwesomeIcon icon={faTools} />
          </div>
          <div>Projects</div>
        </div>
        <div className='body app'>
          <Card
            pics={displayMode ? gotuuPicsDark : gotuuPicsLight}
            title={"gotuu.in"}
            link={"https://gotuu.in"}
            subTitle={'Web-App'}
          />
          <CardOld
            runAos={false}
            picsLight={gotuuPicsLight}
            picsDark={gotuuPicsDark}
            logo={gotuuLogo}
            details={aunshDetails}
            type={"gotuu"}
            description={
              "A web-app to maximize your productivity and manage time smartly"
            }
            websiteTitle={"gotuu.in"}
            websiteUrl={"https://gotuu.in"}
            gitUrl={"https://github.com/aunshx/gotuu"}
            tags={["react", "redux", "mongo", "node", "js"]}
          />
        </div>
      </div>
    </div>
  );
};

Projects.propTypes = {
  settings: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  settings: state.settings,
});

const mapStateToActions = {};

export default connect(mapStateToProps, mapStateToActions)(Projects);
