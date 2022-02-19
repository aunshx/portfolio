import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Navbar from '../navbar/Navbar'
import Messages from '../message/Messages';

const Main = props => {
    // useEffect(() => {
    
    // }, []);
  return (
    <>
      <Navbar />
      <div className='app'>
        <div className='admin-main'>
            <Messages />
        </div>
      </div>
    </>
  );
}

Main.propTypes = {}

export default Main