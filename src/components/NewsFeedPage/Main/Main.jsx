import React, { useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { MainWrapper } from './Main.style';
import PostCard from '../../PostCard/PostCard';
import { useUser } from '../../../context/user.context';
import { LOADING, SUCCESS, ERROR } from '../../../constants';
import { Spinner, Kaboom } from '../../common';
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
      FallbackComponent={({ error, resetErrorBoundary }) => {
        return (
          <div role="alert">
            <p>Feeds could not be loaded</p>
            <p>{error.message}</p>
            <button type="button" onClick={resetErrorBoundary}>
              Retry
            </button>
          </div>
        );
      }}
    >
      <MainWrapper>
        {state.label === LOADING && <Spinner />}
        {state.label === ERROR && <Kaboom error={state.message} />}
        {state.label === SUCCESS &&
          posts.map(post => <PostCard key={post._id} post={post} />)}
      </MainWrapper>
    </ErrorBoundary>
  );
};

export default Main;
