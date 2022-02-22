import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import PullToRefresh from "react-simple-pull-to-refresh";

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
import RecentEmails from './blocks/mid/RecentEmails';
import Spinner from "../../layout/Spinner";

import {getTotalHitsToday} from '../../../redux/actions/metrics'
import MessageUpdates from './blocks/mid/MessageUpdates';

const Stats = ({}) => {
  const { width } = windowSize();

  const [change, setChange] = useState(false)

  useEffect(() => {
    setChange(true)
  }, [change])

  const refreshingFeed = (offset) => {
    setChange(false);
    return new Promise((resolve) => {
      resolve();
    });
  };

  return (
    <>
      <Navbar />
      {change ? (
        <PullToRefresh
          onRefresh={refreshingFeed}
          refreshingContent={false}
          pullingContent={'Refreshing...'}
        >
          <div className='app'>
            <div className={'grabbing'} style={{ marginTop: '45px' , width: '100%', height: '20px'}}></div>
            <div className={width < 787 ? "stats-main-mobile" : "stats-main"} style={{ marginTop: '0' }}>
              <div
                className='one flex_middle'
                style={{ border: "1px solid red" }}
                data-aos='fade-up'
                data-aos-delay={100}
              >
                <VisitorGraph />
              </div>
              <div className='two' style={{ border: "1px solid red" }}>
                <div
                  className='two-one'
                  style={{ border: "1px solid red" }}
                  data-aos='fade-up'
                  data-aos-delay={100}
                >
                  <TotalHits />
                </div>
                <div
                  className='two-two'
                  style={{ border: "1px solid red" }}
                  data-aos='fade-up'
                  data-aos-delay={200}
                >
                  <SynopsisHits />
                </div>
                <div
                  className='two-three'
                  style={{ border: "1px solid red" }}
                  data-aos='fade-up'
                  data-aos-delay={300}
                >
                  <RecentEmails />
                </div>
                <div
                  className='two-four'
                  style={{ border: "1px solid red" }}
                  data-aos='fade-up'
                  data-aos-delay={400}
                >
                  <MessageUpdates />
                </div>
              </div>
              <div
                className='three'
                style={{ border: "1px solid red" }}
                data-aos='fade-up'
                data-aos-delay={200}
              >
                <HitsChart />
              </div>
              <div className='four' style={{ border: "1px solid red" }}>
                <div
                  className='four-one'
                  style={{ border: "1px solid red" }}
                  data-aos='fade-up'
                  data-aos-delay={500}
                >
                  <TotalSuccess />
                </div>
                <div
                  className='four-two'
                  style={{ border: "1px solid red" }}
                  data-aos='fade-up'
                  data-aos-delay={600}
                >
                  <TotalOngoings />
                </div>
                <div
                  className='four-three'
                  style={{ border: "1px solid red" }}
                  data-aos='fade-up'
                  data-aos-delay={700}
                >
                  <TotalNotReplied />
                </div>
                <div
                  className='four-four'
                  style={{ border: "1px solid red" }}
                  data-aos='fade-up'
                  data-aos-delay={800}
                >
                  <TotalColds />
                </div>
              </div>
            </div>
          </div>
        </PullToRefresh>
      ) : (
        <div className='flex_middle'>
          <div className='not-found flex_middle'>
            <Spinner />
          </div>
        </div>
      )}
      <div>
        <Alerts />
      </div>
    </>
  );
};

Stats.propTypes = {
  settings: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  metrics: PropTypes.object.isRequired,
  getTotalHitsToday: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  settings: state.settings,
  auth: state.auth,
  metrics: state.metrics,
});

const mapStateToActions = {
  getTotalHitsToday,
};

export default connect(mapStateToProps, mapStateToActions)(Stats)