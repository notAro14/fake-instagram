import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { MainWrapper } from './Main.style';
import PostCard from '../../PostCard/PostCard';
import { useUser } from '../../../context/user.context';
import { IDLE, LOADING } from '../../../constants';
import { Spinner } from '../../common';

const Main = () => {
  const {
    state: { user },
  } = useUser();
  const [posts, setPosts] = useState([]);
  const [state, setState] = useState(IDLE);

  useEffect(() => {
    const headers = new Headers({
      Authorization: `Bearer ${user.token}`,
    });
    setState(LOADING);
    fetch('api/posts', {
      method: 'GET',
      headers,
    })
      .then(response => response.json())
      .then(data => {
        setPosts(data.posts);
        setState(IDLE);
      })
      .catch(error => {
        toast.error(error.message);
        setState(IDLE);
      });
  }, [user]);

  return (
    <>
      <MainWrapper>
        {state === LOADING ? (
          <Spinner />
        ) : (
          posts.map(post => <PostCard key={post._id} post={post} />)
        )}
      </MainWrapper>
    </>
  );
};

export default Main;
