import React from 'react';
import postsJSON from '~data/posts.json';
import { MainWrapper } from './Main.style';
import PostCard from './PostCard/PostCard';

const Main = () => {
  return (
    <MainWrapper>
      {postsJSON.map(post => (
        <PostCard key={post._id} post={post} />
      ))}
    </MainWrapper>
  );
};

export default Main;
