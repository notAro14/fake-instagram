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
  Comment,
  Comments,
  Description,
  Likes,
  ProfileLink,
  PublicationDate,
} from './PostCard.style'
import MyComment from './MyComment'
// import { LOADING, SUCCESS, ERROR } from '../../constants';
import { Spinner, Button, Fallback } from '../common'
import { useUser } from '../../context/user.context'
import { getUserInfo } from '../../api/user'
import { getPosts, likePost } from '../../api/post'
import { createComment, getAllCommentsForAPost } from '../../api/comment'
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
  const { authState } = useUser()
  const {
    isLoading,
    isError,
    isSuccess,
    data: userInfo,
  } = useQuery(['user', userId], () =>
    getUserInfo({ userId, token: authState.token })
  )

  const postQuery = useQuery(['post', postId], () =>
    getPosts({ _id: postId, token: authState.token })
  )

  const commentsQuery = useQuery(['comments', postId], () =>
    getAllCommentsForAPost({ postId, token: authState.token })
  )

  const queryClient = useQueryClient()
  const postMutation = useMutation(likePost, {
    onSuccess: (data) => {
      switch (data.action) {
        case 'like':
          notify.emoji('Awesome', '😸')
          break
        case 'unlike':
          notify.emoji('Boo !!! Shame on you !', '👎🏼')
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
      {isError && (
        <p style={{ color: 'tomato' }} role='alert'>
          This post couldn&apos;t be fetched
        </p>
      )}
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
                    postMutation.mutate({ _id: postId, token: authState.token })
                  }
                >
                  {postQuery.isSuccess &&
                    postQuery.data &&
                    (postQuery.data[0].hearts.includes(
                      authState.userInfo.userId
                    ) ? (
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
            <Comments>
              {commentsQuery.isSuccess && commentsQuery.data
                ? commentsQuery.data.map(({ commentId, content, user }) => (
                    <Comment key={commentId}>
                      <ProfileLink to='/#'>{user.name}</ProfileLink>{' '}
                      <Description>{content}</Description>
                    </Comment>
                  ))
                : null}
            </Comments>
          </CardContent>
          <PublicationDate>
            {`${formatDistanceToNow(new Date(createdAt))} ago`}
          </PublicationDate>
          <MyComment
            onCreateComment={async (content) =>
              createComment({ postId, content, token: authState.token })
            }
            postId={postId}
            ref={commentRef}
          />
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
