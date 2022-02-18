import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import useWindow from "../../utils/windowSize";
import { connect } from 'react-redux';

const SkillOne = ({ delay, logo, title,
  // Redux State
  settings: { displayMode }
}) => {

  const [borderColorNow, setBorderColorNow] = useState('')

  useEffect(() => {
    switch(true) {
      case title === 'React':
        setBorderColorNow("#34cfeb")
        break

      case title === 'Node.js' || title === 'MongoDb':
        setBorderColorNow("#3ede69");
        break

      case title === 'Git' || title === 'HTML':
        setBorderColorNow("#de793e");
        break

      case title === 'CSS' || title === 'Postgres' || title === 'Mui':
        setBorderColorNow("rgb(0, 145, 255)");
        break

      case title === 'JS':
        setBorderColorNow("#dec13e");
        break

      case title === 'Redux':
        setBorderColorNow("#8e3ede");
        break

      default:
        return null
    }
  },[])

  const { width, height } = useWindow();

  return (
    <div className='imp'>
      <div
        className={displayMode ? "individual individual--dark app" : "individual app"}
        data-aos={width < 787 ? "fade-in" : "fade-in"}
        data-aos-offset={width < 787 && 30}
        data-aos-delay={delay}
        style={{ border: `1px solid ${borderColorNow}` }}
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

SkillOne.propTypes = {
  settings: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  settings: state.settings
})

export default connect(mapStateToProps)(SkillOne);
