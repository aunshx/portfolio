import React from "react";
import { Tooltip } from "@mui/material";

import gotuuOnyLogo from "../../../../resources/images/work-and-projects/gotuu.in/gotuuOnyLogo.png";

const GotuuDial = () => {
  const goToLink = (link) => {
    window.open("https://gotuu.in", "_blank");
  };

  return (
    <Tooltip title='gotuu.in' placement='left' enterDelay={400}>
      <div>
        <a
          href='https://gotuu.in/'
          rel='noreferrer nofollow noopenner'
          target={"_blank"}
        >
          <div className='body flex_middle' onClick={goToLink}>
            <img src={gotuuOnyLogo} alt='gotuu.in logo' />
          </div>
        </a>
      </div>
    </Tooltip>
  );
};

export default GotuuDial;
