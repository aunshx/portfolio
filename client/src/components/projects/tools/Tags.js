import React, { useEffect, useState } from 'react';

import reduxLogo from "../../../resources/images/skills/logos/reduxLogo.png";
import reactLogo from "../../../resources/images/skills/logos/reactLogo.png";
import jsLogo from "../../../resources/images/skills/logos/jsLogo.png";
import nodeLogo from "../../../resources/images/skills/logos/nodeLogo.png";
import psqlLogo from "../../../resources/images/skills/logos/psqlLogo.png";
import mongoLogo from "../../../resources/images/skills/logos/mongoLogo.png";

const Tags = ({ text }) => {

    
  const [logo, setLogo] = useState("");

  useEffect(() => {
    switch (true) {
      case text === "react":
        setLogo(reactLogo);
        break;

      case text === "redux":
        setLogo(reduxLogo);
        break;

      case text === "js":
        setLogo(jsLogo);
        break;

      case text === "node":
        setLogo(nodeLogo);
        break;

      case text === "psql":
        setLogo(psqlLogo);
        break;

      case text === "mongo":
        setLogo(mongoLogo);
        break;

      default:
        return null;
    }
  }, [text]);
    
  return (
      <div className={`tags flex_evenly ${text}`}>
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
