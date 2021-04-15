import React from 'react';
import {
  ProfileCardWrapper,
  ProfileAvatar,
  ProfileName,
  ProfileDisplayName,
  ProfileUserName,
} from './ProfileCard.style';

const ProfileCard = () => (
  <ProfileCardWrapper>
    <ProfileAvatar>
      <img
        alt="username"
        // good size
        src="https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
        // bad size
        // src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
      />
    </ProfileAvatar>
    <ProfileName>
      <ProfileUserName to="/profile">username</ProfileUserName>
      <ProfileDisplayName>Display Name</ProfileDisplayName>
    </ProfileName>
  </ProfileCardWrapper>
);

export default ProfileCard;
