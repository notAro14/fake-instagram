import styled from 'styled-components';
import { Link } from 'Components/common';

export const CardWrapper = styled.div`
  background-color: white;
  border: 1px solid var(--border-color);
  border-radius: 3px;
  margin-bottom: var(--inter-post-space);
`;

export const CardHeader = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1.2rem 0.75rem;
`;

export const CardHeaderContent = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
`;

export const CardUserAvatar = styled.div`
  --temp: 40px;
  background: lightgrey;
  border-radius: 100%;
  height: var(--temp);
  width: var(--temp);
  img {
    width: 100%;
    height: auto;
  }
`;

export const CardUserName = styled.span`
  font-size: 0.95rem;
  margin-left: 0.85rem;
`;

export const CardHeaderAction = styled.div`
  cursor: pointer;
`;

export const CardMedia = styled.img`
  background: lightgray;
  width: 100%;
`;

export const CardActions = styled.div`
  align-items: center;
  display: flex;
  font-size: 1.75rem;
  justify-content: space-between;
  padding: 0.1rem 0;
`;

export const CardAction = styled.span`
  cursor: pointer;
`;

export const CardContent = styled.div`
  padding: 0.5rem 0.75rem;
`;

export const CardLeftActions = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  width: 125px;
`;

export const CardRightActions = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const ProfileLink = styled(Link)`
  font-size: 0.9rem;
  font-weight: 900;
  position: relative;
  &::before {
    background: currentColor;
    content: '';
    height: 2px;
    left: 0;
    position: absolute;
    top: 100%;
    transform: scale3d(0, 1, 1);
    transform-origin: right center;
    transition: transform 250ms;
    transition-timing-function: ease-out;
    width: 100%;
  }
  &:hover::before {
    transform: scale3d(1, 1, 1);
    transform-origin: left center;
    transition-timing-function: ease-in;
  }
`;

export const Likes = styled.p`
  font-size: 0.9rem;
  font-weight: 700;
  padding-bottom: 0.5rem;
`;

export const CardInfo = styled.div`
  padding: 0.75rem 0;
`;

export const Description = styled.span`
  font-size: 0.8rem;
`;

export const Comment = styled.div`
  padding-bottom: 0.2rem;
`;

export const Comments = styled.div``;
