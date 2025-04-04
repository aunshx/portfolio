import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import useWindow from 'react-window-size-simple';


import Card from './tools/Card';
import { ExpandButton } from '../work/Work';
import Title from '../../shared/layout/Title';
import { forestDssProj, omdbProj, redditInfinitProj, resviewProj, VERTICAL_MARGIN } from '../../../resources/constants';

const projectsData = [
  {
    id: 1,
    title: 'FRREDSS',
    subTitle: 'Web-App',
    description: 'Forest Resources and Renewable Energy Decision Support System (FRREDSS): An online siting and decision support application modeled for forest biomass',
    image: forestDssProj,
    tech: [
      'Biomass',
      'Technoeconomic Assessment',
      'LCA',
      'Agriculture',
      'Modelling',
    ],
    gitUrl: 'https://github.com/ucdavis/cecdss',
    link: 'https://forestdss.ucdavis.edu',
    tag: 'California OPR x UC Davis'
  },
  {
    id: 2,
    title: 'ResView',
    subTitle: 'Blockchain Visualizer',
    description: 'My portfolio website. Includes client side static site and admin overview functionalities to check stats and messages.',
    image: resviewProj,
    tech: ['Showcase', 'Personal', 'Messages', 'Mui', 'Javascript'],
    gitUrl: 'https://github.com/aunshx/portfolio',
    link: 'https://resview.resilientdb.com/pages/home',
    tag: 'ExpoLab'
  },
  {
    id: 3,
    title: 'Reddit Infiniti',
    subTitle: 'Web API Project',
    description: 'A simple project to utilize the Reddit API by lazy-loading. Filtered API Data is processed and consumed in real-time while scrolling.',
    image: redditInfinitProj,
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
    id: 4,
    title: 'Movie Catalogue',
    subTitle: 'Omdb API Real time search',
    description: 'A project featuring real-time search and lazy loading using the Omdb movie API.',
    image: omdbProj,
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
        title="Portfolio"
      />

      <div className={`flex justify-center w-full flex-wrap gap-16 items-center ${VERTICAL_MARGIN}`}>
        {projectsData.map((project, index) => (
          <Card
            key={project.id}
            title={project.title}
            subTitle={project.subTitle}
            description={project.description}
            image={project.image}
            tech={project.tech}
            gitUrl={project.gitUrl}
            link={project.link}
            isReversed={index % 2 !== 0}
          />
        ))}
      </div>

      <div className={`flex items-center justify-center ${VERTICAL_MARGIN}`}>
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