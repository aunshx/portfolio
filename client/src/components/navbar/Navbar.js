import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { NavLink, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
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

  const { width, height }  = windowSize()

  const verticalMenu = () => {
    setMenu(!menu)
    setDrawer(!drawer);
  };
  return <>
  <div className='navbar flex_between'>
    <div className="cursor_pointer">
      <NavLink to='/' style={activeTab(history, "/")} exact>
        <div className="left">
          aunsh.
        </div>
      </NavLink>
    </div>
    {/* <div className="right flex_end" style={activeTab(history, "/projects")} exact> */}
      {/* <NavLink to='/'>
         <div className='element cursor_pointer'>Home</div>
      </NavLink>
      <NavLink to='/projects' activeStyle={{ color: 'rgb(105, 182, 242)' }}>
      <div className='element cursor_pointer'>Projects</div>
      </NavLink>
      <NavLink to='/articles' activeStyle={{ color: 'rgb(105, 182, 242)' }}>
         <div className='element cursor_pointer'>Articles</div>
      </NavLink>
      <NavLink to='/skills' activeStyle={{ color: 'rgb(105, 182, 242)' }}>
         <div className='element cursor_pointer'>Skills</div>
      </NavLink>
      <NavLink to='/contacts' activeStyle={{ color: 'rgb(105, 182, 242)' }}>
         <div className='element cursor_pointer'>Contact</div>
      </NavLink> */}
      <div className="resume">
        Resume
      </div>
    {/* </div> */}
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
