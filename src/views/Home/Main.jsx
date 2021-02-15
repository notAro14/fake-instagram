import React from 'react';
import styled from 'styled-components';
import { MainWrapper } from './Home.style';
import postsJSON from '../../data/posts.json';

const CardWrapper = styled.div`
  background-color: white;
  border: 1px solid var(--border-color);
  border-radius: 3px;
  margin-bottom: var(--inter-post-space);
  width: 100%;
`;

const Main = () => {
  return (
    <MainWrapper>
      {postsJSON.map(post => (
        <CardWrapper key={post._id}>
          <div>Header</div>
          <div>Media</div>
          <div>Content</div>
          <div>Footer</div>
        </CardWrapper>
      ))}
    </MainWrapper>
  );
};

export default Main;
