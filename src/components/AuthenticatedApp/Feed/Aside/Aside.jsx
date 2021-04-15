import React from 'react';
import useMediaQuery from '~hooks/useMediaQuery';
import { AsideWrapper } from './Aside.style';
import ProfileCard from './ProfileCard';
import Footer from './Footer';

const Aside = () => {
  const isPage1000px = useMediaQuery('(max-width: 1000px');
  return isPage1000px ? null : (
    <AsideWrapper>
      <ProfileCard />
      <Footer />
    </AsideWrapper>
  );
};

export default Aside;
