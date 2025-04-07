import React from 'react';
import cn from 'classnames'


const Container = ({ children, className = '', innerRef, movement, noMargin, customMargin }) => {
    return (
        <div
        className={cn(`
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
        
        ${className}
      `, {'my-14 xl:my-10 lg:my-8 sm:my-6': customMargin })}
            data-aos={movement ?? 'fade-left'}
        ref={innerRef}
        >
            {children}
        </div>
    );
};

export default Container;