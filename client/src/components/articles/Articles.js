import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import ArticleOne from './ArticleOne';

import articleImage from "../../resources/images/default.jpg";
import defaultImg from "../../resources/images/default.jpg";
import reduxLogo from "../../resources/images/reduxLogo.png";
import reactLogo from "../../resources/images/reactLogo.png";
import jsLogo from "../../resources/images/jsLogo.png";
import nodeLogo from "../../resources/images/nodeLogo.png";
import psqlLogo from "../../resources/images/psqlLogo.png";
import bodingaLogo from "../../resources/images/bodingaLogo.png";
import nodeCronLogo from "../../resources/images/nodeCronLogo.png";
import jwtLogo from "../../resources/images/jwtLogo.png";
import axiosLogo from "../../resources/images/axiosLogo.png";
import cloudinaryLogo from "../../resources/images/cloudinaryLogo.png";
import redditLogo from "../../resources/images/redditLogo.png";


const Articles = (props) => {
  return (
    <div className='app'>
      <div className='articles'>
        <div className='title flex_middle' data-aos='flip-up'>
          <div style={{ marginRight: "0.5em" }}>
            <FontAwesomeIcon icon={faNewspaper} />
          </div>
          <div>Articles</div>
        </div>
        <div className='body'>
          <div className='flex_middle'>
            <ArticleOne
              delay={0}
              technology={["jwt", "node", "react", "redux"]}
              imagesArray={[
                { image: jwtLogo, alt: "JWT Logo" },
                { image: nodeLogo, alt: "Node Logo" },
                { image: reactLogo, alt: "React Logo" },
                { image: reduxLogo, alt: "Redux Logo" },
              ]}
              articleImage={articleImage}
              title={"Login authentication using JWT in React"}
              runAos={true}
            />
          </div>
          <div className='flex_middle'>
            <ArticleOne
              delay={200}
              technology={["node", "node-cron"]}
              imagesArray={[
                { image: nodeLogo, alt: "Node Logo" },
                { image: nodeCronLogo, alt: "Node Cron Logo" },
              ]}
              articleImage={articleImage}
              title={"Automated tasks in node with node-cron"}
              runAos={true}
            />
          </div>
          <div className='flex_middle'>
            <ArticleOne
              delay={400}
              technology={["react", "axios"]}
              imagesArray={[
                { image: reactLogo, alt: "React Logo" },
                { image: axiosLogo, alt: "Axios Logo" },
              ]}
              articleImage={articleImage}
              title={"Lazy loading on scroll in react"}
              runAos={true}
            />
          </div>
          <div className='flex_middle'>
            <ArticleOne
              delay={600}
              technology={["node", "axios", "node-cron"]}
              imagesArray={[
                { image: nodeLogo, alt: "Node Logo" },
                { image: axiosLogo, alt: "Axios Logo" },
                { image: nodeCronLogo, alt: "Node Cron Logo" },
              ]}
              articleImage={articleImage}
              title={"Web-parser to analyse best restaurant offers on Zomato"}
              runAos={true}
            />
          </div>
          <div className='flex_middle'>
            <ArticleOne
              delay={800}
              technology={["reddit", "node", "snoowrap", "react"]}
              imagesArray={[
                { image: redditLogo, alt: "Reddit Logo" },
                { image: nodeLogo, alt: "Node Logo" },
                { image: psqlLogo, alt: "Postgres Logo" },
                { image: reactLogo, alt: "React Logo" },
              ]}
              articleImage={articleImage}
              title={"Showcase and store memes using reddit api in react app"}
              runAos={true}
            />
          </div>
          <div className='flex_middle'>
            <ArticleOne
              delay={1000}
              technology={["react", "redux", "jwt"]}
              imagesArray={[
                { image: psqlLogo, alt: "Postgres Logo" },
                { image: reactLogo, alt: "React Logo" },
                { image: reduxLogo, alt: "Redux Logo" },
                { image: nodeLogo, alt: "Node Logo" },
              ]}
              articleImage={articleImage}
              title={"Live search in app using postgres"}
              runAos={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Articles.propTypes = {};

export default Articles;
