import React from 'react';
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
} from '../style/Card.style';
import PublishComment from './PublishComment';

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
  return (
    <CardWrapper key={_id}>
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
            <CardAction>
              <FiMessageCircle />
            </CardAction>
            {/* <CardAction>
              <FiSend />
            </CardAction> */}
          </CardLeftActions>
          {/* <CardRightActions>
            <CardAction>
              {bookmarked ? (
                <BsBookmarkFill style={{ color: 'dodgerblue' }} />
              ) : (
                <BsBookmark />
              )}
            </CardAction>
          </CardRightActions> */}
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
      <PublishComment />
    </CardWrapper>
  );
};

Card.propTypes = {
  post: PropTypes.shape({
    _id: PropTypes.number,
    creatorDisplayName: PropTypes.string,
    creatorId: PropTypes.string,
    image: PropTypes.string,
    liked: PropTypes.bool,
    bookmarked: PropTypes.bool,
    description: PropTypes.string,
    hearts: PropTypes.string,
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
