import React from 'react'
import PropTypes from 'prop-types'

import Card from './Card'

const Messages = props => {
  return (
    <div>
        <Card status={'not-replied'} />
        <Card status={'unseen'} />
        <Card status={'ongoing'} />
        <Card status={'cold'} />
        <Card status={'success'} />
    </div>
  )
}

Messages.propTypes = {}

export default Messages