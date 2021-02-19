import React from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';
import styled from 'styled-components';
import { MainWrapper } from './Home.style';
import postsJSON from '../../data/posts.json';
import Link from '../../components/Link/Link.style';

const CardWrapper = styled.div`
  background-color: white;
  border: 1px solid var(--border-color);
  border-radius: 3px;
  margin-bottom: var(--inter-post-space);
  width: 100%;
`;

const CardHeader = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1.2rem 0.75rem;
`;

const CardHeaderContent = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
`;

const CardUserAvatar = styled.div`
  --temp: 40px;
  background: lightgrey;
  border-radius: 100%;
  height: var(--temp);
  width: var(--temp);
`;

const CardUserName = styled.span`
  font-size: 0.95rem;
  margin-left: 0.85rem;
  ${Link} {
    position: relative;
    &::before {
      bottom: 0;
      background: currentColor;
      content: '';
      height: 1px;
      left: 0;
      position: absolute;
      transform: scale3d(0, 1, 1);
      transform-origin: right center;
      transition: transform 0.3s;
      width: 100%;
    }
    &:hover::before {
      transform: scale3d(1, 1, 1);
      transform-origin: left center;
    }
  }
`;

const CardHeaderAction = styled.div`
  cursor: pointer;
`;

const Main = () => {
  return (
    <MainWrapper>
      {postsJSON.map(post => (
        <CardWrapper key={post._id}>
          <CardHeader>
            <CardHeaderContent>
              <CardUserAvatar />
              <CardUserName>
                <Link to="/#">{post.creator_id}</Link>
              </CardUserName>
            </CardHeaderContent>
            <CardHeaderAction>
              <FiMoreHorizontal />
            </CardHeaderAction>
          </CardHeader>
          <div>Media</div>
          <div>Content</div>
          <div>Footer</div>
        </CardWrapper>
      ))}
    </MainWrapper>
  );
};

export default Main;
