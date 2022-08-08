import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';

import Card from './tools/Card';

import bodingaLogo from '../../resources/images/work-and-projects/logos/bodingaLogo.png'
import gotuuLogo from '../../resources/images/work-and-projects/logos/gotuuLogo.png'
import aunshLogo from '../../resources/images/work-and-projects/logos/aunshLogo.png'
import drsbsLogo from '../../resources/images/work-and-projects/logos/drsbsLogo.png'

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
          <Card
            runAos={true}
            picsLight={aunshPicsLight}
            picsDark={aunshPicsDark}
            logo={drsbsLogo}
            details={aunshDetails}
            type={"drsbs"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, libero!"
            }
            websiteTitle={"drsbs.in"}
            websiteUrl={"https://drsbs.in"}
            gitUrl={"https://github.com/aunshx/sb-vet-services"}
            tags={["react", "redux", "psql", "node", "js"]}
          />
          <Card
            runAos={true}
            picsLight={aunshPicsLight}
            picsDark={aunshPicsDark}
            logo={bodingaLogo}
            details={aunshDetails}
            type={"bodinga"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, libero!"
            }
            websiteTitle={"bodinga.com"}
            websiteUrl={"https://bodinga.com"}
            gitUrl={"https://github.com/aunshx/bodinga-lite"}
            tags={["react", "redux", "psql", "node", "js"]}
          />
          <Card
            runAos={true}
            picsLight={aunshPicsLight}
            picsDark={aunshPicsDark}
            logo={gotuuLogo}
            details={aunshDetails}
            type={"gotuu"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, libero!"
            }
            websiteTitle={"gotuu.in"}
            websiteUrl={"https://gotuu.in"}
            gitUrl={"https://github.com/aunshx/gotuu"}
            tags={["react", "redux", "mongo", "node", "js"]}
          />
          <Card
            runAos={true}
            picsLight={aunshPicsLight}
            picsDark={aunshPicsDark}
            logo={aunshLogo}
            details={aunshDetails}
            type={"aunsh"}
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
