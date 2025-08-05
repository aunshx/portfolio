import { faLinkedin, faMedium, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase, faEnvelope, faHome, faMicrochip, faNewspaper, faSchoolFlag, faShare, faTools, faVial, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import useSound from "use-sound";
import {
  musicOff,
  musicOn
} from "../../../redux/actions/settings";
import { EMAIL_LINK, GITHUB_LINK, LINKEDIN_LINK, MEDIUM_LINK, RESUME_LINK } from '../../../resources/constants';
import pop from "../../../resources/sounds/pop.mp3";

const SidebarComponent = ({ close, goToFunc, elementHover, icon, title }) => {
  return (
    <div
      onClick={() => {
        close();
        goToFunc();
      }}
      onMouseEnter={elementHover}
      className='flex items-center justify-start gap-x-4 p-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 cursor-pointer'
    >
      <FontAwesomeIcon
        icon={icon}
        style={{ fontSize: 16 }}
        className="text-gray-400 w-5"
      />
      <span className="text-gray-300 hover:text-white transition-colors duration-200">
        {title}
      </span>
    </div>
  );
};

const ContactButton = ({ link, icon, title }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel='noreferrer nofollow'
      className="flex items-center justify-start gap-x-3 p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
    >
      <FontAwesomeIcon
        icon={icon}
        style={{ fontSize: 14 }}
        className="text-gray-400 w-4"
      />
      <div className='text-sm text-gray-300 hover:text-white transition-colors duration-200'>
        {title}
      </div>
    </a>
  );
};

const SidebarMini = ({
  close,
  goToHome,
  goToExperience,
  goToWork,
  goToResearch,
  goToSkills,
  goToArticles,
  goToEducation,
  settings: { sound },
}) => {
  const [playOn] = useSound(pop, { volume: 0.2 });

  const elementHover = () => {
    if (sound) {
      playOn();
    }
  };

  return (
    <div className='bg-gray-900 h-full text-gray-300 w-[16rem]'>
      <div className='flex items-center justify-between p-6 border-b border-gray-700'>
        <div className='text-xl font-semibold text-brand'>Menu</div>
        <button
          className='p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200'
          onClick={close}
        >
          <FontAwesomeIcon
            icon={faXmark}
            style={{ fontSize: 18 }}
            className='text-gray-400 hover:text-white'
          />
        </button>
      </div>

      <div className='p-6'>
        <div className='space-y-2 mb-8 flex flex-col items-center justify-center'>
          <SidebarComponent icon={faHome} title={'Home'} close={close} goToFunc={goToHome} elementHover={elementHover} />
          <SidebarComponent icon={faBriefcase} title={'Experience'} close={close} goToFunc={goToExperience} elementHover={elementHover} />
          <SidebarComponent icon={faMicrochip} title={'Tech'} close={close} goToFunc={goToSkills} elementHover={elementHover} />
          <SidebarComponent icon={faTools} title={'Work'} close={close} goToFunc={goToWork} elementHover={elementHover} />
          <SidebarComponent icon={faVial} title={'Research'} close={close} goToFunc={goToResearch} elementHover={elementHover} />
          <SidebarComponent icon={faSchoolFlag} title={'Education'} close={close} goToFunc={goToEducation} elementHover={elementHover} />
          <SidebarComponent icon={faNewspaper} title={'Blog'} close={close} goToFunc={goToArticles} elementHover={elementHover} />
        </div>

        <div className="mb-8 flex flex-col items-center justify-center">
          <div className='text-lg font-semibold mb-4 text-gray-200'>Connect</div>
          <div className="space-y-2">
            <ContactButton icon={faGithub} link={GITHUB_LINK} title={'GitHub'} />
            <ContactButton icon={faLinkedin} link={LINKEDIN_LINK} title={'LinkedIn'} />
            <ContactButton icon={faMedium} link={MEDIUM_LINK} title={'Medium'} />
            <ContactButton icon={faEnvelope} link={EMAIL_LINK} title={'Email'} />
          </div>
        </div>
        <a href={RESUME_LINK} target='_blank' rel='noreferrer nofollow'>
          <div className='w-full p-3 bg-brand hover:bg-blue-600 rounded-lg transition-colors duration-200 cursor-pointer'>
            <div className='flex items-center justify-center gap-x-3 text-white'>
              <FontAwesomeIcon icon={faShare} style={{ fontSize: 16 }} />
              <div className='font-medium'>Résumé/CV</div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

SidebarMini.propTypes = {
  settings: PropTypes.object.isRequired,
  musicOn: PropTypes.func.isRequired,
  musicOff: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  settings: state.settings,
});

const mapStateToActions = {
  musicOn,
  musicOff,
};

export default connect(mapStateToProps, mapStateToActions)(SidebarMini);