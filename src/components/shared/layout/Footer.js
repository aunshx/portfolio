import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

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
    <footer className="bg-none w-full">
      <div className="mx-auto w-full max-w-screen-xl ">
        <hr className="mb-4 border-gray-200 sm:mx-auto dark:border-gray-700" />
        <div className="flex items-center justify-between text-gray-400 md:flex-col gap-6 md:gap-4 text-md md:text-sm">
          <div>
            Handcrafted with <span className='text-red-500'>&#9829;</span> in CA
          </div>
          <div className="text-sm sm:text-center ">© 2025 अंश बांदिवडेकर
          </div>
          <div className="flex items-center justify-center gap-x-8">
            <ContactButtons />
            <ContactButtons icon={faLinkedin} link={'https://linkedin.com/in/aunsh'} />
            <ContactButtons icon={faMedium} link={'https://aunsh.medium.com/'} />
            <ContactButtons icon={faEnvelope} link={'mailto:aunsh.spb@gmail.com'} />
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {};  

export default Footer;
