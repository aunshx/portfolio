import React from 'react';
import { Link } from 'react-router-dom';
import useWindow from "react-window-size-simple";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


import ParticleBackground from './ParticleBG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faHome } from '@fortawesome/free-solid-svg-icons';

const NotFound = () => {
  return (
    <div className='w-screen h-screen'>
      <ParticleBackground />
          <div
          className='h-full w-full text-gray-300 flex items-center justify-center flex-col gap-4'
          >
              <div className='text-7xl lg:text-4xl'>
                error 4<span className='text-brand'>0</span>4
              </div>
              <div className='text-3xl lg:text-xl text-gray'>Page not found</div>
              <Link to='/'>
                <div type="button" className="border border-gray-400 text-gray-400 border-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-sm px-4 py-2 text-center hover:border-brand hover:text-brand flex items-center justify-center gap-x-2 w-fit mt-4">
                      <FontAwesomeIcon
                        icon={faHome}
                        style={{
                          fontSize: 20,
                        }}
                      />
                      <div>
                        Go Home
                      </div>
                    </div>
              </Link>
            </div>
    </div>
  );
};

export default NotFound;
