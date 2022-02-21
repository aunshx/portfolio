import React from 'react'
import PropTypes from 'prop-types'

import Navbar from '../navbar/Navbar'
import { connect } from 'react-redux';

import windowSize from '../../../utils/windowSize';
import VisitorGraph from './charts/VisitorGraph';
import Alerts from '../../layout/Alerts';
import HitsChart from './charts/HitsChart';
import TotalHits from "./blocks/upper/TotalHits";
import TotalColds from './blocks/lower/TotalColds';
import TotalOngoings from "./blocks/lower/TotalOngoings";
import TotalSuccess from "./blocks/lower/TotalSuccess";
import TotalNotReplied from './blocks/lower/TotalNotReplied';
import SynopsisHits from './blocks/upper/SynopsisHits';

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
          <div className='two' style={{ border: "1px solid red" }}>
            <div className='two-one' style={{ border: "1px solid red" }}>
              <TotalHits />
            </div>
            <div className='two-two' style={{ border: "1px solid red" }}>
              <SynopsisHits />
            </div>
            <div className='two-three' style={{ border: "1px solid red" }}>
              l
            </div>
            <div className='two-four' style={{ border: "1px solid red" }}>
              l
            </div>
          </div>
          <div className='three' style={{ border: "1px solid red" }}>
            <HitsChart />
          </div>
          <div className='four' style={{ border: "1px solid red" }}>
            <div className='four-one' style={{ border: "1px solid red" }}>
              <TotalSuccess />
            </div>
            <div className='four-two' style={{ border: "1px solid red" }}>
              <TotalOngoings />
            </div>
            <div className='four-three' style={{ border: "1px solid red" }}>
              <TotalNotReplied />
            </div>
            <div className='four-four' style={{ border: "1px solid red" }}>
              <TotalColds />
            </div>
          </div>
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