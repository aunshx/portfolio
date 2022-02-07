import React from 'react';
import PropTypes from 'prop-types';

import { Collapse, IconButton, Tooltip, Box, Fade, Modal, Card } from '@mui/material';

import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import ArrowCircleDownOutlinedIcon from "@mui/icons-material/ArrowCircleDownOutlined";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-solid-svg-icons';

import Tags from './Tags';

import defaultImg from '../../resources/images/default.jpg'
import reduxLogo from '../../resources/images/reduxLogo.png'
import reactLogo from '../../resources/images/reactLogo.png'
import jsLogo from '../../resources/images/jsLogo.png'
import nodeLogo from '../../resources/images/nodeLogo.png'
import psqlLogo from '../../resources/images/psqlLogo.png'
import gotuuLogo from '../../resources/images/gotuuLogo.png'

const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'white',
    boxShadow: 24,
    border: 'none',
    padding: '1em',
    width:'70%',
    height: '60%',
}

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  width: "1em",
  height: "1em",
  color: "white",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));


const GotuuCard = (props) => {
const [expanded, setExpanded] = useState(false);
const [isPhotoOpen, setIsPhotoOpen] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return <div className='individual' data-aos='fade-up' >
      <div className="double_grid">
          <div className="image" onClick={() => setIsPhotoOpen(true)}>
              <img src={defaultImg} alt="Bodinga Home Page" />
          </div>
          <div className="details app" style={{ justifyContent: 'space-around' }}>
             <a href="https://gotuu.in" target={"_blank"} rel='noreferrer nofollow'>
                  <div className="title flex_middle" style={{ marginBottom: '-0.6em' }} >
                      <div style={{ objectFit: 'contain', width: '33px', margin: '0.6em 0.6em 0 0' }}>
                          <img src={gotuuLogo} alt="Gotuu Logo" />
                      </div>
                      <div>
                          gotuu.in
                      </div>
              </div>
             </a>
              <div className="description">
                 A web-app to manage business operations, customer and vendor management for medical companies in the veterinary field.
              </div>
              <div className="links flex_around">
                  <div>
                      <a href='https://github.com/aunshx/gotuu' target={"_blank"} rel='noreferrer nofollow' alt='Github Repo link' className='indi'>
                      Github Repo
                  </a>
                  </div>
                  <Tooltip title='Show More Details' placement='top'>
                      <div className="indi">
                      <ExpandMore
                      expand={expanded}
                      aria-expanded={expanded}
                      aria-label='show more'
                    >
                          <ExpandMoreIcon
                        style={{
                          fontSize: 28,
                        }}
                        className='expand'
                        onClick={handleExpandClick}
                      />
                    </ExpandMore>
                  </div>
                  </Tooltip>
                  <div>
                      <a href='' target={"_blank"} rel='noreferrer nofollow' alt='Live Demo Link' className='indi'>
                      Live Demo
                  </a>
                  </div>
              </div>
          </div>
      </div>
      <div className=''>
        <Collapse
            in={expanded}
            timeout='auto'
            unmountOnExit
            style={{
            padding: 0,
            }}
        >
            <div className='expanded'>
            
            <div className="double">
                <div className="app" style={{ justifyContent: 'center' }}>
                <div className="title">
                    Tech Stack
                </div>
                <Tags text={'React'} logo={reactLogo} classGiven={'react'} />
                <Tags text={'JS'} logo={jsLogo} classGiven={'js'} />
                <Tags text={'Redux'} logo={reduxLogo} classGiven={'redux'} />
                <Tags text={'Node'} logo={nodeLogo} classGiven={'node'} />
                <Tags text={'Postgres'} logo={psqlLogo} classGiven={'express'} />
                <Tags text={'Express'} logo={''} classGiven={'postgres'} />
                </div>
                <div className="details app">
                    <div className="title">
                    Details
                </div>
                <div className='list'>
                    <ul>
                        <li>Automated business flow of sale and purchase of items.</li>
                        <li>Complete diagnosis flow including patient registration, case records, prescription, diagnosis and billing.</li>
                        <li>Intelligent metrics and statistics of each owner, pet or business to target the right customers & negotiate better prices with vendors.</li>
                        <li>Automatic reminders by email and sms to target the right customers based on the metrics calculated</li>
                        <li>Current event scheduler and in-built appointment system</li>
                    </ul>
                </div>
                </div>
            </div>
             
            </div>
        </Collapse>
        </div>
        <Modal
                open={isPhotoOpen}
                onClose={() => setIsPhotoOpen(false)}
                closeAfterTransition
                BackdropProps={{
                    timeout: 500,
                    style: {
                        backgroundColor: 'rgba(0,0,0,0.8)',
                    },
                }}
            >
                <Fade in={isPhotoOpen}>
                    <Box style={style}>
                        <Card style={{ padding: '0.2em' }}>
                          <div className="flex_right">
                            <CloseIcon onClick={() => setIsPhotoOpen(false)} className='cancel cursor_pointer' style={{ marginRight: '0.3em' }} />
                          </div>
                          <div style={{ padding: '0.3em 0.6em 0.6em 0.6em' }}>
                            <img src={defaultImg} alt="Bodinga Home Page" />
                          </div>
                        </Card>
                    </Box>
                </Fade>
            </Modal>
  </div>
};

GotuuCard.propTypes = {};

export default GotuuCard;
