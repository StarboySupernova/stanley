import React from 'react';
// import { GrTechnology } from 'react-icons/gr';
import { StaticImage } from 'gatsby-plugin-image';
import LogoStyles from '../styles/LogoStyles';

function Logo() {
  const width = 50;
  const height = 50;
  return (
    <LogoStyles to="/">
      <StaticImage
        src="../images/Papirus-Team-Papirus-Apps-Scummvm.512.png"
        width={width}
        height={height}
      />
    </LogoStyles>
  );
}

export default Logo;
