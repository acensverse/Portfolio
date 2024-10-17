import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // importing slim version

const Particle = () => {
  const [init, setInit] = useState(false);

  // Initialize the particles engine once per app lifecycle
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Load only slim version for performance
    }).then(() => {
      setInit(true); // Set initialization complete
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log("Particles Loaded: ", container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent", // Background color for particles container
        },
      },
      fpsLimit: 120, // Max frame rate for particles animation
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push", // Add particles on click
          },
          onHover: {
            enable: true,
            mode: "repulse", // Repulse particles on hover
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#696be0", // Particle color
        },
        links: {
          color: "#0e11e6", // Line color connecting particles
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce", // Bounce when hitting the container edges
          },
          speed: 6, // Speed of particle movement
        },
        number: {
          value: 80,
          density: {
            enable: true, // Enable density for particle spread
          },
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle", // Shape of the particles
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true, // Adjust for retina displays
    }),
    []
  );

  // Conditionally render the Particles component when the engine is initialized
  if (!init) {
    return <div>Loading particles...</div>; // Fallback while particles are loading
  }

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded} // Callback when particles are loaded
      options={options}
    />
  );
};

export default Particle;
