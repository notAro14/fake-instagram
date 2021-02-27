import React from 'react';
import postsJSON from '~data/posts.json';
import { MainWrapper } from '../style/Feed.style';
import Card from './Card';

const Main = () => {
  return (
    <MainWrapper>
      {postsJSON.map(post => (
        <Card key={post._id} post={post} />
      ))}
    </MainWrapper>
  );
};

export default Main;
