import React from 'react';

const Title = ({ 
    icon,
    title,
    description
}) => {
  return (
    <div className="flex items-center gap-4 justify-center">
      <div className="text-brand text-2xl">
        {icon}
      </div>
      <div>
        <h2 className="text-2xl font-bold text-white">
          {title}
        </h2>
      </div>
    </div>
  );
}

export default Title