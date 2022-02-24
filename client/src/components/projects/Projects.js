import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';

import BodingaCard from './BodingaCard';
import YedaEngineerCard from './YedaengineerCard';
import GotuuCard from './GotuuCard';
import AunshCard from './aunsh/AunshCard';

const Projects = ({  }) => {
  return (
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
          <AunshCard />
        </div>
      </div>
      ;
    </div>
  );
};

Projects.propTypes = {};

export default Projects;
