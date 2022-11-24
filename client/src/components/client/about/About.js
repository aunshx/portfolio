import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Title from "../../common/layout/Title";

import aunshProfilePic from '../../../resources/images/about/profile2.png'

const About = ({ innerRef }) => {
  return (
    <>
      <div className='app' ref={innerRef}>
        <div className='about' style={{ justifyContent: "center" }}>
          <Title icon={<FontAwesomeIcon icon={faUser} />} title={"About Me"} />
          <div className='body app' style={{ alignItems: "flex-start" }}>
            <div className='details'>
              <div>
                Namaste! My name is Aunsh and I like gaining new experiences and
                creating stuff. In my 24 years on this planet, I've been a
                national-level cyclist, engineering student, researcher, high
                school teacher, and now a software developer.
              </div>
              <div style={{ marginTop: "2em" }}>
                I believe that technology should be as ergonomic as it is complex. Currently, I work as a software developer at a nascent
                company called Dr SB's.
              </div>
              <div style={{ marginTop: "2em" }}>
                In my free time, I enjoy writing while sipping on a cappuccino
                at my regular cafe.
              </div>
            </div>
            <div className='image flex_left'>
              <img src={aunshProfilePic} alt='Aunsh Profile Pic' />
              <div className='border' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

About.propTypes = {}

export default About