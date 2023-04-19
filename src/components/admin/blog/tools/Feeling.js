import React from 'react'
import Rating from "@mui/material/Rating";
import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import { Tooltip } from '@mui/material';
import { makeStyles } from '@mui/styles'

const labels = {
  0.5: "Worse",
  1: "Bad",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Better",
  4.5: "Excellent",
  5: "Best",
};

const useStyles = makeStyles({
  "icon-1": { color: "red" },
  "icon-2": { color: "coral" },
  "icon-3": { color: "orange" },
  "icon-4": { color: "skyblue" },
  "icon-5": { color: "green" },
});


const Feeling = ({ feeling }) => {

    const classes = useStyles()

  return (
    <Tooltip title='Feelings Scale' placement='top'>
      <div className='flex_middle' style={{ cursor: "context-menu" }}>
        <Rating
          classes={{
            icon: classes[`icon-${Math.ceil(feeling)}`],
          }}
          name='text-feedback'
          value={feeling}
          readOnly
          precision={0.5}
          emptyIcon={
            <CircleOutlinedIcon
              style={{ opacity: 0.55, fontSize: 12, color: "grey" }}
            />
          }
          icon={<CircleIcon fontSize='inherit' style={{ fontSize: 12 }} />}
        />
        <div style={{ color: "grey", marginLeft: "0.3em" }}>
          {labels[feeling]}
        </div>
      </div>
    </Tooltip>
  );
}

export default Feeling