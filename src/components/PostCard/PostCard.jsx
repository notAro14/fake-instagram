import React, { createRef } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { formatDistanceToNow } from 'date-fns'
import PropTypes from 'prop-types'
import { FiMoreHorizontal, FiMessageCircle } from 'react-icons/fi'
import { BsHeart, BsHeartFill } from 'react-icons/bs'
import { useQuery, useMutation, useQueryClient } from 'react-query'
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
} from './PostCard.style'
import MyComment from './MyComment'
// import { LOADING, SUCCESS, ERROR } from '../../constants';
import { Spinner, Kaboom, Button, Fallback } from '../common'
import { useUser } from '../../context/user.context'
import { getUserInfo } from '../../api/user'
import { getPosts, likePost } from '../../api/post'
import notify from '../../helpers/notification'

const PostCard = ({
  post: {
    _id: postId = '',
    userId = '',
    image = '',
    description = '',
    createdAt,
    title,
  },
}) => {
  const commentRef = createRef()
  const {
    state: { user },
  } = useUser()
  const {
    isLoading,
    isError,
    isSuccess,
    error,
    data: userInfo,
  } = useQuery(['user', userId], () =>
    getUserInfo({ userId, token: user.token })
  )

  const postQuery = useQuery(['post', postId], () =>
    getPosts({ _id: postId, token: user.token })
  )
  const queryClient = useQueryClient()
  const postMutation = useMutation(likePost, {
    onSuccess: (data) => {
      switch (data.action) {
        case 'like':
          notify.success('😁 Awesome')
          break
        case 'unlike':
          notify.success('👎🏼 Boo !!! Shame on you !')
          break
        default:
          notify.success('Action succeed')
          break
      }
    },
    onError: (err) => notify.error(err.message || "Oops that didn 't work"),
    onSettled: () => queryClient.invalidateQueries(['post', postId]),
  })

  return (
    <ErrorBoundary
      FallbackComponent={({ resetErrorBoundary }) => {
        return (
          <Fallback role='alert'>
            <p style={{ textAlign: 'center', marginBottom: '15px' }}>
              😨 Oops, this post failed to load
            </p>
            <Button type='button' onClick={resetErrorBoundary}>
              🤔 Try again
            </Button>
          </Fallback>
        )
      }}
    >
      {isLoading && <Spinner />}
      {isError && <Kaboom error={error.message} />}
      {isSuccess && (
        <CardWrapper data-test-id='postCard' key={postId}>
          <CardHeader>
            <CardHeaderContent>
              <CardUserAvatar>
                {userInfo.displayname.slice(0, 2).toUpperCase()}
              </CardUserAvatar>
              <CardUserName>
                <ProfileLink to='/#'>{userInfo.username}</ProfileLink>
              </CardUserName>
            </CardHeaderContent>
            <CardHeaderAction>
              <FiMoreHorizontal />
            </CardHeaderAction>
          </CardHeader>
          <CardMedia alt={title} src={image} loading='lazy' />
          <CardContent>
            <CardActions>
              <CardLeftActions>
                <CardAction
                  onClick={() =>
                    postMutation.mutate({ _id: postId, token: user.token })
                  }
                >
                  {postQuery.isSuccess &&
                    postQuery.data &&
                    (postQuery.data[0].hearts.includes(user.userId) ? (
                      <BsHeartFill style={{ color: 'tomato' }} />
                    ) : (
                      <BsHeart />
                    ))}
                </CardAction>
                <CardAction
                  onClick={() => {
                    commentRef.current.focus()
                  }}
                >
                  <FiMessageCircle />
                </CardAction>
              </CardLeftActions>
            </CardActions>
            <CardInfo>
              <Likes>
                {postQuery.isSuccess &&
                  postQuery.data &&
                  `${postQuery.data[0].hearts.length} Like${
                    postQuery.data[0].hearts.length > 1 ? 's' : ''
                  }`}
              </Likes>
              <ProfileLink to='/#'>{userInfo.username}</ProfileLink>{' '}
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
  )
}

PostCard.propTypes = {
  post: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    hearts: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
  }).isRequired,
}

export default PostCard
