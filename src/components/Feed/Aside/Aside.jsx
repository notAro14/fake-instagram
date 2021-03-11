import React from 'react';
import useMediaQuery from '~hooks/useMediaQuery';
import { AsideWrapper } from './Aside.style';

const Aside = () => {
  const isPage1000px = useMediaQuery('(max-width: 1000px');
  if (isPage1000px) return null;
  return (
    <AsideWrapper>
      <p>ASIDE</p>
      <p>ASIDE</p>
      <p>ASIDE</p>
      <p>ASIDE</p>
      <p>ASIDE</p>
      <p>ASIDE</p>
    </AsideWrapper>
  );
};

export default Aside;
