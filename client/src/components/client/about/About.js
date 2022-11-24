import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Title from "../../common/layout/Title";

import aunshProfilePic from '../../../resources/images/about/profile3.jpg'

const About = ({ innerRef }) => {
  return (
    <>
      <div className='app' ref={innerRef}>
        <div className='about' style={{ justifyContent: "center" }}>
          <Title icon={<FontAwesomeIcon icon={faUser} />} title={"About Me"} />
          <div className='body app' style={{ alignItems: 'flex-start' }} >
            <div className='details'>
              Hi! I'm Aunsh. 
              Also the man drinking water above is me. I just cut my hair and had a shave :)
            </div>
            <div
              className='image flex_left'
            >
              <img src={aunshProfilePic} alt='Aunsh Profile Pic' />
              <div className="border" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

About.propTypes = {}

export default About