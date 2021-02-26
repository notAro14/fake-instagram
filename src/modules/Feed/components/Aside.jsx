import React from 'react';
import { AsideWrapper } from '../style/Feed.style';
import useMediaQuery from '../../common/hooks/useMediaQuery';

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
