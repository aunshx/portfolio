import React from 'react';

const Tags = ({ logo, text, classGiven }) => {
    
  return (
      <div className={`tags flex_evenly ${classGiven}`}>
                    {logo && <div style={{ objectFit: 'contain', width: '17px', marginTop: '0.3em' }}>
                        <img src={logo} alt="Redux Logo" />
                    </div>}
                    <div className='redux'>
                        {text}
                    </div>
                </div>
  );
};

export default Tags;
