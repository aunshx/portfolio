import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ContactButtons = ({ link, icon  }) => {
    return (
        <a href={link ?? 'https://github.com/aunshx'} target="_blank" rel='noreferrer nofollow' type="button" class="text-gray-900 hover:text-white hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg dark:text-gray-400 dark:hover:border-brand dark:hover:text-brand dark:hover:bg-none dark:focus:ring-gray-800 cursor-pointer">
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
}) => {
  return (
      <a href = { link } target = '_blank' rel = 'noreferrer nofollow' className="max-w-md max-h-xl bg-none border-2 border-gray-800 rounded-lg hover:scale-105 transition general-card hover:text-brand dark:hover:border-brand dark:hover:text-brand">
          <a href={link} target='_blank' rel='noreferrer nofollow'>
              <img className="rounded-t-lg" src={image} alt="" style={{ maxHeight: '250px' }} />
          </a>
          <div className="flex flex-col items-start justify-around p-4 gap-y-2">
              <div className='flex flex-col gap-y-2'>
                  <div className="text-lg font-bold tracking-tight">{title} {subTitle}</div>
                  <p className="font-normal text-sm text-gray-700 dark:text-gray-400 mb-3">{description}</p>
              </div>
               <div className="flex items-center justify-start gap-x-8">
                  <ContactButtons icon={faGithub} link={gitUrl} />
                  <ContactButtons icon={faArrowUpRightFromSquare} link={link} />
                </div>
          </div>
      </a>

  )
}

export default Card