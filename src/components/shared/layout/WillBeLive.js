import React from 'react';
import useWindow from "react-window-size-simple";


import body from '../../../resources/images/main/body-shots/smug.png';
import ParticleBackground from './ParticleBG';

const WillBeLive = (props) => {
  const { width } = useWindow()
  return (
    <>
      <ParticleBackground />
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
