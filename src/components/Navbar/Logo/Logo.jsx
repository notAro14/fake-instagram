import React from 'react';
import logo from '../../../public/images/logo.png';
import { LogoWrapper, LogoPrefix } from './Logo.style';

const Logo = () => {
  return (
    <LogoWrapper to="/">
      <LogoPrefix>Fake -</LogoPrefix>
      <img alt="Instagram" src={logo} />
    </LogoWrapper>
  );
};

export default Logo;
