import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

import Navbar from '../navbar/Navbar';
import Sidebar from '../navbar/Sidebar';
import Footer from '../layout/Footer';
import Background from '../main/Background';

import body from '../../resources/images/onlyBodyedit.png'
import body1 from '../../resources/images/onlyBody2.png'
import body2 from '../../resources/images/onlyBody3.png'
import { connect } from 'react-redux';

const AboutMain = ({ sidebar: { hover } }) => {
  return (
    <>
      <Navbar />
      <Sidebar hover={hover} />
      <Background />
      <div className='app'>
        <div className='about-main'>
          <div className='title flex_middle' data-aos='flip-up'>
            <div style={{ marginRight: "0.5em" }}>
              <FontAwesomeIcon icon={faNewspaper} />
            </div>
            <div>About</div>
          </div>
          <div className='body flex_middle'>iiiiiiiiiiiiiiiiii</div>
        </div>
      </div>
      <div style={{ position: "fixed", bottom: "0", right: "45%" }}>
        <Footer />
      </div>
    </>
  );
};


AboutMain.propTypes = {
  sidebar: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  sidebar: state.sidebar,
});

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(AboutMain);
