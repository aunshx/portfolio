import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faUser,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

import mediumLogo from '../../../../resources/images/skills/logos/mediumLogo.png'
import mediumLogoDark from '../../../../resources/images/skills/logos/mediumLogoDark.png'

const DetailsCard = ({ displayMode }) => {
  return (
    <div
      className={
        displayMode ? "card-contact card-contact--dark" : "card-contact"
      }
      style={{ margin: "0px 0 50px 0" }}
    >
      <div className='title flex_middle' style={{ marginTop: "0.5em" }}>
        Details
      </div>
      <div className='info flex_middle'>
        <div className='title'>
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <div style={{ fontSize: "0.85em" }}>aunsh.sb@gmail.com</div>
      </div>
      <div className='info flex_middle'>
        <div className='title'>
          <FontAwesomeIcon icon={faMobileAlt} />
        </div>
        <div style={{ fontSize: "0.85em" }}>+91 79721 46825</div>
      </div>
      <div className='info flex_middle'>
        <div className='title'>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div style={{ fontSize: "0.85em" }} className='flex_left'>
          Aunsh Bandivadekar
        </div>
      </div>
      <div
        className='flex_middle'
        style={{ margin: "1.5em 0 1em 0", fontSize: "0.9em", color: "grey" }}
      >
        Socials
      </div>
      <div className='flex_around'>
        <Tooltip title='Github Profile' placement='top' enterDelay={200}>
          <div className='socials'>
            <a
              href='https://github.com/aunshx'
              target={"_blank"}
              rel='noopener noreferrer nofollow'
            >
              <GitHubIcon />
            </a>
          </div>
        </Tooltip>
        <Tooltip title='Linkedin Profile' placement='top' enterDelay={200}>
          <div className='socials'>
            <a
              href='https://www.linkedin.com/in/aunsh'
              target={"_blank"}
              rel='noopener noreferrer nofollow'
            >
              <LinkedInIcon />
            </a>
          </div>
        </Tooltip>
        <Tooltip title='Instagram Profile' placement='top' enterDelay={200}>
          <div className='socials'>
            <a
              href='https://www.instagram.com/aunsh___'
              target={"_blank"}
              rel='noopener noreferrer nofollow'
            >
              <InstagramIcon />
            </a>
          </div>
        </Tooltip>
        <Tooltip title='Medium Profile' placement='top' enterDelay={200}>
          <div className='socials'>
            <a
              href='https://aunsh.medium.com'
              target={"_blank"}
              rel='noopener noreferrer nofollow'
            >
              <img
                src={displayMode ? mediumLogoDark : mediumLogo}
                alt='Medium'
                style={{ width: "30px", height: "20px" }}
              />
            </a>
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default DetailsCard