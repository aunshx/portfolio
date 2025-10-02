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
          zIndex: 0 // IMPORTANT: Changed from -10 to 0 to be consistent with style
        },
        background: {
          opacity: 0
        },
        detectRetina: true, // Enable retina detection for better mobile rendering
        fpsLimit: 60, // Good balance between performance and quality
        particles: {
          color: {
            value: "#0091ff"
          },
          number: {
            density: {
              enable: true,
              area: 1200 // Slightly higher density
            },
            limit: 0,
            value: 150 // Reduced for better performance
          },
          opacity: {
            animation: {
              enable: true,
              minimumValue: 0.05,
              speed: 1.5, // Slower animations look better with fixed background
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
            value: 1.8 // Slightly smaller particles
          },
          move: {
            enable: false,
            speed: 0.8, // Very slow movement to appear almost static
            direction: "none",
            random: true,
            straight: false,
            outModes: "out"
          }
        }
      }}
      style={{
        position: "fixed", // Fixed position so it stays in place during scroll
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0, // IMPORTANT: Changed from -1 to 0 to make particles visible above backgrounds
        pointerEvents: "none" // Ensure clicks pass through
      }}
    />
  );
}
