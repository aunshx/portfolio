import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import useSound from "use-sound";
import { Tooltip } from "@mui/material";
import useWindow from "react-window-size-simple";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import ArrowCircleDownOutlinedIcon from "@mui/icons-material/ArrowCircleDownOutlined";

import BackgroundLarge from "./components/client/main/BackgroundLarge";
import BackgroundMedium from "./components/client/main/BackgroundMedium";
import BackgroundSmall from "./components/client/main/BackgroundSmall";
import BackgroundTiny from "./components/client/main/BackgroundTiny";

import bellRing from "./resources/sounds/bellRing.mp3";

import Main from './components/client/main/Main';
import About from "./components/client/about/About";
import Work from "./components/client/work/Work";
import Projects from './components/client/projects/Projects';
import Research from './components/client/research/Research';
import Articles from './components/client/articles/Articles';
import Skills from './components/client/skills/Skills';
import Contact from './components/client/contact/Contact';
import Navbar from './components/common/navbar/Navbar';
import Sidebar from './components/common/navbar/Sidebar';
import SpeedDial from "./components/common/layout/dials/SpeedDial";
// import GotuuDial from "./components/common/layout/dials/GotuuDial";
import Alerts from './components/common/layout/Alerts';
import Npm from "./components/client/npm-packages/Npm";

import './App.css'
import Education from './components/client/education/Education';

const Home = ({
  // Redux State
  sidebar: { hover },
  settings: { sound, backgroundAnimation },
}) => {

  const { width } = useWindow();

  const [showContact, setShowContact] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [shadowToggle, setShadowToggle] = useState(false)

  const shadow = useRef()
  const goHome = useRef();
  const goAbout = useRef();
  const goWork = useRef();
  const goProjects = useRef();
  const goResearch = useRef();
  const goArticles = useRef();
  const goSkills = useRef();
  const goContact = useRef();
  const goNpm = useRef();
  const goEducation = useRef();

  const shadowElement = useCallback((node) => {
    if (shadow.current) {
      shadow.current.disconnect();
    }
    const options = {
      root: null,
      threshold: 0,
    };
    shadow.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setShadowToggle(false);
      } else {
        setShadowToggle(true);
      }
    }, options);
    if (node) {
      shadow.current.observe(node);
    }
  }, []);

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

  const goToHome = () => {
    if (goHome.current) {
      goHome.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
  };

  const goToAbout = () => {
    if (goAbout.current) {
      goAbout.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
  };

  const goToEducation = () => {
    if (goEducation.current) {
      goEducation.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
  };

  const goToWork = () => {
    if (goWork.current) {
      goWork.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
  };

  const goToProjects = () => {
    if (goProjects.current) {
      goProjects.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  const goToResearch = () => {
    if (goResearch.current) {
      goResearch.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
  };

  const goToArticles = () => {
    if (goArticles.current) {
      goArticles.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
  };

  const goToContact = () => {
    if (goContact.current) {
      goContact.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  const goToSkills = () => {
    if (goSkills.current) {
      goSkills.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
  };

  const goToNpm = () => {
    if (goNpm.current) {
      goNpm.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
  };

  const [playOn] = useSound(bellRing, {
    volume: 0.2,
  });

  const onHoverMobile = () => {
    if (sound) {
      playOn();
    }
  };

  return (
    <div className='app'>
      <Navbar
        shadowToggle={shadowToggle}
        goToHome={goToHome}
        goToAbout={goToAbout}
        goToWork={goToWork}
        goToProjects={goToProjects}
        goToResearch={goToResearch}
        goToSkills={goToSkills}
        goToArticles={goToArticles}
        goToContact={goToContact}
        goToNpm={goToNpm}
        goToEducation={goToEducation}
      />
      <Sidebar
        shadowToggle={shadowToggle}
        hover={hover}
        goToHome={goToHome}
        goToAbout={goToAbout}
        goToWork={goToWork}
        goToProjects={goToProjects}
        goToResearch={goToResearch}
        goToSkills={goToSkills}
        goToArticles={goToArticles}
        goToContact={goToContact}
        goToNpm={goToNpm}
        goToEducation={goToEducation}
      />
      {backgroundAnimation && (
        <>
          {width > 1280 && <BackgroundLarge />}
          {900 < width && width <= 1280 && <BackgroundMedium />}
          {600 < width && width <= 900 && <BackgroundSmall />}
          {width <= 600 && <BackgroundTiny />}
        </>
      )}
      <div ref={shadowElement} />
      <div ref={goHome} />
      <Main />
      <About innerRef={goAbout} />
      <Education innerRef={goEducation} />
      <Work innerRef={goWork} />
      {/* <Projects innerRef={goProjects} /> */}
      {/* <Research innerRef={goResearch} /> */}
      {/* <Npm innerRef={goNpm} /> */}
      {/* <Articles innerRef={goArticles} /> */}
      <Skills innerRef={goSkills} />
      <Contact
        refSec={refElement}
        show={showDialog}
        changeDialog={setShowDialog}
        innerRef={goContact}
      />
      {width > 1029 && (
        <>
          {showContact && (
            <>
              <div className='appear_contact' onClick={goToContact}>
                <Tooltip title='Page Down' placement='left' enterDelay={400}>
                  <div className='contact-button' onMouseEnter={onHoverMobile}>
                    <ArrowCircleDownOutlinedIcon
                      className='go-up'
                      style={{ fontSize: 40 }}
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
                    <ArrowCircleUpOutlinedIcon
                      className='go-up'
                      style={{ fontSize: 40 }}
                    />
                  </div>
                </Tooltip>
              </div>
            </>
          )}
          <div className='speed_dial-button'>
            <SpeedDial />
          </div>
          {/* // ? Add it again once gotuu is active and re-branded */}
          {/* <div className='gotuu_dial-button'>
            <GotuuDial />
          </div> */}
        </>
      )}
      <Alerts />
    </div>
  );
};

Home.propTypes = {
  sidebar: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  // captureIpNow: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  sidebar: state.sidebar,
  settings: state.settings,
});

const mapActionsToProps = {
  // captureIpNow,
};

export default connect(mapStateToProps, mapActionsToProps)(Home);

