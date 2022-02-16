import React, { useState } from 'react';
import PropTypes from "prop-types";
import useSound from "use-sound";
import { connect } from 'react-redux';

import second from "../../resources/images/giffy6.gif";
import wooDude from "../../resources/images/woo.png";

import woo from "../../resources/sounds/woo.mp3";
import keyboard from "../../resources/sounds/keyboard.mp3";

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
                    aria-hidden='true'
                    key={index}
                    className='u'
                    style={style2}
                  >
                    {char}
                  </span>
                ) : (
                  <span
                    aria-hidden='true'
                    key={index}
                    className='uu'
                    style={style1}
                  >
                    {char}
                  </span>
                )}
              </>
            );
          })}
        </span>
    )
}

const Main = ({
  // Redux State 
  settings: { sound }
}) => {

  const [playOn2] = useSound(keyboard, { volume: 0.15 })
  const [playOn] = useSound(woo, { volume: 0.15 })
  const [wooActive, setWooActive] = useState(false)

  let timer;

  function mouseStopped() {
    // console.log('OFF')
  }

  const makeSomeNoise = () => {
    clearTimeout(timer);
    timer = setTimeout(mouseStopped, 200);
  }

  const onHoverOnElement = () => {
    if(sound){
      playOn2()
    }
  }

  const onHoverImage = () => {
    if(sound) {
      setWooActive(true);
      setTimeout(() => {
        playOn();
      }, 200);
      setTimeout(() => {
        setWooActive(false);
      }, 500);
    }
  }

  const onHoverImageDeactive = () => {
    setWooActive(false);
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
                onMouseEnter={onHoverOnElement}
              >
                Hi,
              </div>
              <div>
                <div
                  className={
                    wooActive ? "flex_middle boopie-two" : "flex_middle boopie"
                  }
                >
                  <div style={{ padding: "-1em" }}>
                    <span
                      className='one'
                      style={{ display: "inline-block" }}
                      data-aos='fade-left'
                      data-aos-delay='200'
                      onMouseEnter={onHoverOnElement}
                    >
                      I
                    </span>
                    <span
                      className='one'
                      style={{ display: "inline-block" }}
                      data-aos='fade-left'
                      data-aos-delay='300'
                      onMouseEnter={onHoverOnElement}
                    >
                      '
                    </span>
                    <span
                      className='one'
                      style={{ display: "inline-block" }}
                      data-aos='fade-left'
                      data-aos-delay='400'
                      onMouseEnter={onHoverOnElement}
                    >
                      m
                    </span>{" "}
                    <span
                      className='letter-a'
                      style={{ display: "inline-block" }}
                      data-aos='fade-left'
                      data-aos-delay='500'
                      onMouseEnter={onHoverOnElement}
                    >
                      a
                    </span>
                    <span
                      className='one'
                      style={{ display: "inline-block" }}
                      data-aos='fade-left'
                      data-aos-delay='600'
                      onMouseEnter={onHoverOnElement}
                    >
                      u
                    </span>
                    <span
                      style={{ display: "inline-block" }}
                      className='one'
                      data-aos='fade-left'
                      data-aos-delay='700'
                      onMouseEnter={onHoverOnElement}
                    >
                      n
                    </span>
                    <span
                      style={{ display: "inline-block" }}
                      className='one'
                      data-aos='fade-left'
                      data-aos-delay='800'
                      onMouseEnter={onHoverOnElement}
                    >
                      s
                    </span>
                    <span
                      style={{ display: "inline-block" }}
                      className='one'
                      data-aos='fade-left'
                      data-aos-delay='900'
                      onMouseEnter={onHoverOnElement}
                    >
                      h
                    </span>
                    <span
                      style={{ display: "inline-block" }}
                      className='one exclamation'
                      data-aos='fade-left'
                      data-aos-delay='1000'
                      onMouseEnter={onHoverOnElement}
                    >
                      !
                    </span>
                    <span
                      style={{ marginLeft: "-0.28em", paddingTop: "2em" }}
                      data-aos='fade-in'
                      data-aos-delay='1050'
                      onMouseEnter={onHoverImage}
                      onMouseLeave={onHoverImageDeactive}
                    >
                      {wooActive ? (
                        <img src={wooDude} alt='Dude shouting woooo' />
                      ) : (
                        <img src={second} alt='Dude sitting and programming' />
                      )}
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
