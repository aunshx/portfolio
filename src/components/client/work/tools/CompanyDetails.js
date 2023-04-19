import React from 'react'
import { List, ListItem } from '@mui/material'
import useWindow from 'react-window-size-simple';

const CompanyDetails = ({ company }) => {

  const { width } = useWindow()

  return (
    <div className='company'>
      <div className={width < 800 ? "flex_middle" : "flex_left"}>
        <div
          className='app'
          style={width < 800 ? {} : { alignItems: "flex-start" }}
        >
          <div className='flex_middle'>
            <div className='position'>{company.position}</div>
            <span className='at'>@</span>
            <div className='name'>{company.name}</div>
          </div>
          <div className='flex_middle'>
            <div className='duration'>{company.duration}</div>
            <span>&middot;</span>
            <div className='badge'>{company.type}</div>
          </div>
        </div>
      </div>
      <div className='details'>
        <List
          sx={{
            listStyleType: "disc",
            pl: 0,
            "& .MuiListItem-root": {
              display: "list-item",
            },
          }}
        >
          {company.work.length > 0 &&
            company.work.map((element, index) => (
              <ListItem
                disableGutters
                disablePadding
                className='item'
                key={index}
              >
                {element}
              </ListItem>
            ))}
        </List>
      </div>
    </div>
  );
};

export default CompanyDetails