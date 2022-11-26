import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import useWindow from "react-window-size-simple";

import Card from "./tools/browser/Card";
import SmallCard from './tools/mobile/Card';
import InvertedCard from "./tools/browser/InvertedCard";

import {
  aunshPicsLight,
  aunshPicsDark,
  gotuuPicsLight,
  gotuuPicsDark,
  funWithRedditPics,
} from "./data/photos";

import Title from "../../common/layout/Title";

const Projects = ({
  innerRef,
  // Redux State
  settings: { displayMode },
}) => {

  const { width } = useWindow()

  return (
    <div className='app' ref={innerRef}>
      <div className='projects'>
        <div style={{ marginBottom : '2.5em' }} >
          <Title icon={<FontAwesomeIcon icon={faTools} />} title={"Projects"} />
        </div>
        <div className='body app'>
          {width < 860 ? (
            <div>
              <SmallCard
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
              <SmallCard
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
              <SmallCard
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
          ) : (
            <>
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
            </>
          )}
        </div>
        <div className='read-more flex_middle' style={{ marginTop: "-3em" }}>
          <div className='ft-bold' style={{ marginLeft: "0.5em" }}>
            <a
              href='https://github.com/aunshx?tab=repositories'
              rel='noreferrer nofollow'
              target='_blank'
            >
              More Projects
            </a>
          </div>
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
