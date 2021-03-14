import React from 'react';
import styled from 'styled-components';
import useMediaQuery from '~hooks/useMediaQuery';
import Link from '~components/common/Link';
import { AsideWrapper } from './Aside.style';

const ProfileCard = styled.div`
  align-items: center;
  display: flex;
`;

const ProfileAvatar = styled.div`
  --avatar-size: 50px;
  align-items: center;
  background: lightgray;
  border-radius: 50%;
  display: flex;
  height: var(--avatar-size);
  margin-right: 20px;
  justify-content: center;
  width: var(--avatar-size);
  img {
    border-radius: 50%;
    width: 100%;
  }
`;

const ProfileName = styled.div``;

const ProfileDisplayName = styled.p`
  color: var(--text-secondary);
  font-size: 0.8rem;
`;

const ProfileUserName = styled(Link)`
  font-weight: 700;
`;

const Aside = () => {
  const isPage1000px = useMediaQuery('(max-width: 1000px');
  if (isPage1000px) return null;
  return (
    <AsideWrapper>
      <ProfileCard>
        <ProfileAvatar>
          <img
            alt="username"
            src="https://scontent-mrs2-2.cdninstagram.com/v/t51.2885-19/s320x320/131888888_1033141100500598_6056513135387954752_n.jpg?tp=1&_nc_ht=scontent-mrs2-2.cdninstagram.com&_nc_ohc=h41ZB1KGGiEAX-ZhNEC&oh=d6e4bb70f44e95dc03975e5f4b47f2cc&oe=60796021"
          />
        </ProfileAvatar>
        <ProfileName>
          <ProfileUserName to="/profile">username</ProfileUserName>
          <ProfileDisplayName>Display Name</ProfileDisplayName>
        </ProfileName>
      </ProfileCard>
    </AsideWrapper>
  );
};

export default Aside;
