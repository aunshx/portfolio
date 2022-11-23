import React from 'react'

const EmailCard = ({ displayMode }) => {
  return (
    <div
      className={
        displayMode ? "card-contact card-contact--dark app" : "card-contact app"
      }
      style={{ minHeight: "115px" }}
    >
      <div className='title' style={{ margin: "0.5em" }}>
        Get in touch with an Email
      </div>
      <a
        href='mailto:aunsh.sb@gmail.com'
        alt='aunsh.sb@gmail.com'
      >
        <div className='email-button'>Send Email</div>
      </a>
    </div>
  );
}

export default EmailCard