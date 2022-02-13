import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import Navbar from '../navbar/Navbar';
import Sidebar from '../navbar/Sidebar';
import Footer from '../layout/Footer';
import Background from '../main/Background';

import body from '../../resources/images/onlyBodyedit.png'
import body1 from '../../resources/images/onlyBody2.png'
import body2 from '../../resources/images/onlyBody3.png'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const AboutMain = ({ sidebar: { hover } }) => {
  return (
    <>
      <Navbar />
      <Sidebar hover={hover} />
      <Background />
      <div className='flex_middle'>
        <div className='about-main'>
          <div className='title app' data-aos='flip-up'>
            <div style={{ marginRight: "0.5em" }}>
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div>This is me.</div>
          </div>
          <div className='body'>
            <div className='app text'>
              <div className='para'>
                I’m an engineer, teacher and full stack web developer from
                India. Ever since venturing into the field of web development I
                have become smitten with the process of designing, developing
                and bringing to life a product from scratch.
              </div>
              <div className='para'>
                A highly-motivated individual with a problem solving mindset, I
                like to solve challenges efficiently. Fan of cycling, cooking
                and exploring new music on YT :) A tween with a knack of
                randomly creating new web-apps and working on ambitious projects
                with like minded people.
              </div>
              <Link to='/contact'>
                <div className='para-link'>Let's get going!</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: "fixed", bottom: "0", right: "45%" }}>
        <Footer />
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
