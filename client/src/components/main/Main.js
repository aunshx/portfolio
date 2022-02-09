import React from 'react';
import Typed from 'react-typed';

import mainImg from '../../resources/images/home.png'
import second from '../../resources/images/giffy6.gif'
import Cools from '../layout/Cools'

import { animated, useSpring } from 'react-spring';
import Cools2 from '../layout/Cools2';
import Background from './Background';


const SplitText = ({ copy, role }) => {
    return(
      <span aria-label={copy} role={role}>
          {copy.split("").map(function(char, index){
            let style1 = {"animation-delay": (0.5 + index / 10) + "s"}
            let style2 = {"animation-delay": (0.5 + index / 10) + "s", 'color': 'black'}
            return (
              <>
                {index > 4 && index < 10 ? (
                <span
              aria-hidden="true"
              key={index}
              className='u'
              style={style2}>
              {char}
            </span>
              ) : (
                <span
              aria-hidden="true"
              key={index}
              className='uu'
              style={style1}>
              {char}
            </span>
              )}
              </>
            )
          })}
        </span>
    )
}
const SplitTextMain = ({ copy, role }) => {
    return(
      <span aria-label={copy} role={role}>
          {copy.split("").map(function(char, index){
            let style1 = {"animation-delay": (0.5 + index / 10) + "s"}
            let style2 = {"animation-delay": (0.5 + index / 10) + "s", 'color': 'black'}
            return (
              <>
                {index > 4 && index < 10 ? (
                <span
              aria-hidden="true"
              key={index}
              className='u shake2'
              style={style2}>
              {char}
            </span>
              ) : (
                <span
              aria-hidden="true"
              key={index}
              className='uu shake2'
              style={style1}>
              {char}
            </span>
              )}
              </>
            )
          })}
        </span>
    )
}

const Main = ({}) => {
  return (
    <div className='main'>
      <div>
        <Background />
      </div>
      <div className='double_grid'>
        <div className='title app' style={{ justifyContent: "center" }}>
          <div className='second app ft-bold'>
            <div className='first one'>Hi,</div>
            <div>
              <div className='flex_middle boopie'>
                <div style={{ padding: "-1em" }}>
                  <span className='one' style={{ display: "inline-block" }}>I</span>
                  <span className='one' style={{ display: "inline-block" }}>'</span>
                  <span className='one' style={{ display: "inline-block" }}>m</span>{" "}
                  <span
                    className='letter-a'
                    style={{ display: "inline-block" }}
                  >
                    a
                  </span>
                  <span className='one' style={{ display: "inline-block" }}>
                    u
                  </span>
                  <span
                    style={{ display: "inline-block" }}
                    className='one'
                  >
                    n
                  </span>
                  <span style={{ display: "inline-block" }} className='one'>
                    s
                  </span>
                  <span style={{ display: "inline-block" }} className='one'>
                    h
                  </span>
                  <span
                    style={{ fontSize: "170px", display: "inline-block" }}
                    className='one'
                  >
                    !
                  </span>
                  <span style={{ marginLeft: "-0.28em", paddingTop: "2em" }}>
                    <img src={second} alt='Dude sitting and programming' />
                  </span>
                </div>
              </div>
            </div>
            <div className='pronunciation'>
              <span style={{ color: "grey" }}>pronunciation:</span>{" "}
              Aaaoooonsshhhh
            </div>
            <div className='third' data-splitting>
              <SplitText copy='Full Stack Developer' role='heading' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



Main.propTypes = {}; 

export default Main;
