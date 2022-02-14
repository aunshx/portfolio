import React, { useState } from 'react';

import Background from './Background';

import second from "../../resources/images/giffy6.gif";
import useWindow from "../../utils/windowSize";
import { useEffect } from 'react';

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

const Main = ({}) => {
  const { width, height } = useWindow()
  const [particles, setParticles] = useState(0)

  useEffect(() => {
    switch(true){

      case width <= 320:
        setParticles(50)
        break

      case width <= 450:
        setParticles(70)
        break

      case width <= 650:
        setParticles(100)
        break

      case width <= 850:
        setParticles(130)
        break

      case width <= 1050:
        setParticles(150)
        break

      case width <= 1250:
        setParticles(220)
        break

      case width <= 1450:
        setParticles(300)
        break

      default:
        return null
    }
  }, [width])
  return (
    <div className='main'>
      <div>
        <Background particleValue={particles} particleLimit={400} />
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
