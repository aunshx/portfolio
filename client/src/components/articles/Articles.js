import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import ArticleOne from './ArticleOne';

const Articles = (props) => {
  return <div className='articles'>
    <div className="title flex_middle">
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
    </div>
  </div>;;
};

Articles.propTypes = {};

export default Articles;
