import { faTools } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import useWindow from 'react-window-size-simple';

import { PROJECT_LIST, VERTICAL_MARGIN } from '../../../resources/constants';
import Title from '../../shared/layout/Title';
import { ExpandButton } from '../work/Work';
import Card from './tools/Card';

const Projects = () => {
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
        {PROJECT_LIST.map((project, index) => (
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


export default Projects;