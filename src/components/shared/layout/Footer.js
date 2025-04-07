import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import buyMeACoffeeLogo from '../../../resources/images/buyMeACoffee.png'

export const ContactButtons = ({ link, icon  }) => {
    return (
        <a href={link ?? 'https://github.com/aunshx'} target="_blank" rel='noreferrer nofollow' type="button" class="text-sm hover:text-brand text-gray-400 cursor-pointer">
          <FontAwesomeIcon
              icon={icon ?? faGithub}
              style={{
                  fontSize: 20,
              }}
          />
        </a>
    )
};

const Footer = () => {
  return (
    <footer className="bg-none w-full px-8 lg:px-4">
      <div className="mx-auto w-full max-w-screen-xl ">
        <hr className="mb-4 border-gray-200 sm:mx-auto dark:border-gray-700" />
        <div className="flex items-start justify-between text-gray-400 sm:flex-col gap-6 md:gap-8 text-md">
          <div className="flex items-start xs:items-center justify-center flex-col gap-4">
            <div>
              Handcrafted with <span className=''>&#9829;</span> in CA
            </div>
            <div className="text-sm">If you like this design, feel free to build upon it. <span><a href='https://github.com/aunshx/portfolio' target='_blank' rel='noreferrer nofollow' className='text-gray-400 hover:text-brand underline'>Code</a></span>. <span ><a href='https://opensource.org/license/mit' target='_blank' rel='noreferrer nofollow' className='text-gray-400 hover:text-brand underline'>License</a></span>.
            </div>
            <div className='text-sm'>
              And if you wish..... <a href="https://www.buymeacoffee.com/aunsh" target="_blank" rel='noreferrer nofollow' className='italic text-yellow-600 hover:text-brand'>&#9749; Buy me a coffee?</a>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center justify-center gap-x-8">
              <ContactButtons />
              <ContactButtons icon={faLinkedin} link={'https://linkedin.com/in/aunsh'} />
              <ContactButtons icon={faMedium} link={'https://aunsh.medium.com/'} />
              <ContactButtons icon={faEnvelope} link={'mailto:aunsh.spb@gmail.com'} />
            </div>
          </div>
          

        </div>
      </div>
    </footer>
  );
};


export default Footer;
