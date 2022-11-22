import React from 'react'

import CloseIcon from "@mui/icons-material/Close";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

import defaultImg from "../../../resources/images/default/default.jpg";

const BigPic = ({
  close,
  pics,
  currentIndex,
  increaseCurrentIndex,
  decreaseCurrentIndex,
  displayMode,
  isLoading,
  onLoad,
  width,
}) => {
  return (
    <div className='big-pic'>
      <div
        className={displayMode ? "individual individual--dark" : "individual"}
        style={{ padding: "0.2em" }}
      >
        <div className='flex_right'>
          <div>
            <CloseIcon
              onClick={close}
              className='cancel cursor_pointer'
              style={{ marginRight: "0.3em", marginTop: "0.2em" }}
            />
          </div>
        </div>
        <div className='image'>
          <div className='next' onClick={increaseCurrentIndex}>
            <NavigateNextIcon style={{ fontSize: 35 }} />
          </div>
          <div className='before' onClick={decreaseCurrentIndex}>
            <NavigateBeforeIcon style={{ fontSize: 35 }} />
          </div>
          <div
            style={{
              display: isLoading ? "block" : "none",
              height: width > 1050 ? "500px" : "350px",
            }}
            className='flex_middle'
          >
            <div className='loader-me'></div>
          </div>
          <div style={{ display: isLoading ? "none" : "block" }}>
            <img
              src={
                pics[currentIndex].imgSource || defaultImg
              }
              alt='Img'
              onLoad={onLoad}
              className={
                pics[currentIndex].needsFit ? "image-needs-fit" : ""
              }
            />
          </div>
        </div>
        <div className='text flex_middle'>
          {pics[currentIndex].imgText}
        </div>
      </div>
    </div>
  );
};

export default BigPic