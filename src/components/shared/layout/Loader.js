import React from "react";

const Loader = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "calc(100vh - 60px)",
      }}
      className='flex_middle'
    >
      <div class='lds-dual-ring'></div>
    </div>
  );
};

export default Loader;
