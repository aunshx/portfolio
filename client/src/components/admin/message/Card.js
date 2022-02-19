import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import moment from 'moment';

import Tag from './Tag';

const Card = ({ status, settings: { displayMode } }) => {
  return (
    <>
      <div
        className={displayMode ? "card-admin card-admin--dark" : "card-admin"}
      >
        <div className='first'>
          <div className='' style={{ border: '1px solid red', justifyContent: 'flex-start' }}>
            <div className='title flex_left'>Name</div>
            <div className="dateTime">
                {moment().format('DD/MM/YY')} | {moment().toNow()}
            </div>
          </div>
          <div className='flex_right'>
              <Tag status={status} />
          </div>
        </div>
      </div>
    </>
  );
}

Card.propTypes = {
    settings: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    settings: state.settings
})

export default connect(mapStateToProps)(Card)