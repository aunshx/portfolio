import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import Popover from "@mui/material/Popover";

import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import Sidebar from './components/navbar/Sidebar';
import Footer from './components/layout/Footer'
import Projects from './components/projects/Projects';
import Articles from './components/articles/Articles';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrow, faUp, faChevronCircleUp, faCircle, faMobileAlt, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import About from './components/about/About';

import './App.css'


const Home = ({
  // Redux State
  sidebar: { hover },
}) => {
  const [showContact, setShowContact] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const me = useRef();
  const goContact = useRef();
  const goNavbar  = useRef()

  const refElement = useCallback((node) => {
    if (goContact.current) {
      goContact.current.disconnect();
    }
    const options = {
      root: null,
      threshold: 0,
    };
    goContact.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setShowContact(false);
      } else {
        setShowContact(true);
      }
    }, options);
    if (node) {
      goContact.current.observe(node);
    }
  }, []);

  const refElement2 = useCallback((node) => {
    if (me.current) {
      me.current.disconnect();
    }
    const options = {
      root: null,
      threshold: 0.4,
    };
    me.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setShowDialog(true);
      } else {
        setShowDialog(false);
      }
    }, options);
    if (node) {
      me.current.observe(node);
    }
  }, []);

   const goToContact = () => {
     if(goContact.current){
       goContact.current.scrollIntoView({ behavior: "smooth" })
     }
   };

   const goToNavbar = () => {
     if(goNavbar.current){
       goNavbar.current.scrollIntoView({ behavior: "smooth" })
     }
   };

  return (
    <div className='app '>
      <Navbar innerRef={goNavbar} />
      <Sidebar hover={hover} />
      <Main />
      <About />
      <Projects />
      <Articles />
      <Skills />
      <Contact
        reference={refElement2}
        refSec={refElement}
        show={showDialog}
        changeDialog={setShowDialog}
        innerRef={goContact}
      />
      {showContact && (
        <>
          <div className='appear_contact' onClick={goToContact}>
            <div className='contact-button'>
              <FontAwesomeIcon
                icon={faMobileAlt}
                className='go-up'
                style={{ fontSize: 23 }}
              />
            </div>
          </div>
        </>
      )}
      {!showContact && (
        <>
          <div className='appear_contact'>
            <div className='contact-button' onClick={goToNavbar}>
              <FontAwesomeIcon
                icon={faArrowUp}
                className='go-up'
                style={{ fontSize: 23 }}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

Home.propTypes = {
  sidebar: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  sidebar: state.sidebar,
});

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(Home);

