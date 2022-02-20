import React from 'react'
import PropTypes from 'prop-types'

import Navbar from '../navbar/Navbar'
import { connect } from 'react-redux';

import windowSize from '../../../utils/windowSize';
import VisitorGraph from './charts/VisitorGraph';
import Alerts from '../../layout/Alerts';

const Stats = ({
    // Redux State
    settings: { displayMode }
}) => {
const { width, height } = windowSize()

  return (
    <>
      <Navbar />
      <div className='app'>
        <div className={width < 787 ? "stats-main-mobile" : "stats-main"}>
          <div className='one flex_middle' style={{ border: "1px solid red" }}>
              <VisitorGraph />
          </div>
          <div className='two' style={{ border: "1px solid red" }}></div>
          <div className='three' style={{ border: "1px solid red" }}></div>
          <div className='four' style={{ border: "1px solid red" }}></div>
        </div>
      </div>
      <div>
          <Alerts />
      </div>
    </>
  );
}

Stats.propTypes = {
  settings: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  settings: state.settings,
});

const mapStateToActions = {
}

export default connect(mapStateToProps, mapStateToActions)(Stats)