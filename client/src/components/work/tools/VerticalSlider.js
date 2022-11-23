import React from 'react'

const VerticalSlider = ({ companies, changeCurrentIndex, currentIndex, glowOn }) => {
  return (
    <div className='list app' style={{ alignItems: "flex-start" }}>
      {companies.length > 0 &&
        companies.map((name, index) => (
          <div
            className={
              glowOn
                ? "name name-glow"
                : currentIndex === index
                ? "name name-current"
                : "name"
            }
            key={index}
            onClick={(e) => changeCurrentIndex(index)}
          >
            {name}
          </div>
        ))}
    </div>
  );
}

export default VerticalSlider