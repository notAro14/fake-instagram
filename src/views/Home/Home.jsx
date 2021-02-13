import React from 'react';
import { HomeWrapper } from './Home.style';
import Aside from './Aside';
import Main from './Main';

const Home = () => {
  return (
    <HomeWrapper>
      <Main />
      <Aside />
    </HomeWrapper>
  );
};

export default Home;
