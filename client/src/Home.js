import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

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

  return (
    <div className='app '>
      <Navbar reference={goMain} refMain={refElement} />
      <Sidebar />
      <Main />
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
        <div className='appear_contact'>
        <div className='contact-button'>
          <FontAwesomeIcon
            icon={faMobileAlt}
            className='go-up'
            style={{ fontSize: 23 }}
          />
        </div>
      </div>
      )}
    </div>
  );
};

Home.propTypes = {};

export default (Home);
