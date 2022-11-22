import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBrain } from '@fortawesome/free-solid-svg-icons';
import useWindow from "react-window-size-simple";

import Navbar from '../navbar/Navbar';
import Footer from '../layout/Footer';
import SkillOne from './SkillsOne';

import BackgroundLarge from "../main/BackgroundLarge";
import BackgroundMedium from "../main/BackgroundMedium";
import BackgroundSmall from "../main/BackgroundSmall";
import BackgroundTiny from "../main/BackgroundTiny";

import reduxLogo from '../../resources/images/skills/logos/reduxLogo.png'
import reactLogo from '../../resources/images/skills/logos/reactLogo.png'
import jsLogo from '../../resources/images/skills/logos/jsLogo.png'
import nodeLogo from '../../resources/images/skills/logos/nodeLogo.png'
import psqlLogo from '../../resources/images/skills/logos/psqlLogo.png'
import gitLogo from '../../resources/images/skills/logos/gitLogo.png'
import muiLogo from '../../resources/images/skills/logos/muiLogo.png'
import passportLogo from '../../resources/images/skills/logos/passportLogo.png'
import mongoLogo from '../../resources/images/skills/logos/mongoLogo.png'
import css3Logo from '../../resources/images/skills/logos/css3Logo.png'
import htmlLogo from '../../resources/images/skills/logos/htmlLogo.png'
import MetaTags from '../layout/MetaTags';

const SkillsMain = ({
  Sidebar,
  // Redux State
  sidebar: { hover }
}) => {
  const { width } = useWindow()
  
  return (
    <>
      <MetaTags
        title={
          <title>Skills - Aunsh &middot; Full Stack Developer &middot; Portfolio</title>
        }
      />
      <Navbar />
      {Sidebar}
      <div>
        {width > 1280 && <BackgroundLarge />}
        {900 < width && width <= 1280 && <BackgroundMedium />}
        {600 < width && width <= 900 && <BackgroundSmall />}
        {width <= 600 && <BackgroundTiny />}
      </div>
      <div className='app'>
        <div className='skills-main'>
          <div className='title flex_middle' data-aos='flip-down'>
            <div style={{ marginRight: "0.5em" }}>
              <FontAwesomeIcon icon={faBrain} />
            </div>
            <div>Skills</div>
          </div>
          <div className='body-one'>
            <SkillOne
              delay={0}
              title={"React"}
              logo={reactLogo}
              runAos={false}
            />
            <SkillOne
              delay={200}
              title={"Node.js"}
              logo={nodeLogo}
              runAos={false}
            />
            <SkillOne
              delay={400}
              title={"Postgres"}
              logo={psqlLogo}
              runAos={false}
            />
          </div>
          <div className='body-two'>
            <SkillOne
              delay={0}
              title={"MongoDb"}
              logo={mongoLogo}
              runAos={false}
            />
            <SkillOne
              delay={200}
              title={"CSS"}
              logo={css3Logo}
              runAos={false}
            />
            <SkillOne
              delay={400}
              title={"HTML"}
              logo={htmlLogo}
              runAos={false}
            />
            <SkillOne delay={600} title={"JS"} logo={jsLogo} runAos={false} />
          </div>
          <div className='body-two' data-aos-offset='10'>
            <SkillOne delay={0} title={"Git"} logo={gitLogo} runAos={false} />
            <SkillOne
              delay={200}
              title={"Redux"}
              logo={reduxLogo}
              runAos={false}
            />
            <SkillOne delay={400} title={"Mui"} logo={muiLogo} runAos={false} />
            <SkillOne
              delay={600}
              title={"Passport"}
              logo={passportLogo}
              runAos={false}
            />
          </div>
        </div>
      </div>
    </>
  );
};

SkillsMain.propTypes = {
  sidebar: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  sidebar: state.sidebar,
});

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(SkillsMain);

