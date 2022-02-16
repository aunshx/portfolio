import React, { useCallback, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import useSound from "use-sound";

import BackgroundLarge from "./components/main/BackgroundLarge";
import BackgroundMedium from "./components/main/BackgroundMedium";
import BackgroundSmall from "./components/main/BackgroundSmall";
import BackgroundTiny from "./components/main/BackgroundTiny";

import windowSize from "./utils/windowSize";

import Main from './components/main/Main';
import Projects from './components/projects/Projects';
import Articles from './components/articles/Articles';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import About from './components/about/About';

import './App.css'

import bellRing from "./resources/sounds/bellRing.mp3"

const Home = ({
  Navbar,
  Sidebar,
  // Redux State
  sidebar: { hover },
  settings: { sound }
}) => {

  const { width } = windowSize()

  const [showContact, setShowContact] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const me = useRef();
  const goContact = useRef();

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

     const [playOn, { stop }] = useSound(bellRing, {
       volume: 1,
     });

    const onHoverMobile = () => {
      if(sound) {
        playOn()
      }
    }

  return (
    <div className='app '>
      {Navbar}
      {Sidebar}
      {width > 1280 && <BackgroundLarge />}
      {900 < width && width <= 1280 && <BackgroundMedium />}
      {600 < width && width <= 900 && <BackgroundSmall />}
      {width <= 600 && <BackgroundTiny />}
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
            <div className='contact-button' onMouseEnter={onHoverMobile}>
              <FontAwesomeIcon
                icon={faMobileAlt}
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
  settings: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  sidebar: state.sidebar,
  settings: state.settings,
});

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(Home);

