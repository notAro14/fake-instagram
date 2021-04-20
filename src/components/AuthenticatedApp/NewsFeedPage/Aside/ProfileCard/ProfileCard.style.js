import styled from 'styled-components';
import { Link } from '~components/common';

export const ProfileCardWrapper = styled.div`
  align-items: center;
  display: flex;
`;

export const ProfileAvatar = styled.div`
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

export const ProfileName = styled.div``;

export const ProfileDisplayName = styled.p`
  color: var(--text-secondary);
  font-size: 0.8rem;
`;

export const ProfileUserName = styled(Link)`
  font-weight: 700;
`;
