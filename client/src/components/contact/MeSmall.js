import React  from "react";

import useWindow from "react-window-size-simple";

import body from '../../resources/images/onlyBody.png'

const MeSmall = ({ error, success, message, loading, reference, show, changeDialog }) => {

   const { width, height } = useWindow()

    const changeDialogAction = () => {
        // changeDialog(!show)
    }
  return (
    <>
      <div className='all-about-small' onClick={changeDialogAction}>
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
            <div className='image flex_right'>
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

MeSmall.propTypes = {};

export default MeSmall;
