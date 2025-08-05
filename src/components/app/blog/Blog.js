import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BLOG_LIST, MEDIUM_LINK, VERTICAL_MARGIN } from "../../../resources/constants";
import Title from "../../shared/layout/Title";
import { LinkButton } from "../work/Work";
import Card from './tools/Card';

const Blog = () => {
  return (
    <div className='w-full'>
      <Title
        icon={<FontAwesomeIcon icon={faNewspaper} />}
        title={"Blog"}
      />
      <div className={`flex justify-center w-full flex-wrap gap-16 items-stretch ${VERTICAL_MARGIN}`}>
        {BLOG_LIST.length > 0 && BLOG_LIST.slice(0,4).map(({ technologies, title, link, description, stats }, index) => (
          <div key={index}>
            <Card
              delay={0}
              stats={stats}
              technology={technologies}
              title={title}
              runAos={true}
              link={link}
              description={description}
            />
          </div>
        ))}
      </div>
      <div className={`flex items-center justify-center ${VERTICAL_MARGIN}`}>
        <LinkButton link={MEDIUM_LINK} />
      </div>
    </div>
  );
};

export default Blog;
