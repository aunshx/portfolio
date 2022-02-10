import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

import Navbar from '../navbar/Navbar';
import Sidebar from '../navbar/Sidebar';
import Footer from '../layout/Footer';
import Background from '../main/Background';

import body from '../../resources/images/onlyBodyedit.png'
import body1 from '../../resources/images/onlyBody2.png'
import body2 from '../../resources/images/onlyBody3.png'

const Me = (props) => {
  return<>
      <div className="all-about">
      <div class="bubble bubble-bottom-left">Send me an email and I'll definitely get back to you.</div>
           <div className='image'>
         <img src={body} alt="Face of Me" />
     </div>
      </div>
  </>
};

Me.propTypes = {};

export default Me;
