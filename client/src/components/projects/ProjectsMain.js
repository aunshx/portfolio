import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import useWindow from "react-window-size-simple";

import BodingaCard from "./BodingaCard";
import YedaEngineerCard from "./YedaengineerCard";
import GotuuCard from "./GotuuCard";
import Navbar from "../navbar/Navbar";

import BackgroundLarge from "../main/BackgroundLarge";
import BackgroundMedium from "../main/BackgroundMedium";
import BackgroundSmall from "../main/BackgroundSmall";
import BackgroundTiny from "../main/BackgroundTiny";

import AunshCard from "./aunsh/AunshCard";
import MetaTags from "../layout/MetaTags";

const ProjectsMain = ({ Sidebar}) => {
    const { width, height } = useWindow()
  return (
    <>
      <MetaTags
        title={
          <title>Projects - Aunsh &middot; Full Stack Developer &middot; Portfolio</title>
        }
      />
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
            <BodingaCard runAos={false} />
            <YedaEngineerCard runAos={false} />
            <GotuuCard runAos={false} />
            <AunshCard runAos={false} />
          </div>
        </div>
      </div>
    </>
  );
};

ProjectsMain.propTypes = {};

export default ProjectsMain;
