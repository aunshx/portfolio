import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

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
import { faArrow, faChevronCircleUp, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import About from './components/about/About';

import './App.css'


const Home = (props) => {
	const [fixedContent, setFixedContent] = useState(true);
	const [showContact, setShowContact] = useState(false);

  useEffect(() => setTimeout(() => setShowContact(true), 4000))

	const checker = useRef();
	const goMain = useRef();

  const refElement = useCallback((node) => {
    if (checker.current) {
      checker.current.disconnect();
    }
    const options = {
      root: null,
      threshold: 0,
    };
    checker.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setFixedContent(false);
      } else {
        setFixedContent(true);
      }
    }, options);
    if (node) {
      checker.current.observe(node);
    }
  }, []);

 const goToMain = () => {
    goMain.current.scrollIntoView({ behavior: "smooth" });
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className='app '>
      <Navbar reference={goMain} refMain={refElement} />
      <Sidebar />
      <Main />
      <About />
      <Projects />
      <Articles />
      <Skills />
      <Contact />
      <Footer />
      {/* {fixedContent && (
        <div>
          <FontAwesomeIcon
            icon={faChevronCircleUp}
            className='go-up'
            style={{ fontSize: 30 }}
            onClick={goToMain}
          />
        </div>
      )} */}
      {showContact && (
        <>
          <div className='appear_contact'>
            <div
              className='contact-button'
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
            >
              <FontAwesomeIcon
                icon={faMobileAlt}
                className='go-up'
                style={{ fontSize: 23 }}
              />
            </div>
          </div>
          <Popover
            arrow
            id='mouse-over-popover'
            sx={{
              pointerEvents: "none",
            }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
          >
            I jsjsjsjsj
          </Popover>
        </>
      )}
    </div>
  );
};

Home.propTypes = {};

export default (Home);
