import React from 'react';
import PropTypes from 'prop-types';

import useWindow from "../../utils/windowSize";

const SkillOne = ({ delay, logo, title }) => {

  const { width, height } = useWindow();

  return (
    <div className='imp'>
      <div
        className='individual app'
        data-aos={width < 787 ? "fade-in" : "fade-left"}
        data-aos-offset={width < 787 && 30}
        data-aos-delay={delay}
      >
        <div className='image'>
          <img src={logo} alt='Logo of Tech' />
        </div>
        <div className='title'>{title}</div>
      </div>
      ;
    </div>
  );
};

SkillOne.propTypes = {};

export default SkillOne;
