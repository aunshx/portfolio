import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { EMAIL_LINK, GITHUB_LINK, LICENSE, LINKEDIN_LINK, MEDIUM_LINK } from '../../../resources/constants';

export const ContactButtons = ({ link, icon, title='Github'  }) => {
    return (
        <a href={link ?? GITHUB_LINK} target="_blank" rel='noreferrer nofollow' type="button" class="text-sm hover:text-brand text-gray-300 flex items-center justify-center gap-2">
          <FontAwesomeIcon
              icon={icon ?? faGithub}
              style={{
                  fontSize: 20,
              }}
          />
          <div className='text-sm'>
          {title}
          </div>
        </a>
    )
};

const Footer = () => {
  return (
    <footer className="bg-none w-full px-8 lg:px-4">
      <div className="mx-auto w-full max-w-screen-xl ">
        <hr className="mb-4 border-gray-200 sm:mx-auto dark:border-gray-700" />
        <div className="flex items-start justify-between text-gray-400 sm:flex-col gap-6 md:gap-8 text-sm">
          <div className="flex items-start xs:items-center justify-center flex-col gap-4">
            <div className='text-gray-300'>
              Forged with <span className=''>&#128293;
              </span> in CA
            </div>
            <div className="text-sm">
              Commemorating ISRO's <a href="https://en.wikipedia.org/wiki/GSLV_F15" target='_blank' rel='noreferrer nofollow' className='text-gray-400 hover:text-brand underline'>100th rocket launch<sup>*</sup></a> &#128640; & <a href="https://www.apple.com/os/ios/" target='_blank' rel='noreferrer nofollow' className='text-gray-400 hover:text-brand underline'>iOS 26</a>
            </div>
            {/* <div className="text-sm">If you like this design, feel free to build upon it. <span><a href='https://github.com/aunshx/portfolio' target='_blank' rel='noreferrer nofollow' className='text-gray-400 hover:text-brand underline'>Code</a></span>. <span ><a href={LICENSE} target='_blank' rel='noreferrer nofollow' className='text-gray-400 hover:text-brand underline'>License</a></span>.
            </div> */}
            <div className='text-xs'>
              v5.0.0 &#8226; 2025 &#8226; अन्नपूर्णा
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-start justify-center gap-4">
              <ContactButtons icon={faEnvelope} link={EMAIL_LINK} title={'Mail'} />
              <ContactButtons /> 
              <ContactButtons icon={faLinkedin} link={LINKEDIN_LINK} title={'Linkedin'} />
              <ContactButtons icon={faMedium} link={MEDIUM_LINK} title={'Medium'} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
