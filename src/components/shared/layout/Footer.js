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
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="https://flowbite.com/" className="hover:underline"> अंश बांदिवडेकर</a>. All Rights Reserved.
          </span>
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
