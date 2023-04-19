import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useWindow from "react-window-size-simple";
import { connect } from 'react-redux';
import useSound from 'use-sound';

import bass from '../../../../resources/sounds/shortBass.mp3'

const Card = ({
  delay,
  logo,
  title,
  runAos,
  number,
  numberCurrent,
  // Redux State
  settings: { displayMode, sound },
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

  useEffect(() => {
    switch (true) {
      case title === "React" || title === "C++" || title === "Typescript":
        setBorderColorNow("#34cfeb");
        break;

      case title === "Node.js" || title === "MongoDb" || title === "SpringBoot":
        setBorderColorNow("#3ede69");
        break;

      case title === "Git" || title === "HTML":
        setBorderColorNow("#de793e");
        break;

      case title === "CSS" || title === "Postgres" || title === "Mui":
        setBorderColorNow("rgb(0, 145, 255)");
        break;

      case title === "JS" || title === "Python":
        setBorderColorNow("#dec13e");
        break;

      case title === "Redux":
        setBorderColorNow("#8e3ede");
        break;

      case title === "Java" || title === "PassportJS":
        setBorderColorNow("#ec2024");
        break;

      default:
        return null;
    }
  }, []);

  const { width } = useWindow();

  return (
    <div
      className='imp'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={
          displayMode ? "individual individual--dark app" : "individual app"
        }
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
        <div className='title'>{title}</div>
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
