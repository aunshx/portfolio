import React from 'react'
import PropTypes from 'prop-types'
import { Menu, MenuItem, Tooltip } from '@mui/material';

const StatusSelector = ({ anchorEl, open, handleClose }) => {
  return (
    <>
      <Menu
        id='fade-menu'
        anchorEl={anchorEl}
        open={open}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
          },
        }}
        transformOrigin={{
          horizontal: "center",
          vertical: "top",
        }}
        anchorOrigin={{
          horizontal: "center",
          vertical: "bottom",
        }}
      >
        <MenuItem>
          <Tooltip title='No Reply' placement='left'>
            <div className='tag-small'>
              <div className='not-replied'>NR</div>
            </div>
          </Tooltip>
        </MenuItem>
        <MenuItem>
          <Tooltip title='Unseen' placement='left'>
            <div className='tag-small'>
              <div className='unseen'>UN</div>
            </div>
          </Tooltip>
        </MenuItem>
        <MenuItem>
          <Tooltip title='Ongoing' placement='left'>
            <div className='tag-small'>
              <div className='ongoing'>ON</div>
            </div>
          </Tooltip>
        </MenuItem>
        <MenuItem>
          <Tooltip title='Cold' placement='left'>
            <div className='tag-small'>
              <div className='cold'>CD</div>
            </div>
          </Tooltip>
        </MenuItem>
        <MenuItem>
          <Tooltip title='Success' placement='left'>
            <div className='tag-small'>
              <div className='success'>SC</div>
            </div>
          </Tooltip>
        </MenuItem>
      </Menu>
    </>
  );
}

StatusSelector.propTypes = {}

export default StatusSelector