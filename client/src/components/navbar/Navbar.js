import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { NavLink, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faSun, faMoon, faDownload } from "@fortawesome/free-solid-svg-icons";
import { Drawer, Tooltip } from "@mui/material";
import {
    makeStyles,
} from "@mui/styles";

import SidebarMini from './SidebarMini'

import windowSize from '../../utils/windowSize'

const useStyles = makeStyles(theme => ({
  customTooltip: {
    backgroundColor: 'rgb(245, 245, 245)',
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
    color: 'rgb(72, 72, 72)'
  },
}));

const Navbar = ({ history, reference, refMain }) => {
  const classes = useStyles()

  const [menu, setMenu] = useState(false)
  const [drawer, setDrawer] = useState(false);
  const [displayMoon, setDisplayMoon] = useState(true);
  const [displayDownload, setDisplayDownload] = useState(false);

  const { width, height }  = windowSize()

  const verticalMenu = () => {
    setMenu(!menu)
    setDrawer(!drawer);
  };

  const changeMoon = () => {
    setDisplayMoon(!displayMoon)
  }

  const changeDownloadEnter = () => {
    setDisplayDownload(true)
  }

  const changeDownloadLeave = () => {
    setDisplayDownload(false)
  }
  return <>
  <div className='navbar flex_between' ref={reference}>
    <div className="cursor_pointer">
      <NavLink to='/'>
        <div className="left" ref={refMain}>
          aunsh.
        </div>
      </NavLink>
    </div>
    <div className="right flex_evenly" >
      {displayMoon ? (
        <div className="sun cursor_pointer" onClick={changeMoon}>
          <Tooltip title='Light' placement='left'>
                <div>
                  <FontAwesomeIcon
                    icon={faSun}
                    className={"mobile_logo--tilted"}
                    // onClick={verticalMenu}
                    style={{
                      fontSize: 19,
                      marginTop: '0.3em',
                      color: 'orange'
                    }}
                  />
                </div>
              </Tooltip>
        </div>
      ) : (
        <div className="moon cursor_pointer" onClick={changeMoon}>
          <Tooltip title='Dark' placement='left'>
                <div>
                  <FontAwesomeIcon
                    icon={faMoon}
                    className={"mobile_logo--tilted"}
                    // onClick={verticalMenu}
                    style={{
                      fontSize: 17,
                      marginTop: '0.3em',
                      color: 'grey'
                    }}
                  />
                </div>
              </Tooltip>
        </div>
      )}
      <Tooltip title='Download Resume' placement='left' classes={{ tooltip: classes.customTooltip, }}>
        <div className="resume flex_middle" onMouseEnter={changeDownloadEnter} onMouseLeave={changeDownloadLeave}>
            {displayDownload ? (
            <div>
              <FontAwesomeIcon icon={faDownload} className='icon' />
            </div>
        ) : (
          <div className="text">
          Resume
        </div>
        )}
        </div>
      </Tooltip>
    </div>
      {width < 787 && (
        <div>
        {menu ? (
            <div className='flex_middle'>
              <Tooltip title='Menu' placement='left'>
                <div>
                  <FontAwesomeIcon
                    icon={faBars}
                    className={"mobile_logo--tilted"}
                    onClick={verticalMenu}
                    style={{
                      fontSize: 17,
                    }}
                  />
                </div>
              </Tooltip>
            </div>
          ) : (
            <div className='flex_middle'>
              <Tooltip title='Menu' placement='left'>
                <div>
                  <FontAwesomeIcon
                    icon={faBars}
                    className={"mobile_logo"}
                    onClick={verticalMenu}
                    style={{
                      fontSize: 17,
                    }}
                  />
                </div>
              </Tooltip>
            </div>
          )}
          <div>
      </div>
      </div>
      )}
    </div>
  <div>
    {width < 787 && (
    <Drawer
          anchor={"right"}
          open={drawer}
          onClose={verticalMenu}
          className='sidebar_nav-right'
        >
          <SidebarMini close={verticalMenu} />
        </Drawer>
  )}
  </div>
  </>
};

Navbar.propTypes = {};

export default withRouter(Navbar);
