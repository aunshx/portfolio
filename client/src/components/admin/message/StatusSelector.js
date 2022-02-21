import React from 'react'
import PropTypes from 'prop-types'
import { Menu, MenuItem, Tooltip } from '@mui/material';
import { connect } from 'react-redux';

const StatusSelector = ({ anchorEl, open, handleClose, settings: { displayMode } }) => {

    const changeStatus  = (stat) => {
        if(stat === 'success') {
            
        }
        if(stat === 'ongoing') {
            
        }
        if(stat === 'cold') {
            
        }
        if(stat === 'unseen') {
            
        }
        if(stat === 'not-replied') {
            
        }
    }
  return (
    <>
      {displayMode ? (
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
              backgroundColor: "rgb(50,50,50)",
              width: "50px",
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
          <div
            className='tag-small-menu flex_middle'
            onClick={() => changeStatus("not-replied")}
          >
            <Tooltip title='No Reply' placement='left'>
              <div className='tag-small flex_middle'>
                <div className='not-replied'>NR</div>
              </div>
            </Tooltip>
          </div>
          <div
            className='tag-small-menu flex_middle'
            onClick={() => changeStatus("unseen")}
          >
            <Tooltip title='Unseen' placement='left'>
              <div className='tag-small flex_middle'>
                <div className='unseen'>UN</div>
              </div>
            </Tooltip>
          </div>
          <div
            className='tag-small-menu flex_middle'
            onClick={() => changeStatus("ongoing")}
          >
            <Tooltip title='Ongoing' placement='left'>
              <div className='tag-small flex_middle'>
                <div className='ongoing'>ON</div>
              </div>
            </Tooltip>
          </div>
          <div
            className='tag-small-menu flex_middle'
            onClick={() => changeStatus("cold")}
          >
            <Tooltip title='Cold' placement='left'>
              <div className='tag-small flex_middle'>
                <div className='cold'>CD</div>
              </div>
            </Tooltip>
          </div>
          <div
            className='tag-small-menu flex_middle'
            onClick={() => changeStatus("success")}
          >
            <Tooltip title='Success' placement='left'>
              <div className='tag-small flex_middle'>
                <div className='success'>SC</div>
              </div>
            </Tooltip>
          </div>
        </Menu>
      ) : (
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
              width: '50px',
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
          <div
            className='tag-small-menu flex_middle'
            onClick={() => changeStatus("not-replied")}
          >
            <Tooltip title='No Reply' placement='left'>
              <div className='tag-small flex_middle'>
                <div className='not-replied'>NR</div>
              </div>
            </Tooltip>
          </div>
          <div
            className='tag-small-menu flex_middle'
            onClick={() => changeStatus("unseen")}
          >
            <Tooltip title='Unseen' placement='left'>
              <div className='tag-small flex_middle'>
                <div className='unseen'>UN</div>
              </div>
            </Tooltip>
          </div>
          <div
            className='tag-small-menu flex_middle'
            onClick={() => changeStatus("ongoing")}
          >
            <Tooltip title='Ongoing' placement='left'>
              <div className='tag-small flex_middle'>
                <div className='ongoing'>ON</div>
              </div>
            </Tooltip>
          </div>
          <div
            className='tag-small-menu flex_middle'
            onClick={() => changeStatus("cold")}
          >
            <Tooltip title='Cold' placement='left'>
              <div className='tag-small flex_middle'>
                <div className='cold'>CD</div>
              </div>
            </Tooltip>
          </div>
          <div
            className='tag-small-menu flex_middle'
            onClick={() => changeStatus("success")}
          >
            <Tooltip title='Success' placement='left'>
              <div className='tag-small flex_middle'>
                <div className='success'>SC</div>
              </div>
            </Tooltip>
          </div>
        </Menu>
      )}
    </>
  );
}

StatusSelector.propTypes = {
  settings: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  settings: state.settings,
});

export default connect(mapStateToProps)(StatusSelector);