import { faArrowUpRightFromSquare, faTools } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GITHUB_LINK, VERTICAL_MARGIN, WORK_LIST } from '../../../resources/constants';
import Title from '../../shared/layout/Title';
import Card from './tools/Card';

export const LinkButton = ({ link }) => {
  return (
    <a href={link} target='_blank' rel='noreferrer nofollow'>
      <div className="glass-button rounded-lg text-sm px-6 py-3 text-center text-gray-400 hover:text-brand cursor-pointer flex items-center justify-center gap-x-3 w-fit transition-all duration-300 group relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>

        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 liquid-border"></div>

        <div className="relative z-10 flex items-center gap-x-3">
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            style={{ fontSize: 16 }}
            className="group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
          />
          <div className="group-hover:font-semibold transition-all duration-300">
            Show More
          </div>
        </div>

        <div className="absolute top-1 right-2 w-1 h-1 bg-white/30 rounded-full twinkle opacity-0 group-hover:opacity-100"></div>
      </div>
    </a>
  )
};

const Work = () => {
  return (
    <div className='w-full items-center justify-center'>
      <Title icon={<FontAwesomeIcon icon={faTools} />} title={'Work'} />
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