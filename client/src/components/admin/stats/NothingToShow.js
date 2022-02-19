import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThermometerEmpty } from "@fortawesome/free-solid-svg-icons";

const NothingToShow = ({ primaryMessage, secondaryMessage }) => {
  return (
    <div className='empty_timeline app '>
      <div className='flex_middle' style={{ marginBottom: "1em" }}>
        <div>
          <FontAwesomeIcon
            icon={faThermometerEmpty}
            style={{
              color: "gray",
              fontSize: 25,
              marginRight: "0.5em",
            }}
          />
        </div>
        <div style={{ color: "gray" }}> {primaryMessage}</div>
      </div>
      <div>
        {secondaryMessage}
      </div>
    </div>
  );
};

NothingToShow.propTypes = {};

export default NothingToShow;
