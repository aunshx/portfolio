
import React, { useState } from "react";
import PropTypes from "prop-types";
import useSound from "use-sound";
import { connect } from "react-redux";
import useWindow from "react-window-size-simple";

import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSun,
  faMoon,
  faBlog,
} from "@fortawesome/free-solid-svg-icons";

import { Drawer, Tooltip } from "@mui/material";

import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";

import SidebarMini from "./SidebarMini";

import toggle from "../../../resources/sounds/toggle.mp3";

import {
  toggleLightMode,
  toggleDarkMode,
  soundOn,
  soundOff,
  musicOn,
  musicOff,
} from "../../../redux/actions/settings";

import {
  logout
} from "../../../redux/actions/auth";

import { setRendererMessagesTrue } from "../../../redux/actions/contact";

const setDark = () => {
  localStorage.setItem("theme", "dark");
  document.documentElement.setAttribute("data-theme", "dark");
};

const setLight = () => {
  localStorage.setItem("theme", "light");
  document.documentElement.setAttribute("data-theme", "light");
};

const Navbar = ({
  // Redux State
  auth: { isAuthenticated },
  settings: { displayMode, sound, music },
  blog: { isBlogCheckAuth },
  // Redux Actions
  soundOn,
  soundOff,
  toggleLightMode,
  toggleDarkMode,
  musicOn,
  musicOff,
  logout,
  setRendererMessagesTrue,
}) => {
  const [playOn] = useSound(toggle, { volume: 0.2 });

  const [menu, setMenu] = useState(false);
  const [drawer, setDrawer] = useState(false);

  const { width } = useWindow();

  const verticalMenu = () => {
    setMenu(!menu);
    setDrawer(!drawer);
  };

  const toggleThemeToDark = (e) => {
    setDark();
    toggleDarkMode();
    if (sound) {
      playOn();
    }
  };

  const toggleThemeToLight = (e) => {
    setLight();
    toggleLightMode();
    if (sound) {
      playOn();
    }
  };

  return (
    <>
      <div
        className='navbar flex_between'
        style={
          displayMode
            ? { boxShadow: "2px 2px 2px 1px rgba(80, 80, 80, 0.2)" }
            : { boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }
        }
      >
        <div className='cursor_pointer'>
          <NavLink to='/'>
            <div className='left'>admin.</div>
          </NavLink>
        </div>
        <div className='right flex_evenly'>
          {displayMode ? (
            <div className='moon cursor_pointer'>
              <Tooltip title='Dark' placement='left'>
                <div>
                  <FontAwesomeIcon
                    icon={faMoon}
                    className={"mobile_logo--tilted"}
                    onClick={toggleThemeToLight}
                    style={{
                      fontSize: 17,
                      marginTop: "0.3em",
                      marginRight: "1.5em",
                      color: "grey",
                    }}
                  />
                </div>
              </Tooltip>
            </div>
          ) : (
            <div className='sun cursor_pointer'>
              <Tooltip title='Light' placement='left'>
                <div>
                  <FontAwesomeIcon
                    icon={faSun}
                    className={"mobile_logo--tilted"}
                    onClick={toggleThemeToDark}
                    style={{
                      fontSize: 19,
                      marginTop: "0.3em",
                      marginRight: "1.5em",
                      color: "orange",
                    }}
                  />
                </div>
              </Tooltip>
            </div>
          )}
          {!isAuthenticated && (
            <>
              <div className='cursor_pointer'>
                <a href='https://aunsh.com'>
                  <Tooltip title='Portfolio' placement='left'>
                    <div className='element-letter--admin'>a.</div>
                  </Tooltip>
                </a>
              </div>
              <div className='cursor_pointer'>
                <Link to='/admin/login'>
                  <Tooltip title='Login' placement='left'>
                    <div>
                      <LoginIcon
                        className={"element--admin"}
                        style={{
                          fontSize: 21,
                          marginTop: "0.3em",
                        }}
                      />
                    </div>
                  </Tooltip>
                </Link>
              </div>
            </>
          )}
          {isAuthenticated && (
            <>
              <div className='cursor_pointer'>
                <Tooltip title='Dashboard' placement='left'>
                  <div>
                    <NavLink
                      to='/admin'
                      exact
                      activeStyle={{ color: "rgb(0, 145, 255)" }}
                      className='element--admin'
                    >
                      <DashboardIcon
                        style={{
                          fontSize: 21,
                          marginTop: "0.3em",
                        }}
                      />
                    </NavLink>
                  </div>
                </Tooltip>
              </div>
              <div className='cursor_pointer'>
                <Tooltip title='Stats' placement='left'>
                  <div onClick={() => setRendererMessagesTrue()}>
                    <NavLink
                      to='/admin/stats'
                      activeStyle={{ color: "rgb(0, 145, 255)" }}
                      className='element--admin'
                    >
                      <BubbleChartIcon
                        style={{
                          fontSize: 23,
                          marginTop: "0.3em",
                        }}
                      />
                    </NavLink>
                  </div>
                </Tooltip>
              </div>
              <div className='cursor_pointer'>
                <Tooltip title='Blog' placement='left'>
                  <div onClick={() => setRendererMessagesTrue()}>
                    <NavLink
                      to={
                        isBlogCheckAuth
                          ? "/admin/blog"
                          : "/admin/blog-check-auth"
                      }
                      activeStyle={{ color: "rgb(0, 145, 255)" }}
                      className='element--admin'
                    >
                      <FontAwesomeIcon
                        icon={faBlog}
                        style={{
                          fontSize: 18,
                          marginTop: "0.3em",
                        }}
                      />
                    </NavLink>
                  </div>
                </Tooltip>
              </div>
              <div className='cursor_pointer'>
                <a href='https://aunsh.com'>
                  <Tooltip title='Portfolio' placement='left'>
                    <div className='element-letter--admin'>a.</div>
                  </Tooltip>
                </a>
              </div>
              <div className='cursor_pointer'>
                <Tooltip title='Logout' placement='left'>
                  <div>
                    <LogoutIcon
                      className={"element--admin"}
                      style={{
                        fontSize: 21,
                        marginTop: "0.3em",
                      }}
                      onClick={() => logout()}
                    />
                  </div>
                </Tooltip>
              </div>
            </>
          )}
        </div>
        {width < 787 && (
          <div className='right-mini flex_evenly'>
            {displayMode ? (
              <div className='moon cursor_pointer'>
                <Tooltip title='Dark' placement='left'>
                  <div>
                    <FontAwesomeIcon
                      icon={faMoon}
                      onClick={toggleThemeToLight}
                      style={{
                        fontSize: 15,
                        marginTop: "0.3em",
                        color: "grey",
                      }}
                    />
                  </div>
                </Tooltip>
              </div>
            ) : (
              <div className='sun cursor_pointer'>
                <Tooltip title='Light' placement='left'>
                  <div>
                    <FontAwesomeIcon
                      icon={faSun}
                      onClick={toggleThemeToDark}
                      style={{
                        fontSize: 17,
                        marginTop: "0.3em",
                        color: "orange",
                      }}
                    />
                  </div>
                </Tooltip>
              </div>
            )}
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
              <div></div>
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
  );
};

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
  blog: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  toggleLightMode: PropTypes.func.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
  soundOn: PropTypes.func.isRequired,
  soundOff: PropTypes.func.isRequired,
  musicOn: PropTypes.func.isRequired,
  musicOff: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  setRendererMessagesTrue: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  settings: state.settings,
  auth: state.auth,
  blog: state.blog,
});

const mapStateToActions = {
  toggleLightMode,
  toggleDarkMode,
  soundOn,
  soundOff,
  musicOn,
  musicOff,
  logout,
  setRendererMessagesTrue,
};

export default connect(mapStateToProps, mapStateToActions)(Navbar);