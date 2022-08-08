import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import useWindow from "react-window-size-simple";

import BodingaCard from "./bodinga/BodingaCard";
import YedaEngineerCard from "./sbvetservices/DrSbs";
import GotuuCard from "./gotuu/GotuuCard";
import Navbar from "../navbar/Navbar";

import BackgroundLarge from "../main/BackgroundLarge";
import BackgroundMedium from "../main/BackgroundMedium";
import BackgroundSmall from "../main/BackgroundSmall";
import BackgroundTiny from "../main/BackgroundTiny";

import AunshCard from "./aunsh/AunshCard";
import MetaTags from "../layout/MetaTags";
import Card from "./tools/Card";

// Bodinga 
import bodingaLogo from '../../resources/images/work-and-projects/logos/bodingaLogo.png'
import aunshLogo from '../../resources/images/work-and-projects/logos/aunshLogo.png'

import { aunshDetails } from "./data/details";
import {aunshPicsLight, aunshPicsDark} from './data/photos'

const ProjectsMain = ({ Sidebar}) => {
    const { width } = useWindow()
  return (
    <>
      <MetaTags
        title={
          <title>
            Projects - Aunsh &middot; Full Stack Developer &middot; Portfolio
          </title>
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
            <div>Work</div>
          </div>
          <div className='body app'>
            <BodingaCard runAos={false} />
            <YedaEngineerCard runAos={false} />
            <GotuuCard runAos={false} />
            <Card
              runAos={true}
              picsLight={aunshPicsLight}
              picsDark={aunshPicsDark}
              logo={aunshLogo}
              details={aunshDetails}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, libero!"
              }
              websiteTitle={"bodinga.com"}
              websiteUrl={"https://bodinga.com"}
              gitUrl={"https://github.com/aunshx/bodinga-lite"}
              tags={["react", "redux", "psql", "node", "js"]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsMain;
