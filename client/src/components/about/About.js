import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const About = ({ innerRef }) => {
  return (
    <>
      <div className='app' ref={innerRef}>
        <div className='about' style={{ justifyContent: "center" }}>
          <div className='title flex_middle'>
            <div style={{ marginRight: "0.5em" }}>
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div>C'est Moi</div>
          </div>
        </div>
      </div>
    </>
  );
};

About.propTypes = {}

export default About