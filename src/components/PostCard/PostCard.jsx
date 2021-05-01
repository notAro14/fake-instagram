import React, { createRef, useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';
import { FiMoreHorizontal, FiMessageCircle } from 'react-icons/fi';
import { BsHeart } from 'react-icons/bs';
import {
  CardAction,
  CardActions,
  CardContent,
  CardHeader,
  CardHeaderAction,
  CardHeaderContent,
  CardInfo,
  CardLeftActions,
  CardMedia,
  CardUserAvatar,
  CardUserName,
  CardWrapper,
  Description,
  Likes,
  ProfileLink,
  PublicationDate,
} from './PostCard.style';
import MyComment from './MyComment';
import { IDLE, LOADING, SUCCESS, ERROR } from '../../constants';
import { Spinner } from '../common';
import { useUser } from '../../context/user.context';

const Kaboom = ({ error }) => {
  throw new Error(error);
};

const Card = ({
  post: {
    _id = '',
    userId = '',
    image = '',
    description = '',
    createdAt,
    title,
  },
}) => {
  const commentRef = createRef();
  const [state, setState] = useState({ label: IDLE, message: '' });
  const [userInfo, setUserInfo] = useState(null);
  const {
    state: { user },
  } = useUser();
  useEffect(() => {
    setState({ label: LOADING, message: '' });
    const headers = new Headers({
      Authorization: `Bearer ${user.token}`,
    });
    fetch(`/api/users/profiles/${userId}`, {
      method: 'GET',
      headers,
    })
      .then(response => response.json())
      .then(data => {
        setState({ label: SUCCESS, message: '' });
        setUserInfo(data.users[0]);
      })
      .catch(error => {
        setState({ label: ERROR, message: error.message });
      });
  }, [userId, user]);

  return (
    <ErrorBoundary>
      {state.label === LOADING && <Spinner />}
      {state.label === ERROR && <Kaboom error={state.message} />}
      {state.label === SUCCESS && userInfo && (
        <CardWrapper data-test-id="postCard" key={_id}>
          <CardHeader>
            <CardHeaderContent>
              <CardUserAvatar />
              <CardUserName>
                <ProfileLink to="/#">{userInfo.username}</ProfileLink>
              </CardUserName>
            </CardHeaderContent>
            <CardHeaderAction>
              <FiMoreHorizontal />
            </CardHeaderAction>
          </CardHeader>
          <CardMedia alt={title} src={image} />
          <CardContent>
            <CardActions>
              <CardLeftActions>
                <CardAction>
                  {/* {liked ? (
                <BsHeartFill style={{ color: 'tomato' }} />
              ) : (
                <BsHeart />
              )} */}
                  <BsHeart />
                </CardAction>
                <CardAction
                  onClick={() => {
                    commentRef.current.focus();
                  }}
                >
                  <FiMessageCircle />
                </CardAction>
              </CardLeftActions>
            </CardActions>
            <CardInfo>
              {/* <Likes>{`${hearts} Like${hearts > 1 ? 's' : ''}`}</Likes> */}
              <Likes>14 likes</Likes>
              <ProfileLink to="/#">{userInfo.username}</ProfileLink>{' '}
              <Description>{description}</Description>
            </CardInfo>
            {/* <Comments>
          {comments.map(comment => (
            <Comment key={comment._id}>
              <ProfileLink to="/#">{comment.profileId}</ProfileLink>{' '}
              <Description>{comment.comment}</Description>
            </Comment>
          ))}
        </Comments> */}
          </CardContent>
          <PublicationDate>
            {`${formatDistanceToNow(new Date(createdAt))} ago`}
          </PublicationDate>
          <MyComment ref={commentRef} />
        </CardWrapper>
      )}
    </ErrorBoundary>
  );
};

Card.propTypes = {
  post: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
