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
import { useState } from 'react';

const Me = (props) => {
    const [showDialog, setShowDialog] = useState(true)

    const changeDialog = () => {
        setShowDialog(!showDialog)
    }
  return<>
      <div className="all-about" onClick={changeDialog}>
      {showDialog ? (
          <>
              <div class="bubble bubble-bottom-left">Send <span style={{ display: 'inline-block', color: 'rgb(0, 145, 255)' }}>me</span> an email and I'll <span style={{ display: 'inline-block', color: 'rgb(0, 145, 255)' }}>definitely</span> get <span style={{ display: 'inline-block', color: 'rgb(0, 145, 255)' }}>back</span> to you.</div>
           <div className='image'>
         <img src={body} alt="Face of Me" />
     </div>
          </>
      ) : ('')}
      </div>
  </>
};

Me.propTypes = {};

export default Me;
