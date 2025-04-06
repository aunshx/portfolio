import { faTools } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

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

      <div className={`grid grid-cols-2 lg:grid-cols-1 gap-16 lg:gap-8 ${VERTICAL_MARGIN} flex items-center justify-center`}>
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
            tag={project.tag}
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