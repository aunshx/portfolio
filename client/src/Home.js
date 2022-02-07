import React from 'react';
import PropTypes from 'prop-types';

import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import Sidebar from './components/navbar/Sidebar';
import Footer from './components/layout/Footer'
import Projects from './components/projects/Projects';
import Articles from './components/articles/Articles';
import Skills from './components/skills/Skills';


const Home = (props) => {
  return <div className='app'>
      <Navbar />
      <Sidebar />
      <Main />
      <Projects />
	  <Articles />
	  <Skills />
      <Footer />
		{/* <ul class="box-area">
			<li>1</li>
			<li>0</li>
			<li>1</li>
			<li>0</li>
			<li>1</li>
			<li>0</li>
			<li>1</li>
			<li>0</li>
			<li>1</li>
			<li>0</li>
			<li>1</li>
			<li>0</li>
			<li>1</li>
			<li>0</li>
			<li>1</li>
			<li>0</li>
		</ul> */}
  </div>;
};

Home.propTypes = {};

export default (Home);
