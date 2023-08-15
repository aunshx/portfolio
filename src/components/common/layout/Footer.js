import React from 'react';

const Footer = () => {
  return (
    <div className='footer app'>
      <div className='text flex_middle' style={{ marginBottom: "0.5em" }}>
        <div style={{ fontSize: "0.8em" }}>
          Handcrafted with &#10084; by{" "}
          <a
            href='https://admin.aunsh.com/login'
            target={"_blank"}
            rel='noreferrer nofollow'
            style={{
              fontSize: "0.95em",
              marginRight: "0em",
              pointerEvents: "none",
            }}
          >
            Aunsh B
          </a>{" "}
        </div>
        <div style={{ fontSize: "0.8em", margin: "0 0.45em" }}>in</div>
        <div class='flag india' style={{ marginBottom: '0.1em' }} >
          <img
            src='https://imgur.com/nm8Qq5m.png'
            alt='Indian Flag'
            style={{ width: "4px" }}
          />
        </div>
      </div>
      <div
        className='text'
        style={{ fontSize: "0.55em", fontWeight: "200", marginTop: "0em" }}
      >
        v2.3 &middot; Update 15 Aug 23 &middot; All rights reserved
      </div>
    </div>
  );
};

Footer.propTypes = {};  

export default Footer;
