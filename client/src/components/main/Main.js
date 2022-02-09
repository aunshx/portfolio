import React from 'react';
import Typed from 'react-typed';

import mainImg from '../../resources/images/home.png'
import second from '../../resources/images/giffy5.gif'
import Cools from '../layout/Cools'

import { animated, useSpring } from 'react-spring';
import Cools2 from '../layout/Cools2';

const Boop = ({   x = 0,
  y = 0,
  scale = 1.02, rotation = 0, timing = 150 }) => {
  const [isBooped, setIsBooped] = React.useState(false)

    const style = useSpring({
    display: 'inline-block',
    backfaceVisibility: 'hidden',
        transform: isBooped
      ? `translate(${x}px, ${y}px)
         rotate(${rotation}deg)
         scale(${scale})`
      : `translate(0px, 0px)
         rotate(0deg)
         scale(1)`,
        config: {
    tension: 300,
    friction: 10,
  },
  })

  React.useEffect(() => {
    if (!isBooped) {
      return;
    }
    const timeoutId = window.setTimeout(() => {
      setIsBooped(false);
    }, timing);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isBooped, timing])

  const trigger = () => {
    setIsBooped(true);
  }

  return (
    <animated.span onMouseEnter={trigger} style={style}>
      <div>
        Hi<span className='alternate'>!</span>
      </div>
    </animated.span>
  );
};


const BoopTwo = ({   x = 0,
  y = 0,
  scale = 1.01, rotation = 0, timing = 150 }) => {
  const [isBooped, setIsBooped] = React.useState(false)

    const style = useSpring({
    display: 'inline-block',
    backfaceVisibility: 'hidden',
        transform: isBooped
      ? `translate(${x}px, ${y}px)
         rotate(0deg)
         scale(${scale})`
      : `translate(0px, 0px)
         rotate(0deg)
         scale(1)`,
        config: {
    tension: 300,
    friction: 10,
  },
  })

  React.useEffect(() => {
    if (!isBooped) {
      return;
    }
    const timeoutId = window.setTimeout(() => {
      setIsBooped(false);
    }, timing);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isBooped, timing])

  const trigger = () => {
    setIsBooped(true);
  }

  return (
    // <animated.span onMouseEnter={trigger} style={style}>
      <div className='flex_middle boopie'> 
        <div style={{ padding: '-1em' }}>
          <span style={{ marginRight: '0.3em' }}>I'm</span> <span className='letter-a'>a</span> unsh<span style={{ fontSize: '170px' }} >!</span>
          <span style={{ marginLeft: '-0.28em', paddingTop:'2em' }}><img src={second} alt="Dude sitting and programming" /></span>
        </div>
        
      </div>
      
    // </animated.span>
  );
};

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
  return <div className='main'>
      <div className="double_grid">
          <div className="title app" style={{ justifyContent: 'center' }}>
             <div className="second app ft-bold" >
             <div className="first">
               {/* <Boop rotation={20} timing={200} /> */}
             </div>
                <div>
                  {/* <BoopTwo rotation={20} timing={200} /> */}
                  <div className='flex_middle boopie'> 
        <div style={{ padding: '-1em' }}>
          <span style={{ marginRight: '0.3em' }}>I'm</span> <span className='letter-a'>a</span> unsh<span style={{ fontSize: '170px' }} >!</span>
          <span style={{ marginLeft: '-0.28em', paddingTop:'2em' }}><img src={second} alt="Dude sitting and programming" /></span>
        </div>
        
      </div>
      
                </div>
                <div className="pronunciation">
                {/* <span style={{ color: 'grey' }}>pronunciation:</span> Aaaoooonsshhhh */}
                </div>
                <div className="third" data-splitting>
                  {/* Full <span className='alternate'>Stack</span> Developer */}
                  <SplitText copy='Full Stack Developer' role='heading' />
                </div>
            </div>
            <div className="third">
            </div>
            
          </div>
          <div className="image flex_middle tilted-image">
            {/* <img src={second} alt="Dude sitting and programming" /> */}
            <Cools />
          </div>
      </div>
  </div>;
};



Main.propTypes = {}; 

export default Main;
