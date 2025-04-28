import React, { useEffect, useRef } from 'react';
import cn from 'classnames';

const Container = ({ children, className = '', innerRef, movement, noMargin, customMargin }) => {
    const containerRef = useRef(null);

    const setRefs = (element) => {
        containerRef.current = element;
        if (innerRef) {
            if (typeof innerRef === 'function') {
                innerRef(element);
            } else {
                innerRef.current = element;
            }
        }
    };

    useEffect(() => {
        if (!movement || !containerRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Add animated class when element is visible
                        entry.target.classList.add('animated');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px',
            }
        );

        observer.observe(containerRef.current);

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, [movement]);

    return (
        <div
            className={cn(
                `
        w-9/12
        xl:max-w-[90vw]
        lg:w-full
        flex
        items-center
        justify-center
        px-14
        lg:px-10
        md:px-4
        py-2
        ${movement || ''}
        ${className}
        `,
                { 'my-14 xl:my-10 lg:my-8 sm:my-6': customMargin }
            )}
            ref={setRefs}
        >
            {children}
        </div>
    );
};

export default Container;