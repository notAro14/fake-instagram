import React from 'react';
import { FooterWrapper } from './Footer.style';

const Footer = () => (
  <FooterWrapper>
    <p>{`@${new Date().getFullYear()} INSTAGRAM CLONE`}</p>
    <p>
      By <a href="https://github.com/notAro14">notAro14</a>
    </p>
  </FooterWrapper>
);

export default Footer;
