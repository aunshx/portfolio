import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import ArticleOne from './ArticleOne';

import articleImage from "../../resources/images/default.jpg";
import reduxLogo from "../../resources/images/reduxLogo.png";
import reactLogo from "../../resources/images/reactLogo.png";
import nodeLogo from "../../resources/images/nodeLogo.png";
import psqlLogo from "../../resources/images/psqlLogo.png";
import nodeCronLogo from "../../resources/images/nodeCronLogo.png";
import jwtLogo from "../../resources/images/jwtLogo.png";
import axiosLogo from "../../resources/images/axiosLogo.png";
import redditLogo from "../../resources/images/redditLogo.png";
import jsLogo from '../../resources/images/jsLogo.png'

import httpsNodeLogo from '../../resources/articles/one.jpeg'
import sendWhatsappMessages from '../../resources/articles/two.jpeg'
import automateTasks from '../../resources/articles/three.jpeg'
import underTheHood from '../../resources/articles/four.jpeg'


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
              technology={["node", "https"]}
              imagesArray={[{ image: nodeLogo, alt: "Node Logo" }]}
              articleImage={httpsNodeLogo}
              title={
                "Enable HTTPS for Localhost During Local Development in Node.js"
              }
              runAos={true}
              link={
                "https://javascript.plainenglish.io/enable-https-for-localhost-during-local-development-in-node-js-96204453d72b"
              }
              description={
                "A tutorial on how to go from http://localhost:PORT to https://localhost:PORT."
              }
            />
          </div>
          <div className='flex_middle'>
            <ArticleOne
              delay={200}
              technology={["react", "redux"]}
              imagesArray={[
                { image: reactLogo, alt: "React Logo" },
                { image: reduxLogo, alt: "Redux Logo" },
              ]}
              articleImage={sendWhatsappMessages}
              title={"How to Send WhatsApp Messages From Your React App Easily"}
              runAos={true}
              link={
                "https://javascript.plainenglish.io/send-whatsapp-web-messages-in-react-easily-3bf2a82a2eb2"
              }
              description={
                "A very simple way to send messages on WhatsApp web in React."
              }
            />
          </div>
          <div className='flex_middle'>
            <ArticleOne
              delay={400}
              technology={["javascript"]}
              imagesArray={[{ image: jsLogo, alt: "Javascript Logo" }]}
              articleImage={underTheHood}
              title={
                "Under the hood: Worst case complexities & working  of all JS array methods"
              }
              runAos={true}
              link={
                "https://aunsh.medium.com/automate-tasks-in-node-with-node-cron-fbb276bdaede"
              }
              description={
                "Make your life easier by automating mundane tasks with node-cron"
              }
            />
          </div>
          <div className='flex_middle'>
            <ArticleOne
              delay={600}
              technology={["node", "node-cron"]}
              imagesArray={[
                { image: nodeLogo, alt: "Node Logo" },
                { image: nodeCronLogo, alt: "Node Cron Logo" },
              ]}
              articleImage={automateTasks}
              title={"Automate tasks in node with node-cron"}
              runAos={true}
              link={
                "https://aunsh.medium.com/automate-tasks-in-node-with-node-cron-fbb276bdaede"
              }
              description={
                "Make your life easier by automating mundane tasks with node-cron"
              }
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

export default Articles;
