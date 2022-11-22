import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools } from "@fortawesome/free-solid-svg-icons";

import Card from "./tools/Card";
import InvertedCard from "./tools/InvertedCard";

import { aunshDetails } from "./data/details";
import {
  aunshPicsLight,
  aunshPicsDark,
  gotuuPicsLight,
  gotuuPicsDark,
  funWithRedditPics,
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
            subTitle={"Web-App"}
            description={
              "A web-app to maximize your productivity and manage time smartly. Also included smart metrics to check your statistics."
            }
            tech={["React", "Redux", "MongodB", "Node.js", "Javascript"]}
            gitUrl={"https://github.com/aunshx/gotuu"}
          />
          <InvertedCard
            pics={funWithRedditPics}
            title={"Fun w/ Reddit"}
            link={"https://fun-with-reddit.herokuapp.com"}
            subTitle={"Web API Project"}
            description={
              "A simple web project to utilize the Reddit API by lazy-loading. API Data is cleaned and sent from the server in real-time while scrolling."
            }
            tech={["React", "Redux", "MongodB", "Node.js", "Javascript"]}
            gitUrl={"https://github.com/aunshx/fun-with-reddit"}
          />
          <Card
            pics={displayMode ? aunshPicsDark : aunshPicsLight}
            title={"aunsh.com"}
            link={"https://aunsh.com"}
            subTitle={"Portfolio Website"}
            description={
              "My portfolio website. Includes client side static site and admin overview functionalities to check stats and messages."
            }
            tech={["Node.js", "PSQL", "React", "Mui", "Javascript"]}
            gitUrl={"https://github.com/aunshx/portfolio"}
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
