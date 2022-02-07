import React from 'react';
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
import { faArrow, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';


const Home = (props) => {
  return <div className='app'>
      <Navbar />
      <Sidebar />
      <Main />
      <Projects />
	  <Articles />
	  <Skills />
	  <Contact />
      <Footer />
	<ul class="animated-squares">
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
	</ul>
	<div>
		{/* <FontAwesomeIcon icon={faChevronCircleUp} className='go-up'  style={{ fontSize: 30 }} /> */}
	</div>
  </div>;
};

Home.propTypes = {};

export default (Home);
