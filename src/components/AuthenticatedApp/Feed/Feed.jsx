import React from 'react';
import { FeedWrapper } from './Feed.style';
import Aside from './Aside';
import Main from './Main';

const Home = () => {
  return (
    <FeedWrapper>
      <Main />
      <Aside />
    </FeedWrapper>
  );
};

export default Home;
