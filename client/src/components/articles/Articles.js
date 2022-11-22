import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper} from "@fortawesome/free-solid-svg-icons";
import ArticleOne from './ArticleOne';

import reduxLogo from "../../resources/images/skills/logos/reduxLogo.png";
import reactLogo from "../../resources/images/skills/logos/reactLogo.png";
import nodeLogo from "../../resources/images/skills/logos/nodeLogo.png";
import nodeCronLogo from "../../resources/images/skills/logos/nodeCronLogo.png";
import redditLogo from "../../resources/images/skills/logos/redditLogo.png";
import jsLogo from '../../resources/images/skills/logos/jsLogo.png'

import httpsNodeLogo from '../../resources/images/articles/one.jpeg'
import sendWhatsappMessages from '../../resources/images/articles/two.jpeg'
import automateTasks from '../../resources/images/articles/three.jpeg'
import underTheHood from '../../resources/images/articles/four.jpeg'
import createServerImg from "../../resources/images/articles/five.jpeg";
import funWithReddit from '../../resources/images/articles/funWithReddit.png'


const Articles = ({ innerRef }) => {
  return (
    <div className='app' ref={innerRef}>
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
                "https://aunsh.medium.com/under-the-hood-worst-case-complexities-workings-of-popular-js-array-methods-739d5fef314a"
              }
              description={
                "Get to know the Big O if JS array methods and their working"
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
                { image: reactLogo, alt: "React Logo" },
              ]}
              articleImage={funWithReddit}
              title={"Lazy Loading in React using the Reddit API"}
              runAos={true}
              link={
                "https://aunsh.medium.com/automate-tasks-in-node-with-node-cron-fbb276bdaede"
              }
              description={
                "Show unlimited posts on scroll from subreddits in your React app"
              }
            />
          </div>
          <div className='flex_middle'>
            <ArticleOne
              delay={1000}
              technology={["node", "javascript"]}
              imagesArray={[
                { image: nodeLogo, alt: "Node Logo" },
                { image: jsLogo, alt: "Javascript Logo" },
              ]}
              articleImage={createServerImg}
              title={"Creating a simple server using node and express"}
              runAos={true}
              link={
                "https://aunsh.medium.com/creating-a-server-in-using-node-and-express-1ff36c7fa358"
              }
              description={
                "A simple local server to get you started with backend development"
              }
            />
          </div>
        </div>
        <div className='read-more flex_middle'>
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
    </div>
  );
};

export default Articles;
