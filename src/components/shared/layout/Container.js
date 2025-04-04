import React from 'react';


const Container = ({ children, className = '', innerRef}) => {
    return (
        <div
        className={`
        w-9/12
        max-w-[1320px]
        xl:max-w-[1200px]
        lg:max-w-[960px]
        md:max-w-[720px]
        sm:max-w-[540px]
        
        px-16
        lg:px-12
        md:px-8
        sm:px-4

        my-14 
        
        mx-auto
        xl:my-12
        lg:my-10
        sm:my-8
        flex
        items-center
        justify-center
        
        ${className}
      `}
        data-aos={'fade-left'}
        ref={innerRef}
        >
            {children}
        </div>
    );
};

export default Container;