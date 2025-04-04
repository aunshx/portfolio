import { faTools } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import useWindow from "react-window-size-simple";

import Card from "./tools/browser/Card";
import InvertedCard from "./tools/browser/InvertedCard";
import SmallCard from './tools/mobile/Card';

import {
  aunshPicsDark,
  aunshPicsLight,
  funWithRedditPics,
  gotuuPicsDark,
  gotuuPicsLight,
  omdbAPIPics,
} from "./data/photos";

import Title from "../../common/layout/Title";

const Projects = ({
  innerRef,
  // Redux State
  settings: { displayMode },
}) => {

  const { width } = useWindow()

  return (
      <div className='projects w-full'>
      <Title
        icon={<FontAwesomeIcon icon={faTools} />}
        title={"Selected Work"}
      />
        <div className='body app'>
          {width < 860 ? (
            <div>
              <SmallCard
                pics={displayMode ? gotuuPicsDark : gotuuPicsLight}
                title={"FRREDSS"}
                link={"https://forestdss.ucdavis.edu"}
                subTitle={"Web-App"}
                description={"Forest Resources and Renewable Energy Decision Support System (FRREDSS): An online siting and decision support application modeled for forest biomass"}
                tech={[
                  "Biomass",
                  "Technoeconomic Assessment",
                  "LCA",
                  "Agriculture",
                  "Modelling",
                ]}
                gitUrl={"https://github.com/ucdavis/cecdss"}
              />
              <SmallCard
                pics={funWithRedditPics}
                title={"Fun w/ Reddit"}
                link={"https://sumptuous-sandy-basket.glitch.me/"}
                subTitle={"Web API Project"}
                description={
                  "A simple web project to utilize the Reddit API by lazy-loading. API Data is cleaned and sent from the server in real-time while scrolling."
                }
                tech={[
                  "Dual-Mode",
                  "Reddit API",
                  "Snoowrap",
                  "Data Cleaning",
                  "Lazy-load",
                ]}
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
                tech={["Showcase", "Personal", "Messages", "Mui", "Javascript"]}
                gitUrl={"https://github.com/aunshx/portfolio"}
              />
              <SmallCard
                pics={omdbAPIPics}
                title={"Omdb API"}
                link={"https://main--calm-cajeta-d1c26b.netlify.app/"}
                subTitle={"Real time search"}
                description={
                  "A project featuring real-time search and lazy loading using the Omdb movie API."
                }
                tech={[
                  "Typescript",
                  "API",
                  "Lazy-Loading",
                  "Responsive",
                  "Search",
                ]}
                gitUrl={"https://github.com/aunshx/omdb_api"}
              />
            </div>
          ) : (
            <>
              <Card
                pics={displayMode ? gotuuPicsDark : gotuuPicsLight}
                title={"FRREDSS"}
                link={"https://forestdss.ucdavis.edu"}
                subTitle={"Web-App"}
                description={"Forest Resources and Renewable Energy Decision Support System (FRREDSS): An online siting and decision support application modeled for forest biomass"}
                tech={[
                  "Biomass",
                  "Technoeconomic Assessment",
                  "LCA",
                  "Agriculture",
                  "Modelling",
                ]}
                gitUrl={"https://github.com/ucdavis/cecdss"}
              />
              <InvertedCard
                pics={funWithRedditPics}
                title={"Fun w/ Reddit"}
                link={"https://sumptuous-sandy-basket.glitch.me/"}
                subTitle={"Web API Project"}
                description={
                  "A simple web project to utilize the Reddit API by lazy-loading. API Data is cleaned and sent from the server in real-time while scrolling."
                }
                tech={[
                  "Dual-Mode",
                  "Reddit API",
                  "Snoowrap",
                  "Data Cleaning",
                  "Lazy-load",
                ]}
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
                tech={["Showcase", "Personal", "Messages", "Mui", "Javascript"]}
                gitUrl={"https://github.com/aunshx/portfolio"}
              />
              <InvertedCard
                pics={omdbAPIPics}
                title={"Omdb API"}
                link={"https://main--calm-cajeta-d1c26b.netlify.app/"}
                subTitle={"Real time search"}
                description={
                  "A project featuring real-time search and lazy loading using the Omdb movie API."
                }
                tech={[
                  "Typescript",
                  "API",
                  "Lazy-Loading",
                  "Responsive",
                  "Search",
                ]}
                gitUrl={"https://github.com/aunshx/omdb_api"}
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
