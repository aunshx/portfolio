import React from 'react'

import CloseIcon from "@mui/icons-material/Close";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import defaultImg from "../../../resources/images/default/default.jpg";
import { Tooltip } from '@mui/material';

const BigPic = ({
  close,
  picsLight,
  picsDark,
  currentIndex,
  darkModePics,
  increaseCurrentIndex,
  decreaseCurrentIndex,
  displayMode,
  showLightModePicsAndArray,
  showDarkModePicsAndArray,
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
            {picsDark &&
              (darkModePics ? (
                <div className='moon cursor_pointer'>
                  <Tooltip title='Dark mode pics' placement='left'>
                    <div>
                      <FontAwesomeIcon
                        icon={faMoon}
                        className={"mobile_logo--tilted"}
                        onClick={showLightModePicsAndArray}
                        style={{
                          fontSize: 20,
                        }}
                      />
                    </div>
                  </Tooltip>
                </div>
              ) : (
                <div className='sun cursor_pointer'>
                  <Tooltip title='Light mode pics' placement='left'>
                    <div>
                      <FontAwesomeIcon
                        icon={faSun}
                        className={"mobile_logo--tilted"}
                        onClick={showDarkModePicsAndArray}
                        style={{
                          fontSize: 20,
                        }}
                      />
                    </div>
                  </Tooltip>
                </div>
              ))}
          </div>
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
                darkModePics
                  ? picsDark[currentIndex].imgSource || defaultImg
                  : picsLight[currentIndex].imgSource || defaultImg
              }
              alt='Img'
              onLoad={onLoad}
              className={
                picsLight[currentIndex].needsFit ? "image-needs-fit" : ""
              }
            />
          </div>
        </div>
        <div className='text flex_middle'>
          {picsLight[currentIndex].imgText}
        </div>
      </div>
    </div>
  );
};

export default BigPic