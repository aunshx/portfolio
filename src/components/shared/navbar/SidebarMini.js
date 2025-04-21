import PropTypes from 'prop-types';
import React from 'react';
import { connect } from "react-redux";
import useSound from "use-sound";

import { faBriefcase, faEnvelope, faHome, faMicrochip, faNewspaper, faSchoolFlag, faShare, faTools, faVial, faVolumeMute, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "@mui/material";

import CloseIcon from '@mui/icons-material/Close';

import pop from "../../../resources/sounds/pop.mp3";

import { faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import {
  musicOff,
  musicOn,
  soundOff,
  soundOn,
} from "../../../redux/actions/settings";
import { RESUME_LINK } from '../../../resources/constants';
import { ContactButtons } from '../layout/Footer';

const SidebarComponent = ({ close, goToFunc, elementHover, icon, title}) => {
  return (
    <div
      onClick={() => {
        close();
        goToFunc();
      }}
      onMouseEnter={elementHover}
      className={'flex items-center justify-center gap-x-2'}
    >
      <FontAwesomeIcon
        icon={icon}
        style={{
          fontSize: 15
        }}
      />
      <span>
        {title}
      </span>
    </div>
  );
};


const SidebarMini = ({
  close,
  goToHome,
  goToWork,
  goToProjects,
  goToResearch,
  goToSkills,
  goToArticles,
  goToEducation,
  // Redux State
  settings: { sound },
  // Redux Actions
  soundOn,
  soundOff,
}) => {
  const [playOn] = useSound(pop, { volume: 1 });

  const elementHover = () => {
    if (sound) {
      playOn();
    }
  };

  const soundTurnOff = () => {
    soundOff();
  };

  const soundTurnOn = () => {
    soundOn();
  };

 
  return (
    <div className='sidebar bg-zinc-950 h-full text-gray-400 px-2 py-4'>
      <div className='title flex_around'>
        <div></div>
        <div className='text-xl text-brand'>Menu</div>
        <div className='cursor-pointer'>
          <CloseIcon
            style={{ fontSize: 20 }}
            className='cancel'
            onClick={close}
          />
        </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-y-8 mt-4'>
            {sound ? (
              <div className='cursor-pointer'>
                <Tooltip title='Sound-On' placement='left'>
                  <div>
                    <FontAwesomeIcon
                      icon={faVolumeUp}
                      onClick={soundTurnOff}
                      style={{
                        fontSize: 20,
                      }}
                      className='text-brand'
                    />
                  </div>
                </Tooltip>
              </div>
            ) : (
              <div className='cursor-pointer'>
                <Tooltip title='Sound-Off' placement='left'>
                  <div>
                    <FontAwesomeIcon
                      icon={faVolumeMute}
                      onClick={soundTurnOn}
                      style={{
                        fontSize: 20,
                      }}
                      className='text-gray-400'
                    />
                  </div>
                </Tooltip>
              </div>
            )}
        <SidebarComponent icon={faHome} title={'Home'} close={close} goToFunc={goToHome} elementHover={elementHover}  />
        <SidebarComponent icon={faBriefcase} title={'Experience'} close={close} goToFunc={goToWork} elementHover={elementHover} />
        <SidebarComponent icon={faSchoolFlag} title={'Education'} close={close} goToFunc={goToEducation} elementHover={elementHover} />
        <SidebarComponent icon={faTools} title={'Projects'} close={close} goToFunc={goToProjects} elementHover={elementHover} />
        <SidebarComponent icon={faVial} title={'Research'} close={close} goToFunc={goToResearch} elementHover={elementHover} />
        <SidebarComponent icon={faNewspaper} title={'Blog'} close={close} goToFunc={goToArticles} elementHover={elementHover} />
        <SidebarComponent icon={faMicrochip} title={'Tech'} close={close} goToFunc={goToSkills} elementHover={elementHover} />

        <div className="flex flex-col w-full px-2">
          <div className='text-lg font-bold mb-2 text-center'>
            Connect
          </div>
          <div className="flex flex-wrap w-full px-2 items-center justify-center gap-4">
            <ContactButtons />
            <ContactButtons icon={faLinkedin} link={'https://linkedin.com/in/aunsh'} title={'Linkedin'} />
            <ContactButtons icon={faMedium} link={'https://aunsh.medium.com/'} title={'Medium'} />
            <ContactButtons icon={faEnvelope} link={'mailto:aunsh.spb@gmail.com'} title={'Mail'} />
          </div>
        </div> 
      <a href={RESUME_LINK} target='_blank' rel='noreferrer nofollow'>
        <div
            className='resume-btn flex items-center justify-between gap-x-2'
        >
          <FontAwesomeIcon icon={faShare} className='icon' />
            <div className='text'>Résumé/CV</div>
        </div>
      </a>
      </div>
    </div>
  );
};

SidebarMini.propTypes = {
  settings: PropTypes.object.isRequired,
  soundOn: PropTypes.func.isRequired,
  soundOff: PropTypes.func.isRequired,
  musicOn: PropTypes.func.isRequired,
  musicOff: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  settings: state.settings,
});

const mapStateToActions = {
  soundOn,
  soundOff,
  musicOn,
  musicOff,
};

export default connect(mapStateToProps, mapStateToActions)(SidebarMini);