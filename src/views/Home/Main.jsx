import React from 'react';
import { FiMoreHorizontal, FiMessageCircle, FiSend } from 'react-icons/fi';
import {
  BsHeart,
  BsHeartFill,
  BsBookmark,
  BsBookmarkFill,
} from 'react-icons/bs';
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
  img {
    width: 100%;
    height: auto;
  }
`;

const CardUserName = styled.span`
  font-size: 0.95rem;
  margin-left: 0.85rem;
  ${Link} {
    position: relative;
    &::before {
      background: currentColor;
      content: '';
      height: 2px;
      left: 0;
      position: absolute;
      top: 120%;
      transform: scale3d(0, 1, 1);
      transform-origin: right center;
      transition: transform 250ms;
      transition-timing-function: ease-out;
      width: 100%;
    }
    &:hover::before {
      transform: scale3d(1, 1, 1);
      transform-origin: left center;
      transition-timing-function: ease-in;
    }
  }
`;

const CardHeaderAction = styled.div`
  cursor: pointer;
`;

const CardMedia = styled.img`
  background: lightgray;
  width: 100%;
`;

const CardActions = styled.div`
  align-items: center;
  display: flex;
  font-size: 1.75rem;
  justify-content: space-between;
  padding: 0.1rem 0;
`;

const CardAction = styled.span`
  cursor: pointer;
`;

const CardContent = styled.div`
  padding: 0.5rem 0.75rem;
`;

const CardLeftActions = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  width: 125px;
`;

const CardRightActions = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
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
                <Link to="/#">{post.creatorId}</Link>
              </CardUserName>
            </CardHeaderContent>
            <CardHeaderAction>
              <FiMoreHorizontal />
            </CardHeaderAction>
          </CardHeader>
          <CardMedia alt={post.creatorDisplayName} src={post.image} />
          <CardContent>
            <CardActions>
              <CardLeftActions>
                <CardAction>
                  {post.liked ? <BsHeartFill /> : <BsHeart />}
                </CardAction>
                <CardAction>
                  <FiMessageCircle />
                </CardAction>
                <CardAction>
                  <FiSend />
                </CardAction>
              </CardLeftActions>
              <CardRightActions>
                <CardAction>
                  {post.bookmarked ? <BsBookmarkFill /> : <BsBookmark />}
                </CardAction>
              </CardRightActions>
            </CardActions>
            <div>Content</div>
            <div>Comments</div>
          </CardContent>
          <div>My Comment</div>
        </CardWrapper>
      ))}
    </MainWrapper>
  );
};

export default Main;
