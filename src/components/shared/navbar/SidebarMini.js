import { faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase, faEnvelope, faHome, faMicrochip, faNewspaper, faSchoolFlag, faShare, faTools, faVial } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import useSound from "use-sound";
import {
  musicOff,
  musicOn
} from "../../../redux/actions/settings";
import { EMAIL_LINK, LINKEDIN_LINK, MEDIUM_LINK, RESUME_LINK } from '../../../resources/constants';
import pop from "../../../resources/sounds/pop.mp3";
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
  goToExperience,
  goToWork,
  goToResearch,
  goToSkills,
  goToArticles,
  goToEducation,
  // Redux State
  settings: { sound },
}) => {
  const [playOn] = useSound(pop, { volume: 1 });

  const elementHover = () => {
    if (sound) {
      playOn();
    }
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
      <div className='flex flex-col items-start justify-center gap-y-8 mt-4 px-12'>
        <SidebarComponent icon={faHome} title={'Home'} close={close} goToFunc={goToHome} elementHover={elementHover}  />
        <SidebarComponent icon={faBriefcase} title={'Experience'} close={close} goToFunc={goToExperience} elementHover={elementHover} />
        <SidebarComponent icon={faSchoolFlag} title={'Education'} close={close} goToFunc={goToEducation} elementHover={elementHover} />
        <SidebarComponent icon={faTools} title={'Work'} close={close} goToFunc={goToWork} elementHover={elementHover} />
        <SidebarComponent icon={faVial} title={'Research'} close={close} goToFunc={goToResearch} elementHover={elementHover} />
        <SidebarComponent icon={faNewspaper} title={'Blog'} close={close} goToFunc={goToArticles} elementHover={elementHover} />
        <SidebarComponent icon={faMicrochip} title={'Tech'} close={close} goToFunc={goToSkills} elementHover={elementHover} />

        <div className="flex flex-col items-start justify-center gap-y-4 w-full">
          <div className='text-lg font-bold'>
            Connect
          </div>
          <div className="flex flex-col items-start justify-center w-full gap-4">
            <ContactButtons />
            <ContactButtons icon={faLinkedin} link={LINKEDIN_LINK} title={'Linkedin'} />
            <ContactButtons icon={faMedium} link={MEDIUM_LINK} title={'Medium'} />
            <ContactButtons icon={faEnvelope} link={EMAIL_LINK} title={'Mail'} />
          </div>
        </div> 
        <a href={RESUME_LINK} target='_blank' rel='noreferrer nofollow' className='w-full flex items-start justify-center'>
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