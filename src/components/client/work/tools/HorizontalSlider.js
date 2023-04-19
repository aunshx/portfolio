import React from "react";

const HorizontalSlider = ({
  companies,
  changeCurrentIndex,
  currentIndex,
  glowOn,
}) => {
  return (
    <div className='list flex_middle'>
      {companies.length > 0 &&
        companies.map((element, index) => (
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
            {element.name}
          </div>
        ))}
    </div>
  );
};

export default HorizontalSlider;
