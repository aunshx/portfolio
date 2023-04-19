import React from "react";
import PropTypes from "prop-types";

import { TextField, styled, MenuItem, FormControl } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { connect } from "react-redux";

const CssTextField = styled(TextField, {
  shouldForwardProp: (props) => props !== "focusColor",
})((p) => ({
  // input label when focused
  "& label.Mui-focused": {
    color: "none",
  },
  // focused color for input with variant='outlined'
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "none",
      fontSize: "0.9em",
    },
  },
  border: "1px solid gray",
  height: "18px",
  borderRadius: "10px",
  color: "grey",
}));

const CssTextFieldDark = styled(TextField, {
  shouldForwardProp: (props) => props !== "focusColor",
})((p) => ({
  // input label when focused
  "& label.Mui-focused": {
    color: "none",
  },
  // focused color for input with variant='outlined'
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "none",
      fontSize: "0.9em",
    },
  },
  border: "1px solid grey",
  height: "18px",
  borderRadius: "10px",
  color: "grey",
}));

const useStyles = makeStyles((theme) => ({
  select: {
    "&.MuiSvgIcon-root": {
      display: "none",
    },
  },
}));

const DurationSelector = ({
  duration,
  onChangeDuration,
  // Redux State
  settings: { displayMode },
}) => {
  const classes = useStyles();

  return (
    <div>
      {displayMode ? (
        <FormControl>
          <CssTextFieldDark
            select
            placeholder='Difficulty'
            variant='standard'
            name='duration'
            value={duration}
            onChange={onChangeDuration}
            size='small'
            inputProps={{
              classes: {
                icon: classes.select,
              },
            }}
            sx={{
              width: 80,
              textAlign: "right",
            }}
            InputProps={{
              style: {
                border: "none",
                color: "grey",
                fontSize: "0.7em",
                padding: "0 0 0em 0",
              },
              disableUnderline: true,
            }}
          >
            <MenuItem
              style={{
                fontSize: "0.9em",
                height: "20px",
              }}
              value={"today"}
            >
              Today
            </MenuItem>
            <MenuItem
              style={{
                fontSize: "0.9em",
                height: "20px",
              }}
              value={"week"}
            >
              7 Days
            </MenuItem>
            <MenuItem
              value={"month"}
              style={{
                fontSize: "0.9em",
                height: "20px",
              }}
            >
              Month
            </MenuItem>
            <MenuItem
              value={"year"}
              style={{
                fontSize: "0.9em",
                height: "20px",
              }}
            >
              Year
            </MenuItem>
            <MenuItem
              value={"all-time"}
              style={{
                fontSize: "0.9em",
                height: "20px",
              }}
            >
              All Time
            </MenuItem>
          </CssTextFieldDark>
        </FormControl>
      ) : (
        <FormControl>
          <CssTextField
            select
            placeholder='Duration'
            variant='standard'
            name='duration'
            value={duration}
            onChange={onChangeDuration}
            size='small'
            inputProps={{
              classes: {
                icon: classes.select,
              },
            }}
            sx={{
              width: 80,
              textAlign: "right",
            }}
            InputProps={{
              style: {
                border: "none",
                fontSize: "0.7em",
                padding: "0 0 0em 0",
                color: "grey",
              },
              disableUnderline: true,
            }}
          >
            <MenuItem
              style={{
                fontSize: "0.9em",
                height: "20px",
              }}
              value={"today"}
            >
              Today
            </MenuItem>
            <MenuItem
              style={{
                fontSize: "0.9em",
                height: "20px",
              }}
              value={"week"}
            >
              7 Days
            </MenuItem>
            <MenuItem
              value={"month"}
              style={{
                fontSize: "0.9em",
                height: "20px",
              }}
            >
              Month
            </MenuItem>
            <MenuItem
              value={"year"}
              style={{
                fontSize: "0.9em",
                height: "20px",
              }}
            >
              Year
            </MenuItem>
            <MenuItem
              value={"all-time"}
              style={{
                fontSize: "0.9em",
                height: "20px",
              }}
            >
              All Time
            </MenuItem>
          </CssTextField>
        </FormControl>
      )}
    </div>
  );
};

DurationSelector.propTypes = {
  settings: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  settings: state.settings,
});

const mapStateToActions = {};

export default connect(mapStateToProps, mapStateToActions)(DurationSelector);