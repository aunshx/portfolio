import { faBrain, faBriefcase, faHome, faNewspaper, faSchool, faTools, faVial } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cn from "classnames";
import { useState } from 'react';
import { connect } from 'react-redux';

const Sidebar = ({
  goToHome,
  goToWork,
  goToExperience,
  goToResearch,
  goToSkills,
  goToArticles,
  goToEducation,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const handleHover = () => {
    if (!expanded) {
      setExpanded(true);
    }
  };

  const handleLeave = () => {
    if (expanded) {
      setExpanded(false);
    }
    setActiveItem(null);
  };

  const handleItemHover = (index) => {
    setActiveItem(index);
  };

  const handleItemLeave = () => {
    setActiveItem(null);
  };

  const navItems = [
    { icon: faHome, title: 'Home', action: goToHome, color: 'from-blue-500 to-cyan-500' },
    { icon: faBriefcase, title: 'Experience', action: goToExperience, color: 'from-purple-500 to-pink-500' },
    { icon: faBrain, title: 'Tech', action: goToSkills, color: 'from-green-500 to-emerald-500' },
    { icon: faTools, title: 'Work', action: goToWork, color: 'from-orange-500 to-red-500' },
    { icon: faVial, title: 'Research', action: goToResearch, color: 'from-indigo-500 to-purple-500' },
    { icon: faSchool, title: 'Education', action: goToEducation, color: 'from-yellow-500 to-orange-500' },
    { icon: faNewspaper, title: 'Blog', action: goToArticles, color: 'from-teal-500 to-cyan-500' },
  ];

  return (
    <div
      className={cn(`sidebar_main fixed left-0 h-[calc(100vh-60px)] text-gray-200 transition-all duration-500 ease-in-out z-[190] flex items-center justify-center group`, { 'w-[200px]': expanded }, { 'w-[80px]': !expanded })}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <div className="flex flex-col gap-y-12 items-center w-full py-8">
        {navItems.map((item, index) => (
          <div
            key={index}
            className="relative flex items-center w-full cursor-pointer group/item transition-all duration-300"
            onClick={item.action}
            onMouseEnter={() => handleItemHover(index)}
            onMouseLeave={handleItemLeave}
          >
            <div className={cn(`relative flex items-center justify-center w-10 h-10 ml-4 rounded-xl transition-all duration-300`, { 'glass-card transform scale-110': activeItem === index }, { 'hover:glass-card hover:scale-105': activeItem !== index })}>
              {activeItem === index && (
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-20 rounded-xl transition-opacity duration-300`}></div>
              )}
              <FontAwesomeIcon
                icon={item.icon}
                className={cn(`w-5 h-5 transition-all duration-300`, { 'text-brand drop-shadow-lg': activeItem === index }, { 'text-gray-300 group-hover/item:text-brand': activeItem !== index })}
                style={{
                  filter: activeItem === index ? 'drop-shadow(0 0 8px currentColor)' : 'none'
                }}
              />
              {activeItem === index && (
                <>
                  <div className="absolute top-1 right-1 w-1 h-1 bg-white/60 rounded-full twinkle"></div>
                  <div className="absolute bottom-1 left-1 w-0.5 h-0.5 bg-brand/60 rounded-full twinkle" style={{ animationDelay: '0.5s' }}></div>
                </>
              )}
            </div>
            <div className={cn(`absolute left-16 transition-all duration-300`, { 'opacity-100 translate-x-0': expanded }, { 'opacity-0 -translate-x-4': !expanded })}>
              <div className={cn(`px-4 py-2 rounded-lg transition-all duration-300`)}>
                {activeItem === index && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-10 rounded-lg transition-opacity duration-300`}></div>
                )}
                <span className={cn(`whitespace-nowrap text-sm font-medium transition-all duration-300`, { 'text-brand font-semibold': activeItem === index }, { 'text-gray-300 group-hover/item:text-white': activeItem !== index })}>
                  {item.title}
                </span>
              </div>
            </div>
            {expanded && activeItem === index && (
              <div className="absolute left-14 w-2 h-0.5 bg-gradient-to-r from-brand/50 to-transparent rounded-full transition-all duration-300"></div>
            )}
            <div className="absolute inset-0 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-brand/20 to-transparent opacity-0 group-active/item:opacity-100 transition-opacity duration-150 transform scale-0 group-active/item:scale-100 rounded-xl"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Sidebar.propTypes = {
};

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps)(Sidebar);