import { faBrain, faBriefcase, faHome, faNewspaper, faSchool, faTools, faVial } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import useWindow from 'react-window-size-simple';
import useSound from 'use-sound';
import pop from '../../../resources/sounds/pop.mp3';

const Sidebar = ({
  goToHome,
  goToWork,
  goToProjects,
  goToResearch,
  goToSkills,
  goToArticles,
  goToEducation,
  settings: { sound },
}) => {
  const { width } = useWindow();

  const [expanded, setExpanded] = useState(false);
  const [playSound] = useSound(pop, { volume: 0.2 });

  const handleHover = () => {
    if (!expanded) {
      setExpanded(true);
    }
    if (sound) {
      playSound();
    }
  };

  const handleLeave = () => {
    if (expanded) {
      setExpanded(false);
    }
  };

  const navItems = [
    { icon: faHome, title: 'Home', action: goToHome },
    { icon: faBriefcase, title: 'Work Ex', action: goToWork },
    { icon: faSchool, title: 'Education', action: goToEducation },
    { icon: faTools, title: 'Projects', action: goToProjects },
    { icon: faVial, title: 'Research', action: goToResearch },
    { icon: faNewspaper, title: 'Blog', action: goToArticles },
    { icon: faBrain, title: 'Tech', action: goToSkills },
  ];

  if(width < 787) return null;

  return (
    <div
      className={`fixed left-0 top-[60px] h-[calc(100vh-60px)] bg-none text-gray-400 transition-all duration-300 ease-in-out z-[190] pt-8 ${expanded ? 'w-[180px]' : 'w-[50px]'}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <div className="flex flex-col gap-y-16 items-center">
        {navItems.map((item, index) => (
          <div
            key={index}
            className="relative flex items-center w-full cursor-pointer pl-4 hover:text-[rgb(0,145,255)]"
            onClick={item.action}
          >
            <FontAwesomeIcon
              icon={item.icon}
              className="w-[18px] h-[18px] transition-all"
            />
            <span
              className={`absolute left-10 ml-2 whitespace-nowrap transition-opacity duration-300 ${expanded ? 'opacity-100' : 'opacity-0'
                }`}
            >
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  settings: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  settings: state.settings,
});

export default connect(mapStateToProps)(Sidebar);