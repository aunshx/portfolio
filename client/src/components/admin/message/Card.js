import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import moment from 'moment';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCube,
  faTrash
} from "@fortawesome/free-solid-svg-icons";

import { Collapse, IconButton, Tooltip } from '@mui/material';

import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import ArrowCircleDownOutlinedIcon from "@mui/icons-material/ArrowCircleDownOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";

import Tag from "./Tag";
import StatusSelector from './StatusSelector';

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

const Card = ({ status, settings: { displayMode } }) => {

        const [anchorEl, setAnchorEl] = useState(null);

    const [expanded, setExpanded] = useState(false);
  const open = Boolean(anchorEl);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };

      const handleClose = () => {
        setAnchorEl(null);
      };

  return (
    <>
      <div
        className={displayMode ? "card-admin card-admin--dark" : "card-admin"}
      >
        <div className='first'>
          <div className='' style={{ justifyContent: "flex-start" }}>
            <div className='title flex_left'>Name</div>
            <div className='dateTime'>
              {moment().format("DD/MM/YY")} | {moment().toNow()}
            </div>
          </div>
          <div className='flex_right'>
            <Tag status={status} />
          </div>
        </div>
        <div className='second app'>
          <div>aunsh.tech@gmail.com</div>
          <div className='org'>Organisation</div>
        </div>
        <div className='third'>
          <Tooltip title='Delete Message' placement='top'>
            <div className='flex_left'>
              <FontAwesomeIcon
                icon={faTrash}
                style={{ fontSize: 11 }}
                className='delete icons'
              />
            </div>
          </Tooltip>
          <Tooltip title='See Message' placement='top'>
            <div className='flex_middle'>
              <ExpandMore
                expand={expanded}
                aria-expanded={expanded}
                aria-label='show more'
              >
                <ExpandMoreIcon
                  style={{
                    fontSize: 28,
                  }}
                  className='icons'
                  onClick={handleExpandClick}
                />
              </ExpandMore>
            </div>
          </Tooltip>
          <Tooltip title='Change Status' placement='top'>
            <div className='flex_right'>
              <FontAwesomeIcon
                icon={faCube}
                style={{ fontSize: 14 }}
                className='icons'
                onClick={handleClick}
              />
            </div>
          </Tooltip>
          <div>
            <StatusSelector
              handleClose={handleClose}
              open={open}
              anchorEl={anchorEl}
            />
          </div>
        </div>
        <div>
          <Collapse
            in={expanded}
            timeout='auto'
            unmountOnExit
            style={{
              padding: 0,
            }}
          >
            <div className='expanded-message'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam,
              sit labore commodi explicabo exercitationem sapiente, aperiam
              veritatis impedit neque nisi debitis quod animi. Quaerat natus
              quas itaque possimus ratione, illo tempora beatae, unde incidunt
              dicta voluptate labore doloribus culpa reiciendis? Alias illo
              itaque animi ipsa corrupti fuga consequuntur similique quas vero
              deserunt a nulla nihil laudantium sint dignissimos rem, vel
              voluptates rerum enim placeat cumque! Illum hic ratione
              praesentium sed fugit placeat esse eaque veniam culpa recusandae,
              animi, perspiciatis ipsam, nam similique reiciendis cupiditate!
              Obcaecati et labore corrupti, culpa exercitationem tenetur
              corporis quibusdam sed expedita, quas sint doloribus quod
              explicabo ullam suscipit! Libero, voluptatibus cum, nisi
              exercitationem sit maiores fugit porro quisquam recusandae numquam
              vero hic nobis magni voluptatum earum deleniti animi eos mollitia
              saepe itaque molestias? Est assumenda necessitatibus facilis
              fugiat aspernatur iure error et pariatur inventore voluptates
              fuga, temporibus reiciendis cumque iste!
            </div>
          </Collapse>
        </div>
      </div>
    </>
  );
}

Card.propTypes = {
    settings: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    settings: state.settings
})

export default connect(mapStateToProps)(Card)