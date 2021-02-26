import React from 'react';
import { HomeWrapper } from '../style/Feed.style';
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
