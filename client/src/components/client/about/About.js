import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Title from "../../common/layout/Title";
import useWindow from 'react-window-size-simple';

const About = ({ innerRef }) => {

  const { width } = useWindow

  const [isLoading, setIsLoading] = useState(true);

  const onLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      <div className='app' ref={innerRef}>
        <div className='about' style={{ justifyContent: "center" }}>
          <div style={{ marginBottom: "2.5em" }}>
            <Title
              icon={<FontAwesomeIcon icon={faUser} />}
              title={"About Me"}
            />
          </div>
          <div className='body app' style={{ alignItems: "flex-start" }}>
            <div className='details'>
              <div>
                Namaste! My name is Aunsh and in my 24 years on this planet,
                I've been a national-level cyclist, engineering student,
                award-winning researcher, high school teacher, and now a software developer.
              </div>
              <div style={{ marginTop: "2em" }}>
                I believe that technology should be as ergonomic as it is
                complex. Currently, I work as a software engineer at prosperix.com.
              </div>
              <div style={{ marginTop: "2em" }}>
                In my free time, I enjoy sipping on a cappuccino at my regular
                cafe while writing.
              </div>
            </div>
            <div
              className={width < 1028 ? "image flex_middle" : "image flex_left"}
            >
              <div
                style={{
                  display: isLoading ? "block" : "none",
                }}
                className='loader-about flex_middle'
              >
                <div className='loader-me' />
              </div>
              <div style={{ display: isLoading ? "none" : "block" }}>
                <img
                  src={
                    "https://i.postimg.cc/G2FVgJWc/Screenshot-20230223-170247.png"
                  }
                  alt='Aunsh Profile Pic'
                  onLoad={onLoad}
                />
              </div>
              <div className='border' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

About.propTypes = {}

export default About