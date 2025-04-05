import React from 'react';
import cn from 'classnames'


const Container = ({ children, className = '', innerRef, movement, noMargin, customMargin }) => {
    return (
        <div
        className={cn(`
        w-9/12
        xl:w-full
        max-w-[1320px]
        lg:max-w-[960px]
        md:max-w-[720px]
        
        flex
        items-center
        justify-center

        px-14
        lg:px-10
        md:px-4
        sm:px-2
        mx-auto

        my-16 xl:my-12 lg:my-10 sm:my-8
        
        ${className}
      `, {'my-0': customMargin })}
            data-aos={movement ?? 'fade-left'}
        ref={innerRef}
        style={{ border: '1px solid blue' }}
        >
            {children}
        </div>
    );
};

export default Container;