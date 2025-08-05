import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { EMAIL_LINK, GITHUB_LINK, LINKEDIN_LINK, MEDIUM_LINK, RESUME_LINK } from '../../../resources/constants';
import asxPortfolio from '../../../resources/images/asxPortfolio.jpeg';
import useWindow from 'react-window-size-simple';
import ImageWithLoader from '../../shared/layout/ImageContainer';

const ContactButtons = ({ link, icon }) => {
    const { width } = useWindow();

    return (
        <a
            href={link ?? GITHUB_LINK}
            target="_blank"
            rel='noreferrer nofollow'
            className="text-gray-200 hover:text-brand text-sm px-4 py-2 text-center transform hover:scale-110 transition duration-300 rounded-full"
        >
            <FontAwesomeIcon
                icon={icon ?? faGithub}
                style={{
                    fontSize: width < 600 ? 20 : 30,
                }}
            />
        </a>
    )
};

const TypedText = () => {
    const roles = ["Software Engineer", "ML/Ag Researcher", "Homo Sapien"];
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
        <div className="min-h-[95vh] md:mt-1 flex items-center justify-start relative px-4 w-full">
            <div className="w-full max-w-7xl">
                <div className="flex flex-col items-center justify-between gap-4 lg:gap-6 w-full">
                    <div className="w-full flex flex-col items-center space-y-6">
                        <div className="relative w-44 h-44 xl:w-40 xl:h-40 md:w-30 md:h-30 rounded-full overflow-hidden glass-card-img mb-2">
                            <ImageWithLoader
                                src={asxPortfolio}
                                alt="Aunsh Bandivadekar"
                                className="w-full h-full object-cover relative group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="space-y-2 w-full flex items-center justify-center flex-col">
                            <div id="main-name" className="text-6xl lg:text-4xl md:text-2xl font-bold text-white tracking-normal text-center bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                                Aunsh Bandivadekar
                            </div>
                            <div className="text-3xl lg:text-2xl md:text-lg text-white text-center lg:text-left w-full">
                                <span><TypedText /></span>
                            </div>
                        </div>
                        <div className="flex gap-4 pt-1">
                            <div
                                type='button'
                                className="glass-button text-gray-100 px-8 py-2 md:px-4 md:py-1 md:text-sm rounded-lg font-semibold hover:bg-opacity-90 transform hover:scale-105 transition duration-300 shadow-lg flex items-center justify-center"
                                onClick={goToFunc[0]}
                            >
                                My Work
                            </div>
                            <a
                                href={RESUME_LINK}
                                target='_blank'
                                rel='noreferrer nofollow'
                                className="glass-button text-gray-100 px-8 py-2 md:px-4 md:py-1 md:text-sm rounded-lg font-semibold hover:bg-opacity-90 transform hover:scale-105 transition duration-300 shadow-lg flex items-center justify-center"
                            >
                                Résumé
                            </a>
                        </div>
                        <div className="flex flex-wrap gap-4 pt-1 justify-center items-center lg:justify-start lg:gap-2">
                            <ContactButtons />
                            <ContactButtons icon={faLinkedin} link={LINKEDIN_LINK} />
                            <ContactButtons icon={faMedium} link={MEDIUM_LINK} />
                            <ContactButtons icon={faEnvelope} link={EMAIL_LINK} />
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-center">
                        <div className="w-full max-w-2xl lg:max-w-lg transform hover:translate-y-[-5px] transition duration-500">
                            <div className="glass-card p-8 w-full text-white text-md md:text-sm relative overflow-hidden">
                                <div className="absolute inset-0 opacity-10">
                                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 animate-pulse"></div>
                                </div>

                                <div className="relative z-10">
                                    <span className="text-lg text-brand font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                        Namaste! 👋
                                    </span>
                                    <span className="ml-1">
                                        I'm a Software and ML Engineer currently pursuing my MS in Electrical and Computer Engineering at UC Davis. I love building impactful visualizations and data-driven software systems that solve real-world problems.
                                    </span>
                                </div>
                                <div className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full twinkle"></div>
                                <div className="absolute bottom-6 left-6 w-1 h-1 bg-blue-400/60 rounded-full twinkle" style={{ animationDelay: '1s' }}></div>
                                <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-purple-400/40 rounded-full twinkle" style={{ animationDelay: '2s' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex items-center justify-center animate-bounce mt-8" onClick={goToFunc[1]}>
                    <div className="glass-button p-3 rounded-full text-gray-400 hover:text-brand transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <polyline points="19 12 12 19 5 12"></polyline>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;