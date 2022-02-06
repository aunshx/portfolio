import React from 'react';
import PropTypes from 'prop-types';

import { Collapse, IconButton, Tooltip } from '@mui/material';

import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import ArrowCircleDownOutlinedIcon from "@mui/icons-material/ArrowCircleDownOutlined";
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


const Card = (props) => {
const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return <div className='individual'>
      <div className="double_grid">
          <div className="image">
              <img src={defaultImg} alt="Bodinga Home Page" />
          </div>
          <div className="details app" style={{ justifyContent: 'space-around' }}>
              <div className="title flex_middle">
                  bodinga.com
              </div>
              <div className="description">
                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis distinctio porro sed quidem consequuntur aut sequi suscipit dolorem blanditiis libero!
              </div>
              <div className="links flex_around">
                  <div className='indi'>
                      Github Repo
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
                  <div className='indi'>
                      Live demo
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
                <Tags text={'React'} logo={reactLogo} classGiven={'react'} />
                <Tags text={'JS'} logo={jsLogo} classGiven={'js'} />
                <Tags text={'Redux'} logo={reduxLogo} classGiven={'redux'} />
                <Tags text={'Node'} logo={nodeLogo} classGiven={'node'} />
                <Tags text={'Postgres'} logo={psqlLogo} classGiven={'express'} />
                <Tags text={'Express'} logo={''} classGiven={'postgres'} />
                </div>
                <div className="details">

                </div>
            </div>
             
            </div>
        </Collapse>
        </div>
  </div>;
};

Card.propTypes = {};

export default Card;
