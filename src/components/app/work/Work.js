import { faBriefcase, faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { EXP_LIST } from "../../../resources/constants";
import Title from "../../shared/layout/Title";

export const ExpandButton = ({ isCollapsed, onClick }) => {
  return (
    <div onClick={onClick} type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-sm px-4 py-2 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:border-brand dark:hover:text-brand dark:hover:bg-none dark:focus:ring-gray-800 cursor-pointer flex items-center justify-center gap-x-2 w-fit">
      <FontAwesomeIcon
        icon={isCollapsed ? faCaretUp : faCaretDown}
        style={{
          fontSize: 20,
        }}
      />
      <div>
        {isCollapsed ? 'Show Less' : 'Show More'}
      </div>
    </div>
  )
};


const Work = () => {

  const [currentCompanies, setCurrentCompanies] = useState(EXP_LIST);
  const [isCollapsed, setIsCollapsed] = useState(false)

  const changeCollapse = () => {
    setIsCollapsed((prev) => !prev);
  }

  useEffect(() => {
    if (isCollapsed) {
      setCurrentCompanies(EXP_LIST)
    } else setCurrentCompanies(EXP_LIST.slice(0, 3))
  }, [isCollapsed])

  return (
    <div className="w-full lg:px-4 lg:max-w-90per">
      <div className='grid grid-cols-[20%_80%] gap-5 w-full lg:grid-cols-1 items-center'>
        <Title
          icon={<FontAwesomeIcon icon={faBriefcase} />}
          title={"Experience"}
        />

        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {currentCompanies.length > 0 && currentCompanies.map(({ name, position, duration, link, description, tech }, index) => (
            <li className="mb-10 ms-6 flex flex-col" key={index}>
              <span className="absolute flex items-center justify-center w-4 h-4 bg-gray-500 rounded-full -start-2">
              </span>
              <div className="flex items-center mb-1 text-md font-semibold text-gray-900 dark:text-white lg:flex-col lg:gap-x-0 lg:items-start">
              <div>
                  {position}
              </div>
              <div className="mx-1 lg:hidden">&#8226;</div> <a href={link} target="_blank" rel="noreferrer nofollow" className="text-brand cursor-pointer">{`${name}`}</a>
              </div>
              <div className="flex items-center justify-start gap-1 mb-1 text-gray-500 text-sm md:flex-col md:items-start">
                {(index === 0 || index === 1) && (
                  <>
                    <div>
                      Graduate Student Researcher
                    </div>
                    <div className="md:hidden">&#8226;</div>
                  </>
                )}
                <time className="block font-normal leading-none">{duration}</time>
              </div>

              <p className="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400 lg:mt-1">{description}</p>
              <div className="flex flex-wrap w-full gap-2">
                {tech !== undefined && tech.map((val, index) => (
                  <div className="text-gray-500 bg-gray-800  focus:outline-none font-xs rounded-xl text-sm px-2 py-1 min-w-16 text-center" key={index}>{val}</div>
                ))}
              </div>

            </li>
          ))}
        </ol>
      </div>
      <div className="flex items-center justify-center mt-2">
        <ExpandButton isCollapsed={isCollapsed} onClick={changeCollapse} />
      </div>
    </div>
  );
};

Work.propTypes = {
  settings: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  settings: state.settings,
});

const mapStateToActions = {};

export default connect(mapStateToProps, mapStateToActions)(Work);
