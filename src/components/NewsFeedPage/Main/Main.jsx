import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useQuery } from 'react-query';
import { MainWrapper } from './Main.style';
import PostCard from '../../PostCard/PostCard';
import { useUser } from '../../../context/user.context';
import { Spinner, Kaboom, PrimaryLink, Button, Box } from '../../common';
import { getPosts } from '../../../api/post';

const Main = () => {
  const {
    state: { user },
  } = useUser();

  const {
    isLoading,
    isError,
    isSuccess,
    error,
    data: posts,
  } = useQuery('posts', () => getPosts({ _id: null }, { token: user.token }));

  return (
    <ErrorBoundary
      FallbackComponent={({ resetErrorBoundary }) => {
        return (
          <Box role="alert">
            <p style={{ textAlign: 'center', marginBottom: '15px' }}>
              😱 Something bad happened !
            </p>
            <Button type="button" onClick={resetErrorBoundary}>
              Reload
            </Button>
          </Box>
        );
      }}
    >
      <MainWrapper>
        {isLoading && <Spinner />}
        {isError && <Kaboom error={error.message} />}
        {isSuccess && posts.length > 0
          ? posts.map(post => <PostCard key={post._id} post={post} />)
          : null}
        {isSuccess && posts.length === 0 && (
          <div style={{ textAlign: 'center' }}>
            <p>There is no posts yet.</p>
            <p>
              <PrimaryLink to="/publish">Publish</PrimaryLink> the first one 😁
            </p>
          </div>
        )}
      </MainWrapper>
    </ErrorBoundary>
  );
};

export default Main;
