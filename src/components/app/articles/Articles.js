import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Title from "../../shared/layout/Title";
import Card from './tools/Card';
import { ExpandButton } from "../work/Work";
import { ARTICLES_LIST, VERTICAL_MARGIN } from "../../../resources/constants";

const Articles = () => {
  const [currentArticles, setCurrentArticles] = useState(ARTICLES_LIST);

  const [isCollapsed, setIsCollapsed] = useState(false)

  useEffect(() => {
    if (isCollapsed) {
      setCurrentArticles(ARTICLES_LIST)
    } else setCurrentArticles(ARTICLES_LIST.slice(0, 4))
  }, [isCollapsed])

  return (
      <div className='articles w-full'>
        <Title
          icon={<FontAwesomeIcon icon={faNewspaper} />}
          title={"Blog"}
        />
      <div className={`flex justify-center w-full flex-wrap gap-16 items-center ${VERTICAL_MARGIN}`}>
        {currentArticles.length > 0 && currentArticles.map(({ technologies, title, link, description, stats }, index) => (
          <Card
            delay={0}
            stats={stats}
            technology={technologies}
            title={title}
            runAos={true}
            link={link}
            description={description}
            key={index}
          />
        ))}
      </div>
      <a href={'https://aunsh.medium.com/'} className={`flex items-center justify-center ${VERTICAL_MARGIN}`}>
        <ExpandButton isCollapsed={false} />
      </a>
      </div>
  );
};

export default Articles;
