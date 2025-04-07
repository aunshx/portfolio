import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { RESUME_LINK } from '../../../resources/constants';
import asxPortfolio from '../../../resources/images/asxPortfolio.jpeg';
import useWindow from 'react-window-size-simple';

const ContactButtons = ({ link, icon }) => {
    const { width } = useWindow();

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
                    fontSize: width < 600 ? 20 : 30,
                }}
            />
        </a>
    )
};

const TypedText = () => {
    const roles = ["Software Engineer", "Fullstack Developer", "ML/Ag Researcher"];
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <div className="min-h-[95vh] md:mt-1 flex items-center justify-start relative  px-4 w-full">
            <div className="lg:hidden absolute top-10 right-1/3 w-64 h-64 rounded-full bg-blue-400 opacity-5 blur-3xl"></div>

            <div className="w-full max-w-7xl">
                <div className="flex flex-col items-center justify-between gap-4 lg:gap-6 w-full">
                    <div className="w-full flex flex-col items-center space-y-6">
                        <div className="relative w-44 h-44 xl:w-40 xl:h-40 md:w-30 md:h-30 rounded-full overflow-hidden border-2 border-brand shadow-lg mb-2">
                            <img
                                src={asxPortfolio}
                                alt="Aunsh Bandivadekar"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="space-y-2 w-full flex items-center justify-center flex-col">
                            <div id="main-name" className="text-6xl lg:text-4xl md:text-2xl font-bold text-white tracking-normal text-center">
                                Aunsh Bandivadekar
                            </div>
                            <div className="text-3xl lg:text-2xl md:text-xl text-white text-center lg:text-left w-full">
                                <span><TypedText /></span>
                            </div>
                        </div>
                        <div className="flex gap-4 pt-1">
                            <div
                                type='button'
                                className="text-gray-100 px-8 py-2 md:px-4 md:py-1 md:border-1 md:text-sm rounded-lg font-semibold hover:bg-opacity-90 transform hover:scale-105 transition duration-300 shadow-lg border-gray-100 border-2 hover:border-brand hover:text-brand flex items-center justify-center"
                                onClick={goToFunc[0]}
                            >
                                My Work
                            </div>
                            <a
                                href={RESUME_LINK} target='_blank' rel='noreferrer nofollow'
                                className="text-gray-100 px-8 py-2 md:px-4 md:py-1 md:border-1 md:text-sm rounded-lg font-semibold hover:bg-opacity-90 transform hover:scale-105 transition duration-300 shadow-lg border-gray-100 border-2 hover:border-brand hover:text-brand flex items-center justify-center"
                            >
                                Résumé
                            </a>
                        </div>
                        <div className="flex flex-wrap gap-4 pt-1 justify-center items-center lg:justify-start lg:gap-2">
                            <ContactButtons />
                            <ContactButtons icon={faLinkedin} link={'https://linkedin.com/in/aunsh'} />
                            <ContactButtons icon={faMedium} link={'https://aunsh.medium.com/'} />
                            <ContactButtons icon={faEnvelope} link={'mailto:aunsh.spb@gmail.com'} />
                        </div>
                    </div>

                    <div className="w-full flex items-center justify-center">
                        <div className="w-full max-w-2xl lg:max-w-lg transform hover:translate-y-[-5px] transition duration-500">
                            <div className="p-8 bg-gray-900 bg-opacity-60 backdrop-blur-sm opacity-80 rounded-2xl border border-gray-800 shadow-xl w-full text-white text-md md:text-sm">
                                <span className="text-lg text-brand">Namaste! 👋</span>
                                , I'm a Software and ML Engineer currently pursuing my MS in Electrical and Computer Engineering at UC Davis. I love building impactful visualizations and data-driven software systems that solve real-world problems. 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex items-center justify-center animate-bounce mt-8" onClick={goToFunc[1]}>
                    <div className="text-gray-400 hover:text-brand transition-colors duration-300">
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