import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import useWindow from "react-window-size-simple";

import { companies } from './data/data'
import CompanyDetails from "./tools/CompanyDetails";
import VerticalSlider from "./tools/VerticalSlider";

import Title from "../../shared/layout/Title";
import HorizontalSlider from "./tools/HorizontalSlider";

export const ExpandButton = ({ isCollapsed, onClick }) => {
  return (
    <div onClick={onClick} type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-sm px-4 py-2 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:border-brand dark:hover:text-brand dark:hover:bg-none dark:focus:ring-gray-800 cursor-pointer flex items-center justify-center gap-x-2 w-fit">
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


const Work = ({
  innerRef,
  // Redux State
  settings: { displayMode },
}) => {
  const { width } = useWindow()

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCompanies, setCurrentCompanies] = useState(companies);
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [glowOn, setGlowOn] = useState(false)

  const changeCollapse = () => {
    setIsCollapsed((prev) => !prev);
  }

  const changeCurrentIndex = (index) => {
    setGlowOn(true)
    setCurrentIndex(index)
    setTimeout(() => setGlowOn(false), 200);
  }

  useEffect(() => {
    if (isCollapsed) {
      setCurrentCompanies(companies)
    } else setCurrentCompanies(companies.slice(0, 3))
  }, [isCollapsed])

  return (
    <div className='flex flex-col w-full'>
      <Title
        icon={<FontAwesomeIcon icon={faBriefcase} />}
        title={"Experience"}
      />
      {currentCompanies.length > 0 && currentCompanies.map(({ name, type, work, position, duration, link }, index) => (
        <div className={`grid grid-cols-[30%_70%] gap-y-8 w-full lg:grid-cols-1 items-start text-gray-300 my-4`} key={index}>
          <div className="flex flex-col px-4">
            <div className="text-md">
              {position}
            </div>
            <a href={link} target="_blank" rel="noreferrer nofollow" className="text-brand cursor-pointer">{`@ ${name}`}</a>
            <div className="text-gray-400 text-sm mt-1">
              {duration}
            </div>
          </div>
          <div className="flex flex-col gap-y-4 px-4">
            <ul>
              {work.length > 0 && work.map((val, index) => (
                <li key={index} className="break-normal text-wrap text-sm list-disc ml-5 my-1">
                  {val}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
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
