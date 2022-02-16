import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools } from "@fortawesome/free-solid-svg-icons";

import BodingaCard from "./BodingaCard";
import YedaEngineerCard from "./YedaengineerCard";
import GotuuCard from "./GotuuCard";
import Navbar from "../navbar/Navbar";

import BackgroundLarge from "../main/BackgroundLarge";
import BackgroundMedium from "../main/BackgroundMedium";
import BackgroundSmall from "../main/BackgroundSmall";
import BackgroundTiny from "../main/BackgroundTiny";

import windowSize from "../../utils/windowSize";
import Footer from "../layout/Footer";

const ProjectsMain = ({ Sidebar}) => {
    const { width, height } = windowSize()
  return (
    <>
      <Navbar />
      {Sidebar}
      <div>
        {width > 1280 && <BackgroundLarge />}
        {900 < width && width <= 1280 && <BackgroundMedium />}
        {600 < width && width <= 900 && <BackgroundSmall />}
        {width <= 600 && <BackgroundTiny />}
      </div>
      <div className='app'>
        <div className='projects'>
          <div className='title flex_middle' data-aos='flip-down'>
            <div style={{ marginRight: "0.5em" }}>
              <FontAwesomeIcon icon={faTools} />
            </div>
            <div>Projects</div>
          </div>
          <div className='body app'>
            <BodingaCard />
            <YedaEngineerCard />
            <GotuuCard />
          </div>
        </div>
      </div>
      <div className='flex_middle'>
        <div
          style={{
            position: "fixed",
            bottom: "-12px",
            width: "20%",
            alignItems: "end",
          }}
          className='flex_middle'
        >
          <Footer />
        </div>
      </div>
    </>
  );
};

ProjectsMain.propTypes = {};

export default ProjectsMain;
