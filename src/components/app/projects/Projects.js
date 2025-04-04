import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import useWindow from 'react-window-size-simple';

import {
  aunshPicsDark,
  aunshPicsLight,
  funWithRedditPics,
  gotuuPicsDark,
  gotuuPicsLight,
  omdbAPIPics,
} from './data/photos';

import Card from './tools/Card';
import { ExpandButton } from '../work/Work';
import Title from '../../shared/layout/Title';

const projectsData = [
  {
    id: 1,
    title: 'FRREDSS',
    subTitle: 'Web-App',
    description: 'Forest Resources and Renewable Energy Decision Support System (FRREDSS): An online siting and decision support application modeled for forest biomass',
    pics: gotuuPicsDark,
    tech: [
      'Biomass',
      'Technoeconomic Assessment',
      'LCA',
      'Agriculture',
      'Modelling',
    ],
    gitUrl: 'https://github.com/ucdavis/cecdss',
    link: 'https://forestdss.ucdavis.edu',
  },
  {
    id: 2,
    title: 'Fun w/ Reddit',
    subTitle: 'Web API Project',
    description: 'A simple web project to utilize the Reddit API by lazy-loading. API Data is cleaned and sent from the server in real-time while scrolling.',
    pics: funWithRedditPics,
    tech: [
      'Dual-Mode',
      'Reddit API',
      'Snoowrap',
      'Data Cleaning',
      'Lazy-load',
    ],
    gitUrl: 'https://github.com/aunshx/fun-with-reddit',
    link: 'https://sumptuous-sandy-basket.glitch.me/',
  },
  {
    id: 3,
    title: 'ResView',
    subTitle: 'Blockchain Visualizer',
    description: 'My portfolio website. Includes client side static site and admin overview functionalities to check stats and messages.',
    pics: aunshPicsLight,
    tech: ['Showcase', 'Personal', 'Messages', 'Mui', 'Javascript'],
    gitUrl: 'https://github.com/aunshx/portfolio',
    link: 'https://aunsh.com',
  },
  {
    id: 4,
    title: 'Movie Catalogue',
    subTitle: 'Omdb API Real time search',
    description: 'A project featuring real-time search and lazy loading using the Omdb movie API.',
    pics: omdbAPIPics,
    tech: [
      'Typescript',
      'API',
      'Lazy-Loading',
      'Responsive',
      'Search',
    ],
    gitUrl: 'https://github.com/aunshx/omdb_api',
    link: 'https://main--calm-cajeta-d1c26b.netlify.app/',
  },
];

const Projects = ({
  innerRef,
  // Redux State
  settings: { displayMode },
}) => {
  const { width } = useWindow();
  const [isCollapsed, setIsCollapsed] = useState(false)

  const changeCollapse = () => {
    setIsCollapsed((prev) => !prev);
  }

  return (
    <div className='w-full'>
      <Title
        icon={<FontAwesomeIcon icon={faTools} />}
        title="Selected Work"
      />

      <div className="flex justify-center w-full flex-wrap gap-16 items-center">
        {projectsData.map((project, index) => (
          <Card
            key={project.id}
            title={project.title}
            subTitle={project.subTitle}
            description={project.description}
            pics={project.pics}
            tech={project.tech}
            gitUrl={project.gitUrl}
            link={project.link}
            isReversed={index % 2 !== 0}
          />
        ))}
      </div>

      <div className="flex items-center justify-center mt-8">
        <ExpandButton isCollapsed={isCollapsed} onClick={changeCollapse} />
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

export default connect(mapStateToProps, {})(Projects);