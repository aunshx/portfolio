import React from 'react'
import PropTypes from 'prop-types'

import Card from './Card'

import {data} from './data'

const Messages = props => {
  return (
    <div className='messages-admin'>
      {data.map((element, index) => (
        <>
          {index % 2 === 0 && (
            <div
              className='one flex_middle'
              style={{ alignItems:"flex-start" }}
              key={index}
              data-aos='fade-in'
              data-aos-delay={100 * index}
            >
              <Card status={element.status} index={index} />
            </div>
          )}
          {index % 2 === 1 && (
            <div
              className='two flex_middle'
              style={{ alignItems:"flex-start" }}
              key={index}
              data-aos='fade-in'
              data-aos-delay={100 * index}
            >
              <Card status={element.status} index={index} />
            </div>
          )}
          {index % 2 === 2 && (
            <div
              className='three flex_middle'
              style={{ alignItems:"flex-start" }}
              key={index}
              data-aos='fade-in'
              data-aos-delay={100 * index}
            >
              <Card status={element.status} index={index} />
            </div>
          )}
        </>
      ))}
    </div>
  );
}

Messages.propTypes = {}

export default Messages