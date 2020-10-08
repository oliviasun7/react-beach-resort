import React from "react";

const Hero = ({ children, hero }) => {
  return (
    <header className={hero}>
      {children}
      <div></div>
    </header>
  );
};

Hero.defaultProps = {
  hero: "defaultHero",
};

export default Hero;
