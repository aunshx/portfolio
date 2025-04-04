import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const DEFAULT_DECRIPTION = ': Some tools I use quite often'

const Title = ({ 
    icon,
    title,
    description
}) => {
  return (
    <div className='main-title text-2xl mb-6 flex items-center justify-center gap-x-2' >
      <div>
        {icon}
      </div>
      {title} 
      {/* <div className='text-lg' data-aos='fade-in' data-aos-delay={500}>{description ?? DEFAULT_DECRIPTION}</div> */}
    </div>
  );
}

export default Title