import React from 'react'
import {
  ProfileCardWrapper,
  ProfileAvatar,
  ProfileName,
  ProfileDisplayName,
  ProfileUserName,
} from './ProfileCard.style'
import { useUser } from '../../context/user.context'

const ProfileCard = () => {
  const { authState } = useUser()
  return (
    <ProfileCardWrapper>
      <ProfileAvatar>
        {authState.userInfo.displayname.slice(0, 2).toUpperCase()}
      </ProfileAvatar>
      <ProfileName>
        <ProfileUserName to='/profile'>
          {authState.userInfo.username}
        </ProfileUserName>
        <ProfileDisplayName>
          {authState.userInfo.displayname}
        </ProfileDisplayName>
      </ProfileName>
    </ProfileCardWrapper>
  )
}

export default ProfileCard
