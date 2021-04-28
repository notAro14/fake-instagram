import React from 'react';
import { FeedWrapper } from './NewsFeedPage.style';
import Aside from './Aside';
import Main from './Main';

const NewsFeedPage = () => {
  return (
    <FeedWrapper>
      <Main />
      <Aside />
    </FeedWrapper>
  );
};

export default NewsFeedPage;
