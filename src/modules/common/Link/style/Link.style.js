import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

const Link = styled(RouterLink)`
  color: #333;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;

export default Link;
