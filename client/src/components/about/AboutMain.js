import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faUser } from '@fortawesome/free-solid-svg-icons';
import useWindow from "react-window-size-simple";

import Navbar from '../navbar/Navbar';
import Footer from '../layout/Footer';
import BackgroundLarge from '../main/BackgroundLarge';
import BackgroundMedium from '../main/BackgroundMedium';
import BackgroundSmall from '../main/BackgroundSmall';
import BackgroundTiny from '../main/BackgroundTiny';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Cools from '../layout/Cools';

import logo from '../../resources/images/sketLogo.png'
import MetaTags from '../layout/MetaTags';

// import imgLogo 

const AboutMain = ({ Sidebar }) => {

  // const Sidebaro = sidebar

  const { width, height } = useWindow()

  const[radius, setRadius] = useState(0)

  useEffect(() => {
    switch(true){

      case 787 < width && width <= 1200:
          return setRadius(250)

      case width > 1200:
          return setRadius(500)

      case width <= 786:
          return setRadius(100)

      default:
        return null
    }
  },[width])

  return (
    <>
      <MetaTags
        title={
          <title>
            About - Aunsh &middot; Full Stack Developer &middot; Portfolio
          </title>
        }
      />
      <Navbar />
      {Sidebar}
      {width > 1280 && <BackgroundLarge />}
      {900 < width && width <= 1280 && <BackgroundMedium />}
      {600 < width && width <= 900 && <BackgroundSmall />}
      {width <= 600 && <BackgroundTiny />}
      <div className='flex_middle'>
        <div className='about-main app' style={{ justifyContent: "center" }}>
          <div className='title flex_middle' data-aos='flip-up'>
            <div style={{ marginRight: "0.5em" }}>
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div>About</div>
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
                  I???m an engineer, teacher and full stack web developer from
                  India. Ever since venturing into the field of web development
                  I have become smitten with the process of designing,
                  developing and bringing to life a product from scratch.
                </div>
                <div className='para'>
                  A highly-motivated individual with a problem solving mindset,
                  I like to solve challenges efficiently. Fan of cycling,
                  cooking and exploring new music on YT :) A tween with a knack
                  of randomly creating new web-apps and working on ambitious
                  projects with like minded people.
                </div>
                <Link to='/contact'>
                  <div className='para-link'>Let's get going!</div>
                </Link>
              </div>
            </div>
            <div className='cloud flex_middle'>
              <Cools radius={200} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


AboutMain.propTypes = {
  sidebar: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  sidebar: state.sidebar,
});

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(AboutMain);
