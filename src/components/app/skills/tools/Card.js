import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import useWindow from "react-window-size-simple";
import useSound from 'use-sound';

import bass from '../../../../resources/sounds/shortBass.mp3';

const Card = ({
  delay,
  logo,
  title,
  runAos,
  number,
  numberCurrent,
  // Redux State
  settings: { sound },
}) => {
  const [playOn] = useSound(bass, { volume: 0.2 });

  const [borderColorNow, setBorderColorNow] = useState("");

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    if (sound) {
      playOn();
    }
    setIsHovering(false);
  };

  const { width } = useWindow();

  return (
    <div
      className='hover:scale-105'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={'flex items-center gap-x-1 skills-card opacity-70 text-white'}
        data-aos={runAos ? (width < 787 ? "fade-in" : "fade-in") : ""}
        data-aos-offset={width < 787 && 30}
        data-aos-delay={delay}
        style={
          isHovering || number === numberCurrent
            ? {
                boxShadow: `0px 0px 20px 0px ${borderColorNow}`,
                transition: ".1s ease-in-out",
              }
            : {}
        }
      >
        <div className='image'>
          <img src={logo} alt='Logo of Tech' />
        </div>
        <div className='text-white'>{title}</div>
      </div>
      <div></div>
    </div>
  );
};

Card.propTypes = {
  settings: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  settings: state.settings
})

export default connect(mapStateToProps)(Card);
