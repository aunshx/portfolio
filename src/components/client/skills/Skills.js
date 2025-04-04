import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faHammer } from '@fortawesome/free-solid-svg-icons';
import random from "simple-random-number-generator";
import useInterval from "use-interval";

import reduxLogo from '../../../resources/images/skills/logos/reduxLogo.png'
import reactLogo from '../../../resources/images/skills/logos/reactLogo.png'
import jsLogo from '../../../resources/images/skills/logos/jsLogo.png'
import nodeLogo from '../../../resources/images/skills/logos/nodeLogo.png'
import psqlLogo from '../../../resources/images/skills/logos/psqlLogo.png'
import gitLogo from '../../../resources/images/skills/logos/gitLogo.png'
import mongoLogo from '../../../resources/images/skills/logos/mongoLogo.png'
import css3Logo from '../../../resources/images/skills/logos/css3Logo.png'
import javaLogo from '../../../resources/images/skills/logos/javaLogo.png'
import htmlLogo from '../../../resources/images/skills/logos/htmlLogo.png'
import typescriptLogo from '../../../resources/images/skills/logos/typescriptLogo.png'
import passportLogo from '../../../resources/images/skills/logos/passportLogo.png'

import SkillOne from "./tools/Card";

import Title from "../../common/layout/Title";

const skills = [
  {
    title: 'React',
    logo: reactLogo,
    number: 3,
    delay: 450
  },
  {
    title: 'Typescript',
    logo: typescriptLogo,
    number: 4,
    delay: 450
  },
  {
    title: 'Redux',
    logo: reduxLogo,
    number: 1,
    delay: 500
  },
  {
    title: 'CSS',
    logo: css3Logo,
    number: 1,
    delay: 550
  },
  {
    title: 'Node.js',
    logo: nodeLogo,
    number: 1,
    delay: 350
  },
  {
    title: 'Java',
    logo: javaLogo,
    number: 0,
    delay: 0
  },
  {
    title: 'JS',
    logo: jsLogo,
    number: 0,
    delay: 50
  },
  {
    title: 'MongoDb',
    logo: mongoLogo,
    number: 0,
    delay: 200
  },
  {
    title: 'Postgres',
    logo: psqlLogo,
    number: 3,
    delay: 300
  },
  {
    title: 'Git',
    logo: gitLogo,
    number: 2,
    delay: 400
  },
  {
    title: 'HTML 5',
    logo: htmlLogo,
    number: 4,
    delay: 0
  },
  {
    title: 'PassportJS',
    logo: passportLogo,
    number: 4,
    delay: 400
  }
];

const Skills = ({ innerRef }) => {
  let params = {
    min: 0,
    max: 4,
    integer: true,
  };

  const [number, setNumber] = useState(0);

  useInterval(() => {
    setNumber(random(params));
  }, 1000);

  return (
    <div className='grid grid-cols-[20%_80%] gap-5 w-full lg:grid-cols-1 items-center'>
      <Title title={"Tech"} icon={<FontAwesomeIcon icon={faHammer} />} description={': Some tools I use quite often'} />
      <div className='flex gap-x-2 flex-wrap'>
        {skills.map((skill, index) => (
          <div key={index} className={index >= 4 ? 'flex_middle' : ''}>
            <SkillOne
              delay={skill.delay}
              title={skill.title}
              logo={skill.logo}
              runAos={false}
              number={skill.number}
              numberCurrent={number}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;