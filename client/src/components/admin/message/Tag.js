import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const Tag = ({ status }) => {

    const [statusState, setStatusState] = useState('')

    useEffect(() => {
        switch(true){
            case status === 'not-replied':
                setStatusState('not-replied')
                break
            case status === 'unseen':
                setStatusState('unseen')
                break
            case status === 'ongoing':
                setStatusState('ongoing')
                break
            case status === 'cold':
                setStatusState('cold')
                break
            case status === 'success':
                setStatusState('success')
                break
            
            default:
                return null  
        }
    },[])
  return (
    <>
        <div className={`tag ${statusState}`}>
            Tag
        </div>
    </>
  )
}

Tag.propTypes = {}

export default Tag