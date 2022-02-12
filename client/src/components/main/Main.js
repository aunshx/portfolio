import React from 'react';
import Typed from 'react-typed';

import mainImg from '../../resources/images/home.png'
import second from '../../resources/images/giffy6.gif'
import Cools from '../layout/Cools'

import { animated, useSpring } from 'react-spring';
import Cools2 from '../layout/Cools2';
import Background from './Background';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrow,
  faChevronCircleUp,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";



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
            <div
              className='first one'
              data-aos='fade-left'
              data-aos-delay='100'
            >
              Hi,
            </div>
            <div>
              <div className='flex_middle boopie'>
                <div style={{ padding: "-1em" }}>
                  <span
                    className='one'
                    style={{ display: "inline-block" }}
                    data-aos='fade-left'
                    data-aos-delay='200'
                  >
                    I
                  </span>
                  <span
                    className='one'
                    style={{ display: "inline-block" }}
                    data-aos='fade-left'
                    data-aos-delay='300'
                  >
                    '
                  </span>
                  <span
                    className='one'
                    style={{ display: "inline-block" }}
                    data-aos='fade-left'
                    data-aos-delay='400'
                  >
                    m
                  </span>{" "}
                  <span
                    className='letter-a'
                    style={{ display: "inline-block" }}
                    data-aos='fade-left'
                    data-aos-delay='500'
                  >
                    a
                  </span>
                  <span
                    className='one'
                    style={{ display: "inline-block" }}
                    data-aos='fade-left'
                    data-aos-delay='600'
                  >
                    u
                  </span>
                  <span
                    style={{ display: "inline-block" }}
                    className='one'
                    data-aos='fade-left'
                    data-aos-delay='700'
                  >
                    n
                  </span>
                  <span
                    style={{ display: "inline-block" }}
                    className='one'
                    data-aos='fade-left'
                    data-aos-delay='800'
                  >
                    s
                  </span>
                  <span
                    style={{ display: "inline-block" }}
                    className='one'
                    data-aos='fade-left'
                    data-aos-delay='900'
                  >
                    h
                  </span>
                  <span
                    style={{ display: "inline-block" }}
                    className='one exclamation'
                    data-aos='fade-left'
                    data-aos-delay='1000'
                  >
                    !
                  </span>
                  <span
                    style={{ marginLeft: "-0.28em", paddingTop: "2em" }}
                    data-aos='fade-in'
                    data-aos-delay='1050'
                  >
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
      {/* <div className='contact-button' data-aos='fade-in' data-aos-delay='1200'>
        <FontAwesomeIcon
          icon={faMobileAlt}
          className='go-up'
          style={{ fontSize: 23 }}
          onClick={goToMain}
        />
      </div> */}
    </div>
  );
};



Main.propTypes = {}; 

export default Main;
