import { faArrowUpRightFromSquare, faTools } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GITHUB_LINK, VERTICAL_MARGIN, WORK_LIST } from '../../../resources/constants';
import Title from '../../shared/layout/Title';
import Card from './tools/Card';

export const LinkButton = ({ link }) => {
  return (
    <a href={link} target='_blank' rel='noreferrer nofollow' type="button" className="rounded-lg text-sm px-4 py-2 text-center border-[1px] border-gray-300 text-gray-400 hover:border-brand hover:text-brand hover:bg-none focus:ring-gray-800 cursor-pointer flex items-center justify-center gap-x-2 w-fit">
      <FontAwesomeIcon
        icon={faArrowUpRightFromSquare}
        style={{
          fontSize: 15,
        }}
      />
      <div>
        {'Show More'}
      </div>
    </a>
  )
};


const Work = () => {
  return (
    <div className='w-full items-center justify-center'>
      <Title
        icon={<FontAwesomeIcon icon={faTools} />}
        title="Work"
      />
      <div className={`grid grid-cols-2 gap-16 ${VERTICAL_MARGIN} lg:flex lg:flex-col lg:items-center lg:justify-center`}>
        {WORK_LIST.map((project, index) => (
          <Card
            key={project.id}
            title={project.title}
            subTitle={project.subTitle}
            description={project.description}
            image={project.image}
            tech={project.tech}
            gitUrl={project.gitUrl}
            link={project.link}
            tag={project.tag}
            isReversed={index % 2 !== 0}
          />
        ))}
      </div>
      <div className={`flex items-center justify-center ${VERTICAL_MARGIN}`}>
        <LinkButton link={GITHUB_LINK} />
      </div>
    </div>
  );
};


export default Work;