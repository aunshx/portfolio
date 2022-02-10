import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import articleImage from '../../resources/images/default.jpg'
import defaultImg from '../../resources/images/default.jpg'
import reduxLogo from '../../resources/images/reduxLogo.png'
import reactLogo from '../../resources/images/reactLogo.png'
import jsLogo from '../../resources/images/jsLogo.png'
import nodeLogo from '../../resources/images/nodeLogo.png'
import psqlLogo from '../../resources/images/psqlLogo.png'
import bodingaLogo from '../../resources/images/bodingaLogo.png'

const ArticleOne = ({ delay, technology }) => {
  const [colorBorder, setColorBorder] = useState('')  

  useEffect(() => 
    {
      switch(true){
        case technology[0] === 'react':
          return (
            setColorBorder('#61dbfb')
          )
        case technology[0] === 'redux':
          return (
            setColorBorder('#61dbfb')
          )
        case technology[0] === 'node':
          return (
            setColorBorder('#61dbfb')
          )
        case technology[0] === 'mongo':
          return (
            setColorBorder('#61dbfb')
          )
        case technology[0] === 'postman':
          return (
            setColorBorder('#61dbfb')
          )
        case technology[0] === 'postgres':
          return (
            setColorBorder('#61dbfb')
          )
        case technology[0] === 'passport':
          return (
            setColorBorder('#61dbfb')
          )

        default:
          return null
      }
    }
  , [])

  return <div className='individual' data-aos="fade-in" data-aos-delay={delay}>
      <div className="image"style={{ borderBottom: '2px solid rgb(97, 219, 251) ' }} >
        <img src={articleImage} alt="Article default" />
      </div>
      <div className="tags flex_right">
        <div style={{ marginRight: '0.3em' }}>
          <img src={reactLogo} alt="React Logo" />
        </div>
        <div>
          <img src={reduxLogo} alt="Redux Logo" />
        </div>
      </div>
      <div className="title">
        This is the title of an imaginary yet to do post 
      </div>
      <div className="description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam temporibus odio voluptatum, reprehenderit alias in. 
      </div>
      <div className="checkout flex_middle">
        <div>
          Read full article
        </div>
        <div style={{ marginLeft: '0.5em' }}>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
  </div>;
};

ArticleOne.propTypes = {};

export default ArticleOne;
