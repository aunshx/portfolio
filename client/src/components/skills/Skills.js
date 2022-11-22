import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain } from '@fortawesome/free-solid-svg-icons';

import SkillOne from './SkillsOne';

import reduxLogo from '../../resources/images/skills/logos/reduxLogo.png'
import reactLogo from '../../resources/images/skills/logos/reactLogo.png'
import jsLogo from '../../resources/images/skills/logos/jsLogo.png'
import nodeLogo from '../../resources/images/skills/logos/nodeLogo.png'
import psqlLogo from '../../resources/images/skills/logos/psqlLogo.png'
import gitLogo from '../../resources/images/skills/logos/gitLogo.png'
import springBootLogo from '../../resources/images/skills/logos/springBootLogo.png'
import pythonLogo from '../../resources/images/skills/logos/pythonLogo.png'
import mongoLogo from '../../resources/images/skills/logos/mongoLogo.png'
import css3Logo from '../../resources/images/skills/logos/css3Logo.png'
import javaLogo from '../../resources/images/skills/logos/javaLogo.png'
import cppLogo from '../../resources/images/skills/logos/cppLogo.png'


const Skills = ({ innerRef }) => {
  return (
    <div className='skills' ref={innerRef}>
      <div className='title flex_middle' data-aos='flip-down'>
        <div style={{ marginRight: "0.5em" }}>
          <FontAwesomeIcon icon={faBrain} />
        </div>
        <div>Skills</div>
      </div>
      <div className='body-two'>
        <div className='flex_middle'>
          <SkillOne delay={0} title={"Java"} logo={javaLogo} runAos={false} />
        </div>
        <div className='flex_middle'>
          <SkillOne delay={50} title={"JS"} logo={jsLogo} runAos={false} />
        </div>
        <div className='flex_middle'>
          <SkillOne delay={100} title={"C++"} logo={cppLogo} runAos={false} />
        </div>
        <div className='flex_middle'>
          <SkillOne
            delay={150}
            title={"Python"}
            logo={pythonLogo}
            runAos={false}
          />
        </div>
      </div>
      <div className='body-two'>
        <div className='flex_middle'>
          <SkillOne
            delay={200}
            title={"MongoDb"}
            logo={mongoLogo}
            runAos={false}
          />
        </div>
        <div className='flex_middle'>
          <SkillOne
            delay={250}
            title={"SpringBoot"}
            logo={springBootLogo}
            runAos={false}
          />
        </div>
        <div className='flex_middle'>
          <SkillOne
            delay={300}
            title={"Postgres"}
            logo={psqlLogo}
            runAos={false}
          />
        </div>
        <div className='flex_middle'>
          <SkillOne
            delay={350}
            title={"Node.js"}
            logo={nodeLogo}
            runAos={false}
          />
        </div>
      </div>
      <div className='body-two'>
        <div className='flex_middle'>
          <SkillOne delay={400} title={"Git"} logo={gitLogo} runAos={false} />
        </div>
        <div className='flex_middle'>
          <SkillOne delay={450} title={"React"} logo={reactLogo} runAos={false} />
        </div>
        <div className='flex_middle'>
          <SkillOne
            delay={500}
            title={"Redux"}
            logo={reduxLogo}
            runAos={false}
          />
        </div>
        <div className='flex_middle'>
          <SkillOne delay={550} title={"CSS"} logo={css3Logo} runAos={false} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
