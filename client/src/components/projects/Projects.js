import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import Card from './Card';

const Projects = (props) => {
  return <div className='projects'>
    <div className="title flex_middle">
      <div style={{ marginRight: '0.5em' }}>
        <FontAwesomeIcon icon={faTools} />
      </div>
      <div>
        Projects
      </div>
    </div>
    <div className="body flex_middle">
      <Card />
    </div>
  </div>;
};

Projects.propTypes = {};

export default Projects;
