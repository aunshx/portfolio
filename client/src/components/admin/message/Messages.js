import React from 'react'
import PropTypes from 'prop-types'

import Card from './Card'

const Messages = props => {
  return (
    <div>
        <Card status={'not-replied'} />
    </div>
  )
}

Messages.propTypes = {}

export default Messages