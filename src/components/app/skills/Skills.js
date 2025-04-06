import { faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import random from "simple-random-number-generator";
import useInterval from "use-interval";

import css3Logo from '../../../resources/images/skills/logos/css3Logo.png';
import gitLogo from '../../../resources/images/skills/logos/gitLogo.png';
import htmlLogo from '../../../resources/images/skills/logos/htmlLogo.png';
import javaLogo from '../../../resources/images/skills/logos/javaLogo.png';
import jsLogo from '../../../resources/images/skills/logos/jsLogo.png';
import mongoLogo from '../../../resources/images/skills/logos/mongoLogo.png';
import nodeLogo from '../../../resources/images/skills/logos/nodeLogo.png';
import passportLogo from '../../../resources/images/skills/logos/passportLogo.png';
import psqlLogo from '../../../resources/images/skills/logos/psqlLogo.png';
import reactLogo from '../../../resources/images/skills/logos/reactLogo.png';
import reduxLogo from '../../../resources/images/skills/logos/reduxLogo.png';
import typescriptLogo from '../../../resources/images/skills/logos/typescriptLogo.png';
import pythonLogo from '../../../resources/images/skills/logos/pythonLogo.png';
import matlabLogo from '../../../resources/images/skills/logos/matlabLogo.png';
import d3Logo from '../../../resources/images/skills/logos/d3Logo.png';

import SkillOne from "./tools/Card";

import Title from "../../shared/layout/Title";

const skills = [
  {
    title: 'Python',
    logo: pythonLogo,
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
    title: 'React',
    logo: reactLogo,
    number: 3,
    delay: 450
  },
  {
    title: 'Javscript',
    logo: jsLogo,
    number: 0,
    delay: 50
  },
  {
    title: 'Postgres',
    logo: psqlLogo,
    number: 4,
    delay: 300
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
    title: 'MongoDb',
    logo: mongoLogo,
    number: 0,
    delay: 200
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
    number: 0,
    delay: 0
  },
  {
    title: 'PassportJS',
    logo: passportLogo,
    number: 3,
    delay: 400
  },
  {
    title: 'd3.js',
    logo: d3Logo,
    number: 2,
    delay: 400
  },
  {
    title: 'Matlab',
    logo: matlabLogo,
    number: 2,
    delay: 400
  }
];

const Skills = () => {
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
      <Title title={"Tech"} icon={<FontAwesomeIcon icon={faMicrochip} />} description={': Some tools I use quite often'} />
      <div className='flex gap-x-2 flex-wrap'>
        {skills.map((skill, index) => (
          <div key={index}>
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