import React from 'react';

const Title = ({ 
    icon,
    title,
    description
}) => {
  return (
    <div className='main-title text-2xl flex items-center justify-center gap-x-2 font-bold'>
      <div>
        {icon}
      </div>
      {title} 
    </div>
  );
}

export default Title