import React from 'react';
import PropTypes from "prop-types";
import useSound from "use-sound";
import { connect } from 'react-redux';

import second from "../../../resources/images/main/gifs/drinkingWater.gif";

import keyboard from "../../../resources/sounds/keyboard.mp3";

const SplitText = ({ copy, role }) => {


    return(
      <span aria-label={copy} role={role}>
          {copy.split("").map(function(char, index){
            let style1 = {"animation-delay": (index / 12) + "s"}
            let style2 = {"animation-delay": (index / 12) + "s"}
            return (
              <>
                {index > 12 && index < 20 ? (
                  <span
                    aria-hidden='true'
                    key={index}
                    className='uu'
                    style={style2}
                  >
                    {char}
                  </span>
                ) : (
                  <span
                    aria-hidden='true'
                    key={index}
                    className='u'
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
  innerRef,
  reference,
  // Redux State 
  settings: { sound }
}) => {

  const [playOn2] = useSound(keyboard, { volume: 0.15 })

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
  
  return (
    <>
      <div
        className='main'
        onMouseMove={makeSomeNoise}
        ref={reference}
      >
        <div className='double_grid' ref={innerRef}>
          <div className='title app' style={{ justifyContent: "center" }}>
            <div className='second app ft-bold'>
              <div className='first one' onMouseEnter={onHoverOnElement}>
                Hi,
              </div>
              <div>
                <div
                  className={
                    // wooActive ? "flex_middle boopie-two" :
                    "flex_middle boopie"
                  }
                >
                  <div style={{ padding: "-1em" }}>
                    <span
                      className='one'
                      style={{ display: "inline-block" }}
                      onMouseEnter={onHoverOnElement}
                    >
                      I
                    </span>
                    <span
                      className='one'
                      style={{ display: "inline-block" }}
                      onMouseEnter={onHoverOnElement}
                    >
                      '
                    </span>
                    <span
                      className='one'
                      style={{ display: "inline-block" }}
                      onMouseEnter={onHoverOnElement}
                    >
                      m
                    </span>{" "}
                    <span
                      className='letter-a'
                      style={{ display: "inline-block" }}
                      onMouseEnter={onHoverOnElement}
                    >
                      a
                    </span>
                    <span
                      className='one'
                      style={{ display: "inline-block" }}
                      onMouseEnter={onHoverOnElement}
                    >
                      u
                    </span>
                    <span
                      style={{ display: "inline-block" }}
                      className='one'
                      onMouseEnter={onHoverOnElement}
                    >
                      n
                    </span>
                    <span
                      style={{ display: "inline-block" }}
                      className='one'
                      onMouseEnter={onHoverOnElement}
                    >
                      s
                    </span>
                    <span
                      style={{ display: "inline-block" }}
                      className='one'
                      onMouseEnter={onHoverOnElement}
                    >
                      h
                    </span>
                    <span
                      style={{ display: "inline-block" }}
                      className='one exclamation'
                      onMouseEnter={onHoverOnElement}
                    >
                      !
                    </span>
                    <span style={{ marginLeft: "-0.28em", paddingTop: "2em" }}>
                      <img
                        src={second}
                        alt='Dude standing and drinking water'
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div className='third' data-splitting>
                <SplitText
                  copy='Welcome to my corner of the internet'
                  role='heading'
                />
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
