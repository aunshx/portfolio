import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Title from "../../common/layout/Title";

const About = ({ innerRef }) => {
  return (
    <>
      <div className='app' ref={innerRef}>
        <div className='about' style={{ justifyContent: "center" }}>
          <Title icon={<FontAwesomeIcon icon={faUser} />} title={'About Me'} />
          <div className='body'>
            <div className='details'>l</div>
            <div className='image'>l</div>
          </div>
        </div>
      </div>
    </>
  );
};

About.propTypes = {}

export default About