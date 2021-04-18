import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import { FiMoreHorizontal, FiMessageCircle } from 'react-icons/fi';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
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
  Comment,
  Comments,
  Description,
  Likes,
  ProfileLink,
} from './PostCard.style';
import MyComment from './MyComment';

const Card = ({
  post: {
    _id = 0,
    creatorDisplayName = '',
    creatorId = 0,
    image = '',
    liked = false,
    description = '',
    hearts = 0,
    comments = [],
  },
}) => {
  const commentRef = createRef();
  return (
    <CardWrapper data-test-id="postCard" key={_id}>
      <CardHeader>
        <CardHeaderContent>
          <CardUserAvatar />
          <CardUserName>
            <ProfileLink to="/#">{creatorId}</ProfileLink>
          </CardUserName>
        </CardHeaderContent>
        <CardHeaderAction>
          <FiMoreHorizontal />
        </CardHeaderAction>
      </CardHeader>
      <CardMedia alt={creatorDisplayName} src={image} />
      <CardContent>
        <CardActions>
          <CardLeftActions>
            <CardAction>
              {liked ? (
                <BsHeartFill style={{ color: 'tomato' }} />
              ) : (
                <BsHeart />
              )}
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
          <Likes>{`${hearts} Like${hearts > 1 ? 's' : ''}`}</Likes>
          <ProfileLink to="/#">{creatorId}</ProfileLink>{' '}
          <Description>{description}</Description>
        </CardInfo>
        <Comments>
          {comments.map(comment => (
            <Comment key={comment._id}>
              <ProfileLink to="/#">{comment.profileId}</ProfileLink>{' '}
              <Description>{comment.comment}</Description>
            </Comment>
          ))}
        </Comments>
      </CardContent>
      <MyComment ref={commentRef} />
    </CardWrapper>
  );
};

Card.propTypes = {
  post: PropTypes.shape({
    _id: PropTypes.number,
    creatorDisplayName: PropTypes.string,
    creatorId: PropTypes.number,
    image: PropTypes.string,
    liked: PropTypes.bool,
    bookmarked: PropTypes.bool,
    description: PropTypes.string,
    hearts: PropTypes.number,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.number,
        comment: PropTypes.string,
        profileId: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default Card;
