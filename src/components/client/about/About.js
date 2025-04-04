import {
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from 'react';
import useWindow from 'react-window-size-simple';
import Title from "../../common/layout/Title";

const About = ({ innerRef }) => {

  const { width } = useWindow

  const [isLoading, setIsLoading] = useState(true);

  const onLoad = () => {
    setIsLoading(false);
  };

  return (
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
                Namaste! My name is Aunsh and in my 26 years on this planet,
                I've been a national-level cyclist, engineering student,
                award-winning researcher, high school teacher and a
                software developer.
              </div>
              <div style={{ marginTop: "2em" }}>
                
              </div>
              <div style={{ marginTop: "2em" }}>
                Apart from my work station one can find me at the gym or my
                regular cafe enjoying a cappuccino
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
              <div
                style={{
                  display: isLoading ? "none" : "block",
                  borderRadius: "8px",
                }}
              >
                <img
                  src={
                    "https://i.postimg.cc/BZxtHLFM/Whats-App-Image-2024-01-14-at-18-18-20-2933dca3.jpg"
                  }
                  alt='Aunsh Profile Pic'
                  onLoad={onLoad}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className='border' />
            </div>
          </div>
        </div>
      </div>
  );
};

About.propTypes = {}

export default About