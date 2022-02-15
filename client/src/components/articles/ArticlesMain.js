import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faNewspaper } from '@fortawesome/free-solid-svg-icons';

import ArticleOne from './ArticleOne';
import Navbar from '../navbar/Navbar';
import Sidebar from '../navbar/Sidebar';
import Footer from '../layout/Footer';

import BackgroundLarge from "../main/BackgroundLarge";
import BackgroundMedium from "../main/BackgroundMedium";
import BackgroundSmall from "../main/BackgroundSmall";
import BackgroundTiny from "../main/BackgroundTiny";

import windowSize from "../../utils/windowSize";

const ArticlesMain = ({
  sidebar: { hover }
}) => {

  const { width, height } = windowSize();
  return (
    <>
      <Navbar />
      <Sidebar hover={hover} />
      <div>
        {width > 1280 && <BackgroundLarge />}
        {900 > width && width <= 1280 && <BackgroundMedium />}
        {600 > width && width <= 900 && <BackgroundSmall />}
        {width <= 600 && <BackgroundTiny />}
      </div>
      <div className='app'>
        <div className='articles-main'>
          <div className='title flex_middle' data-aos='flip-up'>
            <div style={{ marginRight: "0.5em" }}>
              <FontAwesomeIcon icon={faNewspaper} />
            </div>
            <div>Articles</div>
          </div>
          <div className='body flex_middle'>
            <div className='flex_middle'>
              <ArticleOne delay={0} technology={["react", "redux"]} />
            </div>
            <div className='flex_middle'>
              <ArticleOne delay={200} technology={["react", "redux"]} />
            </div>
            <div className='flex_middle'>
              <ArticleOne
                delay={400}
                technology={["node", "express", "postman"]}
              />
            </div>
            <div className='flex_middle'>
              <ArticleOne delay={600} technology={["react", "redux"]} />
            </div>
            <div className='flex_middle'>
              <ArticleOne
                delay={800}
                technology={["react", "node", "cloudinary"]}
              />
            </div>
            <div className='flex_middle'>
              <ArticleOne delay={1000} technology={["node", "cron"]} />
            </div>
          </div>
        </div>
        <div className='read-more flex_middle'>
          <FontAwesomeIcon icon={faBook} />
          <div className='ft-bold' style={{ marginLeft: "0.5em" }}>
            <a
              href='https://aunsh.medium.com'
              rel='noreferrer nofollow'
              target='_blank'
            >
              Read More
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

ArticlesMain.propTypes = {
  sidebar: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  sidebar: state.sidebar,
});

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(ArticlesMain);

