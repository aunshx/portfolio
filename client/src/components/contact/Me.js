import React, { useEffect, useState } from "react";

import body from '../../resources/images/onlyBodyedit.png'

const Me = ({ error, success, message }) => {
    const [showDialog, setShowDialog] = useState(false)

    useEffect(() => setTimeout(() => setShowDialog(true), 2000), [])

    const changeDialog = () => {
        setShowDialog(!showDialog)
    }
  return<>
      <div className="all-about" onClick={changeDialog}>
      {showDialog ? (
          <>
              <div class="bubble bubble-bottom-left">Send <span style={{ display: 'inline-block', color: 'rgb(0, 145, 255)' }}>me</span> an email and I'll <span style={{ display: 'inline-block', color: 'rgb(0, 145, 255)' }}>definitely</span> get <span style={{ display: 'inline-block', color: 'rgb(0, 145, 255)' }}>back</span> to you.</div>
           <div className='image'>
         <img src={body} alt="Face of Me" />
     </div>
          </>
      ) : ('')}
      </div>
  </>
};

Me.propTypes = {};

export default Me;
