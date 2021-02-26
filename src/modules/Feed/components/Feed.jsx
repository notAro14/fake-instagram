import React, { useEffect } from 'react';
import naruto from 'animexyz';
import { useLocation } from 'react-router-dom';
import { HomeWrapper } from '../style/Feed.style';
import Aside from './Aside';
import Main from './Main';

const Home = () => {
  const location = useLocation();

  useEffect(() => naruto({ duration: 2000 }), [location]);
  return (
    <HomeWrapper>
      <Main />
      <Aside />
    </HomeWrapper>
  );
};

export default Home;
