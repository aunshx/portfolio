import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faUser } from "@fortawesome/free-solid-svg-icons";

import Navbar from "../navbar/Navbar";
import Sidebar from "../navbar/Sidebar";
import Footer from "../layout/Footer";
import Background from "../main/Background";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Cools from "../layout/Cools";

import logo from "../../resources/images/sketLogo.png";

import windowSize from "../../utils/windowSize";

// import imgLogo

const About = ({ sidebar: { hover } }) => {
  const { width, height } = windowSize();

  const [radius, setRadius] = useState(0);

  useEffect(() => {
    switch (true) {
      case 787 < width && width <= 1200:
        return setRadius(250);

      case width > 1200:
        return setRadius(500);

      case width <= 786:
        return setRadius(100);

      default:
        return null;
    }
  }, [width]);

  return (
    <>
      <div className='app'>
        <div className='about-main' style={{ justifyContent: "center" }}>
          <div
            className='title flex_middle'
            data-aos='flip-up'
            data-aos-offset={width < 787 && 30}
          >
            <div style={{ marginRight: "0.5em" }}>
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div>About</div>
          </div>
          <div className='body'>
            <div className='flex_middle'>
              <div className='app text'>
                <div className='title'>
                  <div
                    className='image'
                    data-aos='fade-in'
                    data-aos-offset={width < 787 && 30}
                  >
                    <img src={logo} alt='' />
                  </div>
                </div>
                <div
                  className='para'
                  data-aos='fade-in'
                  data-aos-offset={width < 787 && 30}
                >
                  I’m an engineer, teacher and full stack web developer from
                  India. Ever since venturing into the field of web development
                  I have become smitten with the process of designing,
                  developing and bringing to life a product from scratch.
                </div>
                <div
                  className='para'
                  data-aos='fade-in'
                  data-aos-offset={width < 787 && 30}
                >
                  A highly-motivated individual with a problem solving mindset,
                  I like to solve challenges efficiently. Fan of cycling,
                  cooking and exploring new music on YT :) A tween with a knack
                  of randomly creating new web-apps and working on ambitious
                  projects with like minded people.
                </div>
                <Link to='/contact'>
                  <div
                    className='para-link'
                    data-aos='fade-in'
                    data-aos-offset={width < 787 && 30}
                  >
                    Let's get going!
                  </div>
                </Link>
              </div>
            </div>
            <div className='cloud flex_middle'>
              <Cools radius={radius} />
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
