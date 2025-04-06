import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ContactButtons = ({ link, icon }) => {
    return (
        <a href={link ?? 'https://github.com/aunshx'} target="_blank" rel='noreferrer nofollow' type="button" class="text-gray-900 hover:text-white hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg dark:text-gray-300 dark:hover:border-brand dark:hover:text-brand dark:hover:bg-none dark:focus:ring-gray-800 cursor-pointer">
            <FontAwesomeIcon
                icon={icon ?? faGithub}
                style={{
                    fontSize: 20,
                }}
            />
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
    tag
}) => {
    return (
        <div className="grid grid-cols-1 h-full">
            <a href={link} target='_blank' rel='noreferrer nofollow' className="h-full">
                <div className='max-w-md h-full border-2 opacity-70 border-zinc-800 bg-zinc-900 rounded-lg hover:scale-105 transition hover:border-brand hover:text-brand text-white grid grid-rows-[auto_1fr]'>
                    <div>
                        <img className="rounded-t-lg w-full" src={image} alt={`${title} Logo`} style={{ maxHeight: '250px', objectFit: 'cover' }} />
                    </div>
                    <div className="flex flex-col justify-between p-4 h-full">
                        <div className='flex flex-col gap-2'>
                            <div className="flex items-center justify-start gap-1">
                                <div className="text-lg font-bold tracking-tight">{title}</div>
                                <span>
                                    &#8226;
                                </span>
                                <div className='font-normal text-gray-400 text-md'>
                                    {subTitle}
                                </div>
                            </div>
                            <p className="font-normal text-sm text-gray-300 mb-3">{description}</p>
                        </div>
                        <div className='flex items-center justify-between gap-2 text-md w-full lg:flex-col mt-4'>
                            <div className="flex items-center justify-start gap-x-8">
                                <ContactButtons icon={faGithub} link={gitUrl} />
                                <ContactButtons icon={faArrowUpRightFromSquare} link={link} />
                            </div>
                            {tag.length > 0 && (
                                <div
                                    className='border px-2 py-1 rounded-md border-violet-500 hover:text-gray-300 flex items-center justify-center gap-x-1 text-xs'>
                                    <FontAwesomeIcon icon={faStar} />
                                    <span>
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