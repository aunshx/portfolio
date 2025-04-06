import React, { useCallback, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import useSound from "use-sound";
import { Tooltip } from "@mui/material";
import useWindow from "react-window-size-simple";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import ArrowCircleDownOutlinedIcon from "@mui/icons-material/ArrowCircleDownOutlined";

import bellRing from "./resources/sounds/bellRing.mp3";

import Main from './components/app/main';
import Work from "./components/app/work/Work";
import Projects from './components/app/projects/Projects';
import Research from './components/app/research/Research';
import Articles from './components/app/articles/Articles';
import Skills from './components/app/skills/Skills';
import Navbar from './components/shared/navbar/Navbar';
import Sidebar from './components/shared/navbar/Sidebar';
import SpeedDial from "./components/shared/layout/SpeedDial";

import Education from './components/app/education/Education';
import Container from './components/shared/layout/Container';
import ParticleBackground from './components/shared/layout/ParticleBG';

import './App.css'
import Footer from './components/shared/layout/Footer';

const Home = ({
  // Redux State
  sidebar: { hover },
  settings: { sound, backgroundAnimation },
}) => {

  const { width } = useWindow();

  const [showContact, setShowContact] = useState(false);
  const [shadowToggle, setShadowToggle] = useState(false)

  const shadow = useRef()
  const goHome = useRef();
  const goAbout = useRef();
  const goWork = useRef();
  const goProjects = useRef();
  const goResearch = useRef();
  const goArticles = useRef();
  const goSkills = useRef();
  const goFooter = useRef();
  const goNpm = useRef();
  const goEducation = useRef();

  const scrollToTargetPos = (rect) => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const targetPosition = scrollTop + rect.top - 120;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  };

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
    if (goFooter.current) {
      goFooter.current.disconnect();
    }
    const options = {
      root: null,
      threshold: 0,
    };
    goFooter.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setShowContact(false);
      } else {
        setShowContact(true);
      }
    }, options);
    if (node) {
      goFooter.current.observe(node);
    }
  }, []);

  const goToHome = () => {
    if (goHome.current) scrollToTargetPos(goHome.current.getBoundingClientRect());
  };

  const goToAbout = () => {
    if (goAbout.current) scrollToTargetPos(goAbout.current.getBoundingClientRect());
  };

  const goToEducation = () => {
    if (goEducation.current) scrollToTargetPos(goEducation.current.getBoundingClientRect());
  };

  const goToWork = () => {
    if (goWork.current) scrollToTargetPos(goWork.current.getBoundingClientRect());
  };

  const goToProjects = () => {
    if (goProjects.current) scrollToTargetPos(goProjects.current.getBoundingClientRect());
  };

  const goToResearch = () => {
    if (goResearch.current) scrollToTargetPos(goResearch.current.getBoundingClientRect());
  };

  const goToArticles = () => {
    if (goArticles.current) scrollToTargetPos(goArticles.current.getBoundingClientRect());
  };

  const goToSkills = () => {
    if (goSkills.current) scrollToTargetPos(goSkills.current.getBoundingClientRect());
  };

  const goToFooter = () => {
    if (goFooter.current) {
      goFooter.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
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
    <div className='h-100v w-full'>
      <Navbar
        shadowToggle={shadowToggle}
        goToHome={goToHome}
        goToAbout={goToAbout}
        goToWork={goToWork}
        goToProjects={goToProjects}
        goToResearch={goToResearch}
        goToSkills={goToSkills}
        goToArticles={goToArticles}
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
        goToEducation={goToEducation}
      />

      {backgroundAnimation && <ParticleBackground />}

      <div ref={shadowElement} />
      <div ref={refElement} />
      <div className="w-full h-full flex flex-col items-center justify-center" style={{ border: '1px solid green' }} >
        <Container innerRef={goHome} movement={'fade-down'} customMargin>
          <Main goToFunc={[goToProjects, goToWork]} />
        </Container>
        <Container innerRef={goWork} movement={'fade-up'}>
          <Work />
        </Container>
        <Container innerRef={goSkills} movement={'fade-left'}>
          <Skills />
        </Container>
        <Container innerRef={goProjects} movement={'fade-up'}>
          <Projects />
        </Container>
        <Container innerRef={goResearch} movement={'fade-down'}>
          <Research />
        </Container>
        <Container innerRef={goEducation} movement={'fade-right'}>
          <Education />
        </Container>
        <Container innerRef={goArticles} movement={'fade-up'}>
          <Articles />
        </Container>
        <Container innerRef={goFooter} movement={''}>
          <Footer />
        </Container>

        {width > 1280 && (
          <>
            {showContact && (
              <>
                <div onClick={goToFooter}>
                  <Tooltip title='Page Down' placement='left' enterDelay={400}>
                    <div className='speed-dial cursor-pointer fixed bottom-10 right-8 text-gray-500 hover:text-brand' onMouseEnter={onHoverMobile}>
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
                <div onClick={goToHome}>
                  <Tooltip title='Page Up' placement='left' enterDelay={400}>
                    <div className='speed-dial cursor-pointer fixed bottom-10 right-10 text-gray-500 hover:text-brand' onMouseEnter={onHoverMobile}>
                      <ArrowCircleUpOutlinedIcon
                        className='go-up'
                        style={{ fontSize: 40 }}
                      />
                    </div>
                  </Tooltip>
                </div>
              </>
            )}
            <div className='fixed bottom-36 right-9'>
              <SpeedDial />
            </div>
          </>
        )}
      </div>
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

const mapActionsToProps = {
};

export default connect(mapStateToProps, mapActionsToProps)(Home);

