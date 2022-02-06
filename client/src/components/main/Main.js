import React from 'react';
import Typed from 'react-typed';

import mainImg from '../../resources/images/home.png'

const Main = ({}) => {
  return <div className='main'>
      <div className="double_grid">
          <div className="title app" style={{ justifyContent: 'center' }}>
            <div className="first">
                Hi! I'm a,
            </div>
            <div className="second">
                Full Stack Developer
            </div>
            <div className="third">
                  <Typed
                strings={[
                    'JS, React, Node, Redux',
                    'Postgres, SQL, Mongo']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                </Typed>
            </div>
          </div>
          <div className="image">
            <img src={mainImg} alt="Dude sitting and programming" />
          </div>
      </div>
  </div>;
};

Main.propTypes = {};

export default Main;
