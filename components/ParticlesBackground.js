import Particles from "react-tsparticles"
import particlesConfig from "./config/particles-config"
import React from 'react';

const ParticlesBackground = () => {
  return (
    <div id='particle-background'>
      <Particles
        param={particlesConfig}
      ></Particles>
    </div>
  );
};

export default ParticlesBackground