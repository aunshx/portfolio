import React, { useEffect, useState } from 'react'
import PullToRefresh from "react-simple-pull-to-refresh";
import { connect } from "react-redux";

import Navbar from "../navbar/Navbar";
import Alerts from "../../common/layout/Alerts";
import Spinner from "../../common/layout/Spinner";
import FooterAdmin from "../../common/layout/FooterAdmin";

import VisitorGraph from './charts/VisitorGraph';
import HitsChart from './charts/HitsChart';
import TotalHits from "./blocks/upper/TotalHits";
import TotalColds from './blocks/lower/TotalColds';
import TotalOngoings from "./blocks/lower/TotalOngoings";
import TotalSuccess from "./blocks/lower/TotalSuccess";
import TotalNotReplied from './blocks/lower/TotalNotReplied';
import SynopsisHits from './blocks/upper/SynopsisHits';
import RecentEmails from './blocks/mid/RecentEmails';
import MessageUpdates from './blocks/mid/MessageUpdates';

const Stats = ({

}) => {
  const [change, setChange] = useState(false);

  useEffect(() => {
    setChange(true);
  }, [change]);

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
          pullingContent={"Refreshing..."}
        >
          <div className='app' style={{ height: "97vh" }}>
            <div
              className={"grabbing"}
              style={{ marginTop: "45px", width: "100%", height: "20px" }}
            ></div>
            <div
              className={"stats-main"}
              style={{
                margin: "0",
              }}
            >
              <div className='first-half'>
                <div
                  className='one flex_middle'
                  // data-aos='fade-up'
                  data-aos-delay={100}
                >
                  <VisitorGraph />
                </div>
                <div
                  className='three'
                  // data-aos='fade-up'
                  data-aos-delay={200}
                >
                  <HitsChart />
                </div>
              </div>
              <div className='second-half'>
                <div
                  className='app'
                  style={{
                    justifyContent: "space-around",
                  }}
                >
                  <div
                    className='flex_middle'
                    // data-aos='fade-up'
                    data-aos-delay={100}
                  >
                    <TotalHits />
                  </div>
                  <div
                    className='flex_middle'
                    // data-aos='fade-up'
                    data-aos-delay={200}
                  >
                    <TotalSuccess />
                  </div>
                  <div
                    className='flex_middle'
                    // data-aos='fade-up'
                    data-aos-delay={300}
                  >
                    <TotalNotReplied />
                  </div>
                  <div
                    className='flex_middle'
                    // data-aos='fade-up'
                    data-aos-delay={400}
                  >
                    <RecentEmails />
                  </div>
                </div>
                <div
                  className='app'
                  style={{
                    justifyContent: "space-around",
                  }}
                >
                  <div
                    className='flex_middle'
                    // data-aos='fade-up'
                    data-aos-delay={500}
                  >
                    <SynopsisHits />
                  </div>
                  <div
                    className='flex_middle'
                    // data-aos='fade-up'
                    data-aos-delay={600}
                  >
                    <TotalOngoings />
                  </div>
                  <div
                    className='flex_middle'
                    // data-aos='fade-up'
                    data-aos-delay={700}
                  >
                    <TotalColds />
                  </div>
                  <div
                    className='flex_middle'
                    // data-aos='fade-up'
                    data-aos-delay={800}
                  >
                    <MessageUpdates />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <FooterAdmin />
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

};

const mapStateToProps = (state) => ({

});

const mapStateToActions = {
};

export default connect(mapStateToProps, mapStateToActions)(Stats)