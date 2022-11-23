import React from 'react'
import { List, ListItem, ListSubheader } from '@mui/material'

const CompanyDetails = ({ company }) => {
  return (
    <div className='company'>
      <div className='flex_left'>
        <div className='app' style={{ alignItems: "flex-start" }}>
          <div className='flex_middle'>
            <div className='position'>{company.position}</div>
            <span
              style={{
                margin: "0 0.3em",
                fontSize: "0.9em",
                color: "rgb(0, 145, 255)",
              }}
            >
              @
            </span>
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
                style={{ fontSize: "0.85em", color: "grey", padding: "0.4em" }}
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