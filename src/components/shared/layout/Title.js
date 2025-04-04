import React from 'react';

const Title = ({ 
    icon,
    title,
    description
}) => {
  return (
    <div className='main-title text-2xl mb-8 flex items-center justify-center gap-x-2' >
      <div>
        {icon}
      </div>
      {title} 
    </div>
  );
}

export default Title