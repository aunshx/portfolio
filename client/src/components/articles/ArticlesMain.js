import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

import ArticleOne from './ArticleOne';
import Navbar from '../navbar/Navbar';
import Sidebar from '../navbar/Sidebar';
import Footer from '../layout/Footer';

const Articles = (props) => {
  return<>
  <Navbar />
  <Sidebar />
      <div className="app">
           <div className='articles-main'>
    <div className="title flex_middle" data-aos='flip-up'>
      <div style={{ marginRight: '0.5em' }}>
        <FontAwesomeIcon icon={faNewspaper} />
      </div>
      <div>
        Articles
      </div>
    </div>
    <div className="body flex_middle">
     <div>
        <ArticleOne delay={0} />
     </div>
      <div>
        <ArticleOne delay={200} />
      </div>
     <div>
        <ArticleOne delay={400} />
     </div>
      <div>
        <ArticleOne delay={600} />
      </div>
     <div>
        <ArticleOne delay={800} />
     </div>
      <div>
        <ArticleOne delay={1000} />
      </div>
      <div>
        <ArticleOne delay={600} />
      </div>
     <div>
        <ArticleOne delay={800} />
     </div>
      <div>
        <ArticleOne delay={1000} />
      </div>
    </div>
  </div>
      </div>
  <Footer />
  </>
};

Articles.propTypes = {};

export default Articles;
