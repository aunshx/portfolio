import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import ImageWithLoader from '../../../shared/layout/ImageContainer';

const ContactButtons = ({ link, icon, tooltip }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a
            href={link ?? 'https://github.com/aunshx'}
            target="_blank"
            rel='noreferrer nofollow'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="glass-button h-8 w-8 rounded-full text-gray-300 hover:text-brand cursor-pointer transition-all duration-300 group relative overflow-hidden flex items-center justify-center"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>

            <FontAwesomeIcon
                icon={icon ?? faGithub}
                style={{ fontSize: 18 }}
                className={`relative z-10 transition-all duration-300 ${isHovered ? 'scale-110' : ''}`}
            />
            {isHovered && tooltip && (
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 glass-button px-2 py-1 rounded text-xs text-white whitespace-nowrap">
                    {tooltip}
                </div>
            )}
        </a>
    )
};

const Card = ({
    title,
    subTitle,
    description,
    image,
    gitUrl,
    link,
    tag,
    tech = []
}) => {
    return (
        <div className="flex items-center justify-center h-full">
            <a href={link} target='_blank' rel='noreferrer nofollow' className="h-full block group">
                <div
                    className='glass-card max-w-md h-full rounded-2xl hover:scale-105 transition-all duration-500 text-white grid grid-rows-[auto_1fr] relative overflow-hidden'
                >
                    <div className="overflow-hidden rounded-t-2xl group/image">
                        <ImageWithLoader
                            src={image}
                            alt={`${title} Logo`}
                            className={`rounded-t-2xl w-full object-cover`}
                        />
                    </div>

                    <div className="flex flex-col justify-between p-6 h-full relative z-10">
                        <div className='flex flex-col gap-3'>
                            <div className="flex items-center justify-start md:flex-col gap-2">
                                <div className="text-lg font-bold tracking-tight group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                                    {title}
                                </div>
                                <span className='text-gray-500 md:hidden text-sm'>
                                    &#8226;
                                </span>
                                <div className='font-normal text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300'>
                                    {subTitle}
                                </div>
                            </div>
                            <p className="font-normal text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                                {description}
                            </p>
                            {tech && tech.length > 0 && (
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {tech.slice(0, 4).map((technology, index) => (
                                        <div
                                            key={index}
                                            className="glass-button text-xs px-2 py-1 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                                        >
                                            {technology}
                                        </div>
                                    ))}
                                    {tech.length > 4 && (
                                        <div className="glass-button text-xs px-2 py-1 rounded-full text-gray-500">
                                            +{tech.length - 4} more
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                        <div className='flex items-center justify-between gap-4 lg:gap-6 text-md w-full lg:flex-col mt-6'>
                            <div className="flex items-center justify-start gap-x-4">
                                {title !== 'Cultivision' && title !== 'FRREDSS' && gitUrl && (<ContactButtons icon={faGithub} link={gitUrl} tooltip="View Code" />)}
                                <ContactButtons icon={faArrowUpRightFromSquare} link={link} tooltip="App Link" />
                            </div>

                            {tag && tag.length > 0 && (
                                <div className='glass-button px-3 py-2 rounded-lg text-gray-300 flex items-center justify-center gap-x-2 text-xs group/tag relative overflow-hidden'>
                                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 opacity-0 group-hover/tag:opacity-100 transition-opacity duration-300 rounded-lg"></div>

                                    <FontAwesomeIcon
                                        icon={faStar}
                                        className="text-violet-400 relative z-10 group-hover/tag:scale-110 transition-transform duration-300"
                                    />
                                    <span className="relative z-10 group-hover/tag:text-white transition-colors duration-300">
                                        {tag}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Card