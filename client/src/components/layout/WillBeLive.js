import React from 'react';
import { Link } from 'react-router-dom'
import useWindow from "react-window-size-simple";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import BackgroundLarge from "../main/BackgroundLarge";
import BackgroundMedium from "../main/BackgroundMedium";
import BackgroundSmall from "../main/BackgroundSmall";
import BackgroundTiny from "../main/BackgroundTiny";

import body from '../../resources/images/main/body-shots/smug.png'

const WillBeLive = (props) => {
  const { width } = useWindow()
  return (
    <>
      {width > 1280 && <BackgroundLarge />}
      {900 < width && width <= 1280 && <BackgroundMedium />}
      {600 < width && width <= 900 && <BackgroundSmall />}
      {width <= 600 && <BackgroundTiny />}
      <div className='app'>
        <div className='not-found flex_middle'>
          <div
            className={width < 769 ? "app" : "flex_middle"}
          >
            <div className='image'>
              <img src={body} alt='Me standing up' />
            </div>
            <div className='app'>
              <div className='writing'>
                <span className='middle'>a</span>unsh
              </div>
              <div className='subwriting flex_middle' style={{ textAlign: 'center' }}>is currently updating this site!</div>
                <div className='button flex_evenly' style={{ cursor: 'context-menu' }} >
                  <div>See you on Nov 20, 2022!</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WillBeLive;
