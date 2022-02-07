import React from 'react';
import Typed from 'react-typed';

import mainImg from '../../resources/images/home.png'
import second from '../../resources/images/mainPic.PNG'

const Main = ({}) => {
  return <div className='main'>
      <div className="double_grid">
          <div className="title app" style={{ justifyContent: 'flex-end' }}>
          <div className="second ft-bold" data-aos='fade-in'>
                Aunsh Bandivadekar
            </div>
            <div className="first">
                Hi! I'm
            </div>
            <div className="third">
                Full Stack Developer
            </div>
             {/* <div className="fourth">
                  <Typed
                strings={[
                    'JS, React, Node, Redux',
                    'Postgres, SQL, Mongo']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                </Typed>
            </div> */}
            
          </div>
          <div className="image flex_middle">
            <img src={second} alt="Dude sitting and programming" />
          </div>
      </div>
  </div>;
};

Main.propTypes = {}; 

export default Main;
