import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';

import BodingaCard from './bodinga/BodingaCard';
import YedaEngineerCard from "./sbvetservices/DrSbs";
import GotuuCard from "./gotuu/GotuuCard";
import AunshCard from './aunsh/AunshCard';
import Card from './tools/Card';

// Bodinga 
import bodingaLogo from '../../resources/images/work-and-projects/logos/bodingaLogo.png'
import aunshLogo from '../../resources/images/work-and-projects/logos/aunshLogo.png'

import { aunshDetails } from "./data/details";
import {aunshPicsLight, aunshPicsDark} from './data/photos'

const Projects = () => {
  return (
    <div className='app'>
      <div className='projects'>
        <div className='title flex_middle' data-aos='flip-down'>
          <div style={{ marginRight: "0.5em" }}>
            <FontAwesomeIcon icon={faTools} />
          </div>
          <div>Work</div>
        </div>
        <div className='body app'>
          <BodingaCard runAos={true} />
          <GotuuCard runAos={true} />
          <YedaEngineerCard runAos={true} />
          <Card
            runAos={true}
            picsLight={aunshPicsLight}
            picsDark={aunshPicsDark}
            logo={aunshLogo}
            details={aunshDetails}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, libero!"
            }
            websiteTitle={"aunsh.com"}
            websiteUrl={"https://aunsh.com"}
            gitUrl={"https://github.com/aunshx/portfolio"}
            tags={["react", "redux", "psql", "node", "js"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
