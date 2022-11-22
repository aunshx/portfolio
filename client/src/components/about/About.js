import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSchool, faLanguage } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

import logo from "../../resources/images/about/profile.png"

const About = ({ innerRef, sidebar: { hover } }) => {
  return (
    <>
      <div className='app' ref={innerRef}>
        <div className='about-main' style={{ justifyContent: "center" }}>
          <div className='title flex_middle'>
            <div style={{ marginRight: "0.5em" }}>
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div>C'est Moi</div>
          </div>
          <div className='body'>
            <div className='flex_middle'>
              <div className='app text'>
                <div className='title'>
                  <div className='image'>
                    <img src={logo} alt='' />
                  </div>
                </div>
                <div className='para'>
                  I'm
                  <div>an Engineer</div>
                  <div>a Teacher</div>
                  <div>a Writer</div>
                  <div>Also, a cyclist</div>
                </div>
              </div>
            </div>
            <div className='text flex_middle'>
              <div className='qualifications'>
                <div className='app' style={{ margin: "0.5em 0 1.5em 0" }}>
                  <div style={{ margin: "0 0 0.2em 0" }}>
                    <FontAwesomeIcon icon={faSchool} style={{ fontSize: 22 }} />
                  </div>
                  <div>B.E. E&TC, University of Pune, 2020</div>
                </div>
                <div className='app' style={{ margin: "0.5em 0 1.5em 0" }}>
                  <div style={{ margin: "0 0 0.2em 0" }}>
                    <FontAwesomeIcon
                      icon={faLanguage}
                      style={{ fontSize: 22 }}
                    />
                  </div>
                  <div>English, Hindi, Marathi and French*</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

About.propTypes = {
  sidebar: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  sidebar: state.sidebar,
});

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(About);
