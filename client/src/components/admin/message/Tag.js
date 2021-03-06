import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const Tag = ({ status }) => {

    const [statusState, setStatusState] = useState('')
    const [statusMessage, setStatusMessage] = useState('')

    useEffect(() => {
        switch(true){
            case status === 'not-replied':
                setStatusState('not-replied')
                setStatusMessage("no-reply");
                break
            case status === 'unseen':
                setStatusState('unseen')
                setStatusMessage("unseen");
                break
            case status === 'ongoing':
                setStatusState('ongoing')
                setStatusMessage("ongoing");
                break
            case status === 'cold':
                setStatusState('cold')
                setStatusMessage("cold");
                break
            case status === 'success':
                setStatusState('success')
                setStatusMessage("success");
                break
            
            default:
                return null  
        }
    },[status])
  return (
    <>
      <div className={`tag ${statusState}`}>{statusMessage}</div>
    </>
  );
}

Tag.propTypes = {}

export default Tag