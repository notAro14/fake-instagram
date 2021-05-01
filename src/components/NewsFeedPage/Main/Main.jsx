import React, { useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { MainWrapper } from './Main.style';
import PostCard from '../../PostCard/PostCard';
import { useUser } from '../../../context/user.context';
import { LOADING, SUCCESS, ERROR } from '../../../constants';
import { Spinner, Kaboom, PrimaryLink, Button, Box } from '../../common';
import { getPosts } from '../../../api/post';

const Main = () => {
  const {
    state: { user },
  } = useUser();
  const [posts, setPosts] = useState([]);
  const [state, setState] = useState({ label: LOADING, message: '' });

  useEffect(() => {
    setState(LOADING);
    getPosts({ _id: null }, { token: user.token }).then(
      data => {
        setState({ label: SUCCESS, message: '' });
        setPosts(data);
      },
      error => {
        setState({ label: ERROR, message: error.message });
      }
    );
  }, [user]);

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
        {state.label === LOADING && <Spinner />}
        {state.label === ERROR && <Kaboom error={state.message} />}
        {state.label === SUCCESS && posts.length
          ? posts.map(post => <PostCard key={post._id} post={post} />)
          : null}
        {state.label === SUCCESS && posts.length === 0 && (
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
