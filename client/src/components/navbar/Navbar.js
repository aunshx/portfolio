import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { NavLink, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { Drawer, Tooltip } from "@mui/material";

import SidebarMini from './SidebarMini'

import windowSize from '../../utils/windowSize'

const activeTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "red" };
  }
};

const Navbar = ({ history }) => {
  const [menu, setMenu] = useState(false)
  const [drawer, setDrawer] = useState(false);
  const [displayMoon, setDisplayMoon] = useState(true);

  const { width, height }  = windowSize()

  const verticalMenu = () => {
    setMenu(!menu)
    setDrawer(!drawer);
  };

  const changeMoon = () => {
    setDisplayMoon(!displayMoon)
  }
  return <>
  <div className='navbar flex_between'>
    <div className="cursor_pointer">
      <NavLink to='/'>
        <div className="left">
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
      <div className="resume">
        Resume
      </div>
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
