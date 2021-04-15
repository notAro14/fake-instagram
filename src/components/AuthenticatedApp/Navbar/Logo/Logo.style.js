import styled from 'styled-components';
import Link from '~components/common/Link';

export const LogoPrefix = styled.span`
  color: red;
  font-weight: 900;
  font-family: var(--secondary-font), cursive;
`;

export const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
`;
