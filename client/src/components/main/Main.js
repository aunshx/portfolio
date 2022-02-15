import React, { useState } from 'react';
import PropTypes from "prop-types";
import useSound from "use-sound";
import { connect } from 'react-redux';

import second from "../../resources/images/giffy6.gif";

import swoosh from "../../resources/sounds/swoosh.mp3";

const SplitText = ({ copy, role }) => {
    return(
      <span aria-label={copy} role={role}>
          {copy.split("").map(function(char, index){
            let style1 = {"animation-delay": (0.5 + index / 10) + "s"}
            let style2 = {"animation-delay": (0.5 + index / 10) + "s"}
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

const Main = ({
  // Redux State 
  settings: { sound }
}) => {

  const [playOn] = useSound(swoosh, { volume: 1 })

  let timer;

  function mouseStopped() {
    console.log('OFF')
  }

  const makeSomeNoise = () => {
     if (sound) {
       playOn();
     }
    clearTimeout(timer);
    timer = setTimeout(mouseStopped, 200);
  }
  
  return (
    <>
      <div className='main' onMouseMove={makeSomeNoise}>
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
    </>
  );
};



Main.propTypes = {
  settings: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  settings: state.settings,
});

const mapStateToActions = {

};

export default connect(mapStateToProps, mapStateToActions)(Main);
