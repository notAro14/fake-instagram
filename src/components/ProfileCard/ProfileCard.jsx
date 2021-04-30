import React from 'react';
import {
  ProfileCardWrapper,
  ProfileAvatar,
  ProfileName,
  ProfileDisplayName,
  ProfileUserName,
} from './ProfileCard.style';
import { useUser } from '../../context/user.context';

const ProfileCard = () => {
  const {
    state: { user },
  } = useUser();
  return (
    <ProfileCardWrapper>
      <ProfileAvatar />
      <ProfileName>
        <ProfileUserName to="/profile">{user.username}</ProfileUserName>
        <ProfileDisplayName>{user.displayname}</ProfileDisplayName>
      </ProfileName>
    </ProfileCardWrapper>
  );
};

export default ProfileCard;