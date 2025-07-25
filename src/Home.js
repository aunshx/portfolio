import PropTypes from 'prop-types';
import React, { useCallback, useRef, useState } from 'react';
import { connect } from 'react-redux';
import useSound from "use-sound";

import bellRing from "./resources/sounds/bellRing.mp3";

import Articles from './components/app/blog/Blog';
import Main from './components/app/main';
import Work from './components/app/work/Work';
import Research from './components/app/research/Research';
import Skills from './components/app/skills/Skills';
import Experience from "./components/app/experience/Experience";
import Navbar from './components/shared/navbar/Navbar';
import Sidebar from './components/shared/navbar/Sidebar';

import Education from './components/app/education/Education';
import Container from './components/shared/layout/Container';
import ParticleBackground from './components/shared/layout/ParticleBG';

import './App.css';
import Footer from './components/shared/layout/Footer';
import useWindow from 'react-window-size-simple';
import { Tooltip } from '@mui/material';
import { ArrowCircleDown, ArrowCircleUp } from '@mui/icons-material';
import SpeedDial from './components/shared/layout/SpeedDial';
import Banner from './components/shared/layout/Banner';

const Home = ({
  // Redux State
  sidebar: { hover },
  settings: { sound, backgroundAnimation },
}) => {

  const { width } = useWindow()

  const [showContact, setShowContact] = useState(false);
  const [shadowToggle, setShadowToggle] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  const shadow = useRef()
  const goHome = useRef();
  const goAbout = useRef();
  const goExperience = useRef();
  const goWork = useRef();
  const goResearch = useRef();
  const goArticles = useRef();
  const goSkills = useRef();
  const goFooter = useRef();
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
        setShadowToggle(true);
      } else {
        setShadowToggle(false);
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

  const goToExperience = () => {
    if (goExperience.current) scrollToTargetPos(goExperience.current.getBoundingClientRect());
  };

  const goToWork = () => {
    if (goWork.current) scrollToTargetPos(goWork.current.getBoundingClientRect());
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
        refElement={refElement}
        goToHome={goToHome}
        goToAbout={goToAbout}
        goToExperience={goToExperience}
        goToWork={goToWork}
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
        goToExperience={goToExperience}
        goToWork={goToWork}
        goToResearch={goToResearch}
        goToSkills={goToSkills}
        goToArticles={goToArticles}
        goToEducation={goToEducation}
      />

      {backgroundAnimation && <ParticleBackground />}

      <div ref={shadowElement} />
      <div ref={refElement} />
      <div className="w-screen h-full flex flex-col items-center justify-center">
        <Container innerRef={goHome} movement={'fade-down'} className='my-12'>
          <Main goToFunc={[goToWork, goToExperience]} />
        </Container>
        <Container innerRef={goExperience} movement={'fade-up'} customMargin>
          <Experience />
        </Container>
        <Container innerRef={goSkills} movement={'fade-down'} customMargin>
          <Skills />
        </Container>
        <Container innerRef={goWork} movement={'fade-up'} customMargin>
          <Work />
        </Container>
        <Container innerRef={goResearch} movement={'fade-down'} customMargin>
          <Research />
        </Container>
        <Container innerRef={goEducation} movement={'fade-right'} customMargin>
          <Education />
        </Container>
        <Container innerRef={goArticles} movement={'fade-up'} customMargin>
          <Articles />
        </Container>
        <Container innerRef={goFooter} movement={''} customMargin>
          <Footer />
        </Container>

        {width > 1280 && (
          <>
            <div onClick={shadowToggle ? goToFooter : goToHome}>
              <Tooltip title={shadowToggle ? 'Page Down' : 'Page Up'} placement='left' enterDelay={400}>
                <div className='speed-dial cursor-pointer fixed bottom-10 right-10 text-gray-500 hover:text-brand' onMouseEnter={onHoverMobile}>
                  {shadowToggle ? (
                    <ArrowCircleDown
                      className='go-up'
                      style={{ fontSize: 40 }}
                    />
                  ) : (
                    <ArrowCircleUp
                      className='go-up'
                      style={{ fontSize: 40 }}
                    />
                  )}

                </div>
              </Tooltip>
            </div>
            <div onClick={goToHome}>
              <Tooltip title='Page Up' placement='left' enterDelay={400}>
                <div className='speed-dial cursor-pointer fixed bottom-10 right-10 text-gray-500 hover:text-brand' onMouseEnter={onHoverMobile}>

                </div>
              </Tooltip>
            </div>
            <div className='fixed bottom-36 right-9'>
              <SpeedDial />
            </div>
          </>
        )}
      </div>
      {showBanner && <Banner onClick={() => setShowBanner(false)} />}
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

