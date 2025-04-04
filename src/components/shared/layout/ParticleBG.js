import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticleBG() {

   const particlesInit = useCallback(async (engine) => {
     await loadFull(engine);
   }, []);

  return (
      <Particles
        id='tsparticles'
        init={particlesInit}
        options={{
          fullScreen: {
            enable: true,
            zIndex: -15
          },
          background: {
            opacity: 0
          },
          detectRetina: false,
          fpsLimit: 30,
          particles: {
            color: {
              value: "#0091ff"
            },
            number: {
              density: {
                enable: true,
                area: 1080
              },
              limit: 0,
              value: 100
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.05,
                speed: 2,
                sync: false
              },
              random: {
                enable: true,
                minimumValue: 0.05
              },
              value: 1
            },
            shape: {
              type: "circle"
            },
            size: {
              random: {
                enable: true,
                minimumValue: 1
              },
              value: 2
            }
          }
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1
        }}
      />
  );
}
