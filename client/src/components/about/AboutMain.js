import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

import Navbar from '../navbar/Navbar';
import Sidebar from '../navbar/Sidebar';
import Footer from '../layout/Footer';

const Articles = (props) => {
  return<>
  <Navbar />
  <Sidebar />
      <div className="app">
           <div className='articles-main'>
    <div className="title flex_middle" data-aos='flip-up'>
      <div style={{ marginRight: '0.5em' }}>
        <FontAwesomeIcon icon={faNewspaper} />
      </div>
      <div>
        About
      </div>
    </div>
    <div className="body flex_middle">
     
    </div>
  </div>
      </div>
  <Footer />
  </>
};

Articles.propTypes = {};

export default Articles;
