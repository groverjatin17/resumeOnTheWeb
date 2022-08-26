import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

function Particle2() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              quantity: 1,
            },
          },
        },
        particles: {
          links: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            directions: "right",
            // enable: true,
            // outModes: {
            //     default: "bounce",
            // },
            // random: false,
            speed: 0.05,
            // straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 1500,
            },
            value: 160,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
          size: {
            value: 1,
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default Particle2;
