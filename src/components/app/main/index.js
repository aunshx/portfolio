import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect, useRef } from 'react';
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { RESUME_LINK } from '../../../resources/constants';

const ContactButtons = ({ link, icon }) => {
    return (
        <a
            href={link ?? 'https://github.com/aunshx'}
            target="_blank"
            rel='noreferrer nofollow'
            className="text-gray-200 hover:text-brand text-sm px-4 py-2 text-center transform hover:scale-110 transition duration-300"
        >
            <FontAwesomeIcon
                icon={icon ?? faGithub}
                style={{
                    fontSize: 30,
                }}
            />
        </a>
    )
};

const TypedText = () => {
    const roles = ["Software Engineer", "UX/UI Developer", "ML Researcher", "Problem Solver",];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [previousIndex, setPreviousIndex] = useState(null);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setPreviousIndex(currentIndex);
            setIsTransitioning(true);

            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % roles.length);
                setIsTransitioning(false);
            }, 500);
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <span className="flex items-center justify-center relative w-full">
            <span
                className={`text-brand transition-all duration-500 ease-in-out absolute
                    ${isTransitioning ? 'opacity-0 transform translate-y-full' : 'opacity-100 transform translate-y-0'}`}
            >
                {roles[currentIndex]}
            </span>

            {previousIndex !== null && (
                <span
                    className={`text-brand transition-all duration-500 ease-in-out absolute
                        ${isTransitioning ? 'opacity-0 transform -translate-y-full' : 'opacity-0 transform translate-y-0'}`}
                >
                    {roles[previousIndex]}
                </span>
            )}
            <span className="opacity-0">{roles[0]}</span>
        </span>
    );
};

const Main = ({ goToFunc }) => {
    return (
        <div className="h-[90vh] flex items-center justify-center relative overflow-hidden px-4 w-full">

            <div className="absolute top-50 right-1/3 w-64 h-64 rounded-full bg-blue-700 opacity-5 blur-3xl"></div>

            <div className="">
                <div className="flex flex-col items-center justify-center gap-16">
                    <div className="flex flex-col items-center justify-center w-full space-y-4">
                        <div className="space-y-3 w-full flex items-center justify-center flex-col" >
                            <div className="text-7xl md:text-7xl font-bold text-white tracking-normal" >
                                <span className="text-brand">A</span>unsh Bandivadekar
                            </div>
                            <div className="text-4xl md:text-3xl text-white text-center gap-x-2 w-full">
                                <span><TypedText /></span>
                            </div>
                        </div>

                        <div className="flex gap-4 pt-6">
                            <div
                                type='button'
                                className="text-gray-100 px-8 py-2 rounded-lg font-semibold hover:bg-opacity-90 transform hover:scale-105 transition duration-300 shadow-lg border-gray-100 border-2 hover:border-brand hover:text-brand"
                                onClick={goToFunc[0]}
                            >
                                My Work
                            </div>
                            <a
                                href={RESUME_LINK} target='_blank' rel='noreferrer nofollow'
                                className="text-gray-100 px-8 py-2 rounded-lg font-semibold hover:bg-opacity-90 transform hover:scale-105 transition duration-300 shadow-lg border-gray-100 border-2 hover:border-brand hover:text-brand"
                            >
                                Résumé
                            </a>
                        </div>
                        <div className="flex flex-wrap gap-4 pt-2">
                            <ContactButtons />
                            <ContactButtons icon={faLinkedin} link={'https://linkedin.com/in/aunsh'} />
                            <ContactButtons icon={faMedium} link={'https://aunsh.medium.com/'} />
                            <ContactButtons icon={faEnvelope} link={'mailto:aunsh.spb@gmail.com'} />
                        </div>
                    </div>

                    <div className="w-3/4">
                        <div className="p-8 bg-gray-900 bg-opacity-60 backdrop-blur-sm rounded-2xl border border-gray-800 shadow-xl transform hover:translate-y-[-5px] transition duration-500" >
                            <h3 className="text-2xl font-semibold mb-4 text-brand">Namaste! 👋</h3>

                            <p className="text-gray-300 text-md">
                                Currently, I am a graduate student at the University of California, Davis focusing on integrating machine learning with AgTech solutions. My research combines data science with practical applications to create sustainable agricultural technologies. Beyond research, I'm passionate about crafting intuitive user experiences that make complex technologies accessible to everyone.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate-bounce" onClick={goToFunc[1]}>
                <div className="text-gray-400 hover:text-brand transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <polyline points="19 12 12 19 5 12"></polyline>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Main;