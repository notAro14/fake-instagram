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
        src="https://scontent-mrs2-2.cdninstagram.com/v/t51.2885-19/s320x320/131888888_1033141100500598_6056513135387954752_n.jpg?tp=1&_nc_ht=scontent-mrs2-2.cdninstagram.com&_nc_ohc=h41ZB1KGGiEAX-ZhNEC&oh=d6e4bb70f44e95dc03975e5f4b47f2cc&oe=60796021"
      />
    </ProfileAvatar>
    <ProfileName>
      <ProfileUserName to="/profile">username</ProfileUserName>
      <ProfileDisplayName>Display Name</ProfileDisplayName>
    </ProfileName>
  </ProfileCardWrapper>
);

export default ProfileCard;
