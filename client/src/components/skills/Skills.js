import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain } from '@fortawesome/free-solid-svg-icons';

import SkillOne from './SkillsOne';

import defaultImg from '../../resources/images/default.jpg'
import reduxLogo from '../../resources/images/reduxLogo.png'
import reactLogo from '../../resources/images/reactLogo.png'
import jsLogo from '../../resources/images/jsLogo.png'
import nodeLogo from '../../resources/images/nodeLogo.png'
import psqlLogo from '../../resources/images/psqlLogo.png'
import gitLogo from '../../resources/images/gitLogo.png'
import muiLogo from '../../resources/images/muiLogo.png'
import passportLogo from '../../resources/images/passportLogo.png'
import mongoLogo from '../../resources/images/mongoLogo.png'
import css3Logo from '../../resources/images/css3Logo.png'
import htmlLogo from '../../resources/images/htmlLogo.png'


const Skills = (props) => {

  return (
    <div className='skills'>
      <div className='title flex_middle' data-aos='flip-down'>
        <div style={{ marginRight: "0.5em" }}>
          <FontAwesomeIcon icon={faBrain} />
        </div>
        <div>Skills</div>
      </div>
      <div className='body-one'>
        <SkillOne delay={0} title={"React"} logo={reactLogo} runAos={true} />
        <SkillOne delay={200} title={"Node.js"} logo={nodeLogo} runAos={true} />
        <SkillOne
          delay={400}
          title={"Postgres"}
          logo={psqlLogo}
          runAos={true}
        />
      </div>
      <div className='body-two'>
        <SkillOne delay={0} title={"MongoDb"} logo={mongoLogo} runAos={true} />
        <SkillOne delay={200} title={"CSS"} logo={css3Logo} runAos={true} />
        <SkillOne delay={400} title={"HTML"} logo={htmlLogo} runAos={true} />
        <SkillOne delay={600} title={"JS"} logo={jsLogo} runAos={true} />
      </div>
      <div className='body-two'>
        <SkillOne delay={0} title={"Git"} logo={gitLogo} runAos={true} />
        <SkillOne delay={200} title={"Redux"} logo={reduxLogo} runAos={true} />
        <SkillOne delay={400} title={"Mui"} logo={muiLogo} runAos={true} />
        <SkillOne
          delay={600}
          title={"Passport"}
          logo={passportLogo}
          runAos={true}
        />
      </div>
    </div>
  );
};

Skills.propTypes = {};

export default Skills;
