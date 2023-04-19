import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faScrewdriver,
  faHeart,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "@mui/material";

const Type = ({ type }) => {
  return (
    <div className='flex_middle'>
      {type === "life" && (
        <Tooltip title='Life' placeholder='top'>
          <div
            style={{
              width: "25px",
              height: "25px",
              borderRadius: "50%",
              padding: "0.1em",
              backgroundColor: "#097ade",
              cursor: "context-menu",
            }}
            className='flex_middle'
          >
            <FontAwesomeIcon
              icon={faUser}
              style={{ color: "white", fontSize: 12 }}
            />
          </div>
        </Tooltip>
      )}
      {type === "ideas" && (
        <Tooltip title='Ideas' placeholder='top'>
          <div
            style={{
              width: "25px",
              height: "25px",
              borderRadius: "50%",
              padding: "0.1em",
              backgroundColor: "#dede09",
              cursor: "context-menu",
            }}
            className='flex_middle'
          >
            <FontAwesomeIcon
              icon={faLightbulb}
              style={{ color: "white", fontSize: 12 }}
            />
          </div>
        </Tooltip>
      )}
      {type === "plans" && (
        <Tooltip title='Plans' placeholder='top'>
          <div
            style={{
              width: "25px",
              height: "25px",
              borderRadius: "50%",
              padding: "0.1em",
              backgroundColor: "#18d100",
              cursor: "context-menu",
            }}
            className='flex_middle'
          >
            <FontAwesomeIcon
              icon={faScrewdriver}
              style={{ color: "white", fontSize: 12 }}
            />
          </div>
        </Tooltip>
      )}
      {type === "feelings" && (
        <Tooltip title='Feelings' placeholder='top'>
          <div
            style={{
              width: "25px",
              height: "25px",
              borderRadius: "50%",
              padding: "0.1em",
              backgroundColor: "#f00a19",
              cursor: "context-menu",
            }}
            className='flex_middle'
          >
            <FontAwesomeIcon
              icon={faHeart}
              style={{ color: "white", fontSize: 12 }}
            />
          </div>
        </Tooltip>
      )}
    </div>
  );
};

export default Type;
