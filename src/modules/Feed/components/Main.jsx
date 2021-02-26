import React from 'react';
import { AiOutlineSmile } from 'react-icons/ai';
import { FiMoreHorizontal, FiMessageCircle, FiSend } from 'react-icons/fi';
import {
  BsHeart,
  BsHeartFill,
  BsBookmark,
  BsBookmarkFill,
} from 'react-icons/bs';
import styled from 'styled-components';
import { MainWrapper } from '../style/Feed.style';
import postsJSON from '../../../data/posts.json';
import Link from '../../common/Link';

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
  justify-content: space-between;
  width: 125px;
`;

const CardRightActions = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const ProfileLink = styled(Link)`
  font-size: 0.9rem;
  font-weight: 900;
  position: relative;
  &::before {
    background: currentColor;
    content: '';
    height: 2px;
    left: 0;
    position: absolute;
    top: 100%;
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
`;

const Likes = styled.p`
  font-size: 0.9rem;
  font-weight: 700;
  padding-bottom: 0.5rem;
`;

const CardInfo = styled.div`
  padding: 0.75rem 0;
`;

const Description = styled.span`
  font-size: 0.8rem;
`;

const Comment = styled.div`
  padding-bottom: 0.2rem;
`;

const Comments = styled.div``;

const MyComment = styled.div`
  align-items: center;
  border-top: 1px solid var(--border-color);
  display: flex;
  padding: 0.75rem 0;
  width: 100%;
`;

const Emoji = styled(AiOutlineSmile)`
  font-size: 2rem;
  padding: 0 0.5rem;
  width: auto;
`;

const MyCommentForm = styled.form`
  align-items: center;
  display: flex;
  width: 95%;
`;

const MyCommentInput = styled.input`
  border: none;
  font-size: 0.8rem;
  outline: none;
  padding: 0 1rem;
  width: 100%;
  &::placeholder {
    color: var(--text-secondary);
  }
`;

const MyCommentSubmitBtn = styled.button`
  background-color: inherit;
  border: none;
  color: dodgerblue;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0 0.5rem;
  &:disabled {
    opacity: 0.3;
  }
`;

const PublishComment = () => {
  const [input, setInput] = React.useState('');
  const onInputChange = evt => setInput(evt.target.value);
  return (
    <MyComment>
      <Emoji />
      <MyCommentForm>
        <MyCommentInput
          placeholder="Add a comment..."
          id="my-comment"
          name="my-comment"
          type="text"
          onChange={onInputChange}
          value={input}
        />
        <MyCommentSubmitBtn disabled={input.length === 0} type="submit">
          Publish
        </MyCommentSubmitBtn>
      </MyCommentForm>
    </MyComment>
  );
};

const Main = () => {
  return (
    <MainWrapper>
      {postsJSON.map(post => (
        <CardWrapper key={post._id}>
          <CardHeader>
            <CardHeaderContent>
              <CardUserAvatar />
              <CardUserName>
                <ProfileLink to="/#">{post.creatorId}</ProfileLink>
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
            <CardInfo>
              <Likes>
                {`${post.hearts} Like${post.hearts > 1 ? 's' : ''}`}
              </Likes>
              <ProfileLink to="/#">{post.creatorId}</ProfileLink>{' '}
              <Description>{post.description}</Description>
            </CardInfo>
            <Comments>
              {post.comments.map(comment => (
                <Comment key={comment._id}>
                  <ProfileLink to="/#">{comment.profileId}</ProfileLink>{' '}
                  <Description>{comment.comment}</Description>
                </Comment>
              ))}
            </Comments>
          </CardContent>
          <PublishComment />
        </CardWrapper>
      ))}
    </MainWrapper>
  );
};

export default Main;
