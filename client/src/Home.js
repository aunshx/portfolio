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
import { faArrow, faChevronCircleUp, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import About from './components/about/About';

import './App.css'


const Home = ({
  // Redux State
  sidebar: { hover },
}) => {
  const [fixedContent, setFixedContent] = useState(true);
  const [showContact, setShowContact] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => setTimeout(() => setShowContact(true), 4000));

  const checker = useRef();
  const me = useRef();
  const goMain = useRef();
  const goContact = useRef();

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

  const refElement2 = useCallback((node) => {
    if (me.current) {
      me.current.disconnect();
    }
    const options = {
      root: null,
      threshold: 0,
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
     goContact.current.scrollIntoView({ behavior: "smooth" });
   };

  return (
    <div className='app '>
      <Navbar reference={goMain} refMain={refElement} />
      <Sidebar hover={hover} />
      <Main />
      <About />
      <Projects />
      <Articles />
      <Skills />
      <Contact
        reference={refElement2}
        show={showDialog}
        changeDialog={setShowDialog}
        goContact={goContact}
      />
      <Footer />
      {showContact && (
        <>
          <div className='appear_contact' onClick={goToContact}>
            <div
              className='contact-button'
            >
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
};

const mapStateToProps = (state) => ({
  sidebar: state.sidebar,
});

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(Home);

