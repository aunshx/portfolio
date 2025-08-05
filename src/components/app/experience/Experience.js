import { faBriefcase, faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { EXP_LIST } from "../../../resources/constants";
import Title from "../../shared/layout/Title";

export const ExpandButton = ({ isCollapsed, onClick }) => {
  return (
    <div
      onClick={onClick}
      type="button"
      className="glass-button rounded-lg text-sm px-4 py-3 text-center text-gray-400 hover:text-brand cursor-pointer flex items-center justify-center gap-x-3 w-fit transition-all duration-300 group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>

      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 liquid-border"></div>

      <div className="relative flex items-center gap-x-3">
        <FontAwesomeIcon
          icon={isCollapsed ? faCaretUp : faCaretDown}
          style={{ fontSize: 18 }}
          className="group-hover:scale-110 group-hover:text-brand transition-all duration-300"
        />
        <div className="group-hover:font-semibold transition-all duration-300">
          {isCollapsed ? 'Show Less' : 'Show More'}
        </div>
      </div>

      <div className="absolute top-1 right-2 w-1 h-1 bg-white/30 rounded-full twinkle opacity-0 group-hover:opacity-100"></div>
    </div>
  )
};

const ExperienceItem = ({ name, position, duration, link, description, tech, index }) => {

  return (
    <a href={link} target="_blank" rel="noreferrer nofollow">
      <li
        className="glass-card group flex flex-col border-none transition-all duration-500 p-6 rounded-xl cursor-pointer relative overflow-hidden hover:scale-[1.02] my-8 md:my-16"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/3 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
        <div className="relative">
          <div className="flex items-center text-lg font-semibold text-white lg:flex-col lg:gap-x-0 lg:items-start mb-2">
            <div className="group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
              {position}
            </div>
            <div className="mx-2 lg:hidden text-gray-500">&#8226;</div>
            <div className="text-brand cursor-pointer hover:text-cyan-400 transition-colors duration-300 font-medium">
              {name}
            </div>
          </div>
          <div className="flex items-stretch justify-start gap-2 mt-1 text-gray-200 text-sm md:flex-col md:items-start mb-3">
            {(index === 0 || index === 2) && (
              <>
                <div className="glass-button px-3 py-1 rounded-lg text-xs group-hover:text-white transition-colors duration-300">
                  Graduate Student Researcher
                </div>
                <div className="md:hidden text-gray-500">&#8226;</div>
              </>
            )}
            <time className="glass-button px-3 py-1 rounded-lg text-xs group-hover:text-gray-200 transition-colors duration-300">
              {duration}
            </time>
          </div>

          <p className="mb-6 text-sm font-normal text-gray-400 lg:mt-2 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
            {description}
          </p>

          <div className="flex flex-wrap w-full gap-3">
            {tech !== undefined && tech.map((val, techIndex) => (
              <div
                className="glass-button text-gray-400 focus:outline-none text-xs rounded-full px-3 py-1.5 min-w-16 text-center hover:text-white hover:bg-white/10 transition-all duration-300 group/tag relative overflow-hidden"
                key={techIndex}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover/tag:opacity-100 transition-opacity duration-300 rounded-full"></div>
                <span className="relative font-medium">{val}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute top-4 right-4 w-2 h-2 bg-white/20 rounded-full twinkle opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-brand/40 rounded-full twinkle opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-8 w-1 h-1 bg-purple-400/40 rounded-full twinkle opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-brand/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-xl"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-brand/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full blur-sm"></div>
      </li>
    </a>
  );
};

const Experience = () => {
  const [currentCompanies, setCurrentCompanies] = useState(EXP_LIST);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const changeCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };

  useEffect(() => {
    if (isCollapsed) {
      setCurrentCompanies(EXP_LIST);
    } else {
      setCurrentCompanies(EXP_LIST.slice(0, 3));
    }
  }, [isCollapsed]);

  return (
    <div className="w-full">
      <div className='grid grid-cols-[20%_70%] w-full lg:grid-cols-1 items-start'>
        <Title icon={<FontAwesomeIcon icon={faBriefcase} />} title={'Experience'} />
        <div className="relative ">
          <ol className="relative border-s-2 border-gray-600 hover:border-brand/50 lg:border-none transition-all duration-500 pl-6 md:pl-0">
            {currentCompanies.length > 0 && currentCompanies.map((company, index) => (
              <ExperienceItem key={index} {...company} index={index} />
            ))}
          </ol>
        </div>
      </div>

      <div className="flex items-center justify-center mt-8">
        <ExpandButton isCollapsed={isCollapsed} onClick={changeCollapse} />
      </div>
    </div>
  );
};

Experience.propTypes = {
  settings: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  settings: state.settings,
});

const mapStateToActions = {};

export default connect(mapStateToProps, mapStateToActions)(Experience);