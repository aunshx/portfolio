import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import ArticleOne from './ArticleOne';

const Articles = (props) => {
  return <div className='articles'>
    <div className="title flex_middle" data-aos='flip-up'>
      <div style={{ marginRight: '0.5em' }}>
        <FontAwesomeIcon icon={faNewspaper} />
      </div>
      <div>
        Articles
      </div>
    </div>
    <div className="body flex_middle">
       <div className="flex_middle">
        <ArticleOne delay={0} technology={['react', 'redux']} />
     </div>
      <div className="flex_middle">
        <ArticleOne delay={200} technology={['react', 'redux']} />
      </div>
     <div className="flex_middle">
        <ArticleOne delay={400} technology={['node', 'express', 'postman']} />
     </div>
      <div className="flex_middle">
        <ArticleOne delay={600} technology={['react', 'redux']} />
      </div>
     <div className="flex_middle">
        <ArticleOne delay={800} technology={['react', 'node', 'cloudinary']} />
     </div>
      <div className="flex_middle">
        <ArticleOne delay={1000} technology={['node', 'cron']} />
      </div>
    </div>
  </div>;;
};

Articles.propTypes = {};

export default Articles;
