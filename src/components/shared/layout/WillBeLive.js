import React from 'react';
import ParticleBackground from './ParticleBG';

const WillBeLive = () => {
  return (
    <>
      <ParticleBackground />
      <div className='h-screen w-screen flex items-center justify-center'>
        <div className='text-gray-400 text-2xl'>
          Will Be Live Soon!
        </div>
      </div>
    </>
  );
};

export default WillBeLive;
