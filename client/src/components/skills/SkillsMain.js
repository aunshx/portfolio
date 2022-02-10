import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBrain } from '@fortawesome/free-solid-svg-icons';

import Navbar from '../navbar/Navbar';
import Sidebar from '../navbar/Sidebar';
import Footer from '../layout/Footer';
import Background from '../main/Background';
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

const SkillsMain = (props) => {
  return<>
  <Background />
  <Navbar />
  <Sidebar />
      <div className="app">
        <div className='skills-main'>
    <div className="title flex_middle" data-aos='flip-down'>
      <div style={{ marginRight: '0.5em' }}>
        <FontAwesomeIcon icon={faBrain} />
      </div>
      <div>
        Skills
      </div>
    </div>
    <div className="body-one">
      <SkillOne delay={0} title={'React'} logo={reactLogo} />
      <SkillOne delay={200} title={'Node.js'} logo={nodeLogo} />
      <SkillOne delay={400} title={'Postgres'} logo={psqlLogo} />
    </div>
    <div className="body-two">
      <SkillOne delay={0} title={'MongoDb'} logo={mongoLogo} />
      <SkillOne delay={200} title={'CSS'} logo={css3Logo} />
      <SkillOne delay={400} title={'HTML'} logo={htmlLogo} />
      <SkillOne delay={600} title={'JS'} logo={jsLogo} />
    </div>
    <div className="body-two"  data-aos-offset='10'>
      <SkillOne delay={0} title={'Git'} logo={gitLogo} />
      <SkillOne delay={200} title={'Redux'} logo={reduxLogo} />
      <SkillOne delay={400} title={'Mui'} logo={muiLogo} />
      <SkillOne delay={600} title={'Passport'} logo={passportLogo} />
    </div>
  </div>;
      </div>
  <Footer />
  </>
};

SkillsMain.propTypes = {};

export default SkillsMain;