import React from 'react';
import PropTypes from 'prop-types';

import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import Sidebar from './components/navbar/Sidebar';


const Home = (props) => {
  return <div className='app'>
      <Navbar />
      <Sidebar />
      <Main />
  </div>;
};

Home.propTypes = {};

export default (Home);
