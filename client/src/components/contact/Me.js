import React, { useEffect, useState } from "react";

import body from '../../resources/images/onlyBodyedit.png'

const Me = ({ error, success, message, loading, reference, show, changeDialog }) => {

    // useEffect(() => setTimeout(() => setShowDialog(true), 2000), [])

    const changeDialogAction = () => {
        // changeDialog(!show)
    }
  return (
    <>
      <div className='all-about' onClick={changeDialogAction}>
        {show ? (
          <>
            {loading && (
              <>
                <div class='bubble bubble-bottom-left flex_middle'>
                  <div class='loader-me'></div>
                </div>
              </>
            )}
            {error && (
              <>
                <div
                  class='bubble-error bubble-bottom-left flex_middle'
                  style={{ color: "red" }}
                >
                  Oops! We encountered an error :( Please try again after some
                  time!
                </div>
              </>
            )}
            {success && (
              <>
                <div
                  class='bubble bubble-bottom-left flex_middle'
                  style={{ color: "green", fontSize: "1em" }}
                >
                  Email Sent!!
                </div>
              </>
            )}
            {!error && !success && !loading && (
              <>
                <div class='bubble bubble-bottom-left'>
                  Send{" "}
                  <span
                    style={{
                      display: "inline-block",
                      color: "rgb(0, 145, 255)",
                    }}
                  >
                    me
                  </span>{" "}
                  an email and I'll{" "}
                  <span
                    style={{
                      display: "inline-block",
                      color: "rgb(0, 145, 255)",
                    }}
                  >
                    definitely
                  </span>{" "}
                  get{" "}
                  <span
                    style={{
                      display: "inline-block",
                      color: "rgb(0, 145, 255)",
                    }}
                  >
                    back
                  </span>{" "}
                  to you.
                </div>
              </>
            )}
            <div className='image'>
              <img src={body} alt='Face of Me' />
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

Me.propTypes = {};

export default Me;
