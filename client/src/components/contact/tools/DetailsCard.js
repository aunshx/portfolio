import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faUser,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import mediumLogo from '../../../resources/images/skills/logos/mediumLogo.png'
import mediumLogoDark from '../../../resources/images/skills/logos/mediumLogoDark.png'
import { Tooltip } from '@mui/material';

const DetailsCard = ({ displayMode }) => {
  return (
    <div
      className={
        displayMode ? "card-contact card-contact--dark" : "card-contact"
      }
      style={{ margin: '50px 0 50px 0' }}
    >
      <div className='title flex_middle' style={{ marginTop: '0.5em' }} >Details</div>
      <div className='info'>
        <div className='title'>
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <div style={{ fontSize: "0.85em" }}>aunsh.sb@gmail.com</div>
      </div>
      <div className='info'>
        <div className='title'>
          <FontAwesomeIcon icon={faMobileAlt} />
        </div>
        <div style={{ fontSize: "0.85em" }}>+91 79721 46825</div>
      </div>
      <div className='info'>
        <div className='title'>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div style={{ fontSize: "0.85em" }} className='flex_left'>
          Aunsh Bandivadekar
        </div>
      </div>
      <div className="flex_middle" style={{ marginTop: '1.5em', fontSize: '0.9em', color: 'grey' }} >
        Socials
      </div>
      <div
        className='info flex_around'
        //   style={{ border: "1px solid red" }}
        style={{ marginLeft: "5em" }}
      >
        <Tooltip title='Github Profile' placement='top' enterDelay={200}>
          <div className='socials'>
            <GitHubIcon />
          </div>
        </Tooltip>
        <Tooltip title='Linkedin Profile' placement='top' enterDelay={200}>
          <div className='socials'>
            <LinkedInIcon />
          </div>
        </Tooltip>
        <Tooltip title='Medium Profile' placement='top' enterDelay={200}>
          <div className='socials'>
            <img
              src={displayMode ? mediumLogoDark : mediumLogo}
              alt='Medium'
              style={{ width: "30px", height: "20px" }}
            />
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default DetailsCard