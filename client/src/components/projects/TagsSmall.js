import React from "react";

import useWindow from "../../utils/windowSize";

const Tags = ({ logo, text, classGiven }) => {
  const { width, height } = useWindow();

  return (
    <>
      {logo && (
        <div className={`tags flex_evenly ${classGiven}`}>
          <div
            style={{ objectFit: "contain", width: "17px", marginTop: "0.3em" }}
          >
            <img src={logo} alt={`${text} logo`} />
          </div>
        </div>
      )}
    </>
  );
};

export default Tags;
