import React from 'react'

const Title = ({ 
    icon,
    title
}) => {
  return (
    <div className='main-title flex_middle' data-aos='flip-down' >
      <div style={{ marginRight: "0.5em" }}>
        {icon}
      </div>
      <div>{title}</div>
    </div>
  );
}

export default Title