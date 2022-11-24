import React from 'react';
import { Link } from 'react-router-dom'
import useWindow from "react-window-size-simple";

import BackgroundLarge from "../../client/main/BackgroundLarge";
import BackgroundMedium from "../../client/main/BackgroundMedium";
import BackgroundSmall from "../../client/main/BackgroundSmall";
import BackgroundTiny from "../../client/main/BackgroundTiny";

import body from '../../../resources/images/main/body-shots/smug.png'

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
              <div className='subwriting flex_middle' style={{ textAlign: 'center' }}>Mobile site is being updated!</div>
                <div className='button flex_evenly' style={{ cursor: 'context-menu' }} >
                  <div>See you on Nov 25, 2022!</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WillBeLive;
