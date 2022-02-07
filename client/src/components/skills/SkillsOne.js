import React from 'react';
import PropTypes from 'prop-types';

const SkillOne = ({ delay, logo, title }) => {
  return (
      <div className="imp">
          <div className='individual app' data-aos="fade-left" data-aos-delay={delay}>
      <div className="image">
        <img src={logo} alt="Logo of Tech" />
      </div>
      <div className="title">
        {title}
      </div>
  </div>;
      </div>
  )
};

SkillOne.propTypes = {};

export default SkillOne;
