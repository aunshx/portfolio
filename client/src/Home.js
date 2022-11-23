import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import useSound from "use-sound";
import useWindow from "react-window-size-simple";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

import BackgroundLarge from "./components/main/BackgroundLarge";
import BackgroundMedium from "./components/main/BackgroundMedium";
import BackgroundSmall from "./components/main/BackgroundSmall";
import BackgroundTiny from "./components/main/BackgroundTiny";

import bellRing from "./resources/sounds/bellRing.mp3";
import { captureIpNow } from "./redux/actions/metrics";

import Main from './components/main/Main';
import About from "./components/about/About";
import Work from "./components/work/Work";
import Projects from './components/projects/Projects';
import Research from './components/research/Research';
import Articles from './components/articles/Articles';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/navbar/Sidebar';
import SpeedDial from "./components/layout/SpeedDial";

import './App.css'
import { Tooltip } from '@mui/material';

const Home = ({
  // Redux State
  sidebar: { hover },
  settings: { sound },

  // Redux Actions
  captureIpNow,
}) => {
  const { width } = useWindow();

  const [showContact, setShowContact] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const me = useRef();
  const goHome = useRef();
  const goAbout = useRef();
  const goWork = useRef();
  const goProjects = useRef();
  const goResearch = useRef();
  const goArticles = useRef();
  const goSkills = useRef();
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

  useEffect(() => {
    // Capture Ip
    captureIpNow();
  }, []);

  const goToHome = () => {
    if (goHome.current) {
      goHome.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goToAbout = () => {
    if (goAbout.current) {
      goAbout.current.scrollIntoView({ behavior: "smooth" });
    }
    console.log('About')
  };

  const goToWork = () => {
    if (goWork.current) {
      goWork.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goToProjects = () => {
    if (goProjects.current) {
      goProjects.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  const goToResearch = () => {
    if (goResearch.current) {
      goResearch.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goToArticles = () => {
    if (goArticles.current) {
      goArticles.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goToContact = () => {
    if (goContact.current) {
      goContact.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goToSkills = () => {
    if (goSkills.current) {
      goSkills.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [playOn, { stop }] = useSound(bellRing, {
    volume: 0.2,
  });

  const onHoverMobile = () => {
    if (sound) {
      playOn();
    }
  };

  return (
    <div className='app '>
      <Navbar />
      <Sidebar
        hover={hover}
        goToHome={goToHome}
        goToAbout={goToAbout}
        goToWork={goToWork}
        goToProjects={goToProjects}
        goToResearch={goToResearch}
        goToSkills={goToSkills}
        goToArticles={goToArticles}
        goToContact={goToContact}
      />
      {/* {width > 1280 && <BackgroundLarge />}
      {900 < width && width <= 1280 && <BackgroundMedium />}
      {600 < width && width <= 900 && <BackgroundSmall />}
      {width <= 600 && <BackgroundTiny />} */}
      <Main innerRef={goHome} />
      <About innerRef={goAbout} />
      <Work innerRef={goWork} />
      <Projects innerRef={goProjects} />
      <Research innerRef={goResearch} />
      <Articles innerRef={goArticles} />
      <Skills innerRef={goSkills} />
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
            <Tooltip title='Page Down' placement='left' enterDelay={400}>
              <div className='contact-button' onMouseEnter={onHoverMobile}>
                <FontAwesomeIcon
                  icon={faArrowDown}
                  className='go-up'
                  style={{ fontSize: 20 }}
                />
              </div>
            </Tooltip>
          </div>
        </>
      )}
      {!showContact && (
        <>
          <div className='appear_contact' onClick={goToHome}>
            <Tooltip title='Page Up' placement='left' enterDelay={400}>
              <div className='contact-button' onMouseEnter={onHoverMobile}>
                <FontAwesomeIcon
                  icon={faArrowUp}
                  className='go-up'
                  style={{ fontSize: 20 }}
                />
              </div>
            </Tooltip>
          </div>
        </>
      )}
      <div className='speed_dial-button'>
        <SpeedDial />
      </div>
    </div>
  );
};

Home.propTypes = {
  sidebar: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  captureIpNow: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  sidebar: state.sidebar,
  settings: state.settings,
});

const mapActionsToProps = {
  captureIpNow,
};

export default connect(mapStateToProps, mapActionsToProps)(Home);

