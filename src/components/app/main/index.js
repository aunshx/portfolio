import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactButtons = ({ link, icon  }) => {
    return (
        <a href={link ?? 'https://github.com/aunshx'} target="_blank" rel='noreferrer nofollow' type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-sm px-6 py-1 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:border-brand dark:hover:text-brand dark:hover:bg-none dark:focus:ring-gray-800 cursor-pointer">
            <FontAwesomeIcon
                icon={icon ?? faGithub}
                style={{
                    fontSize: 20,
                }}
            />
        </a>
    )
};

const Main = () => {
    return (
        <div className='grid grid-cols-2 items-start justify-center lg:flex lg:flex-col text-white text-left gap-x-8 mt-16'>
            <div className="flex flex-col gap-y-2">
                <div className="text-5xl">
                    <span className='text-brand'>A</span>unsh Bandivadekar
                </div>
                <div className='text-2xl'>
                    Software Engineer & Researcher
                </div>
                <div className="flex mt-4 gap-x-4">
                    <ContactButtons />
                    <ContactButtons icon={faLinkedin} link={'https://linkedin.com/in/aunsh'} />
                    <ContactButtons icon={faMedium} link={'https://aunsh.medium.com/'} />
                    <ContactButtons icon={faEnvelope} link={'mailto:aunsh.spb@gmail.com'} />
                </div>
            </div>
            <div className=''>
                Namaste! My name is Aunsh and in my 26 years on this planet, I've been a national-level cyclist, engineering student, award-winning researcher, high school teacher and a software developer.
                <div className="mt-2">
                I believe that technology should be as ergonomic as it is complex. Currently, I am a graduate student at the University of California, Davis researching the applications of machine learning in AgTech as well as crafting memorable UXs.
                </div>
            </div>
        </div>
    );
};

const index = () => {
  return (
    <Main />
  )
}

export default index