import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function BackgroundLarge() {

   const particlesInit = useCallback(async (engine) => {
     await loadFull(engine);
   }, []);

   const particlesLoaded = useCallback(async (container) => {
   }, []);

  return (
    <Particles
      id='tsparticles'
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: {
          //   enable: true,
          zIndex: -10,
        },
        particles: {
          number: {
            value: 250,
            limit: 300,
          },
          color: {
            value: "#262626",
          },
          links: {
            color: {
              value: "#a9aaab",
            },
            enable: true,
            opacity: 0.2,
          },
          opacity: {
            value: 0.1,
          },
          size: {
            value: 2,
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "bubble",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              links: {
                opacity: 1,
              },
            },
            links: {
              color: "#ff0000",
            },
            bubble: {
              opacity: 0.9,
              size: 4,
              color: {
                value: "#3694ff",
              },
            },
          },
          onClick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
      }}
    />
  );
}
