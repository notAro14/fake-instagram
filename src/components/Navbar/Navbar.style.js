import styled from 'styled-components';
import Link from '../Link/Link.style';

export const Logo = styled.span`
  color: red;
  font-weight: 900;
  font-family: cursive;
`;

export const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
`;

export const NavbarWrapper = styled.nav`
  background-color: #fff;
  border-bottom: 1px solid var(--border-color);
  position: sticky;
  padding: 1rem 0;
  width: 100%;
  top: 0;
  z-index: 1;
`;

export const NavbarContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 70%;
  @media (max-width: 1200px) {
    width: 95%;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 150px;
  @media (max-width: 280px) {
    width: 95px;
  }
`;

export const NavLinkWrapper = styled.li`
  font-size: 1.5rem;
`;

export const SearchBarWrapper = styled.div`
  align-items: center;
  display: flex;
  border: 1px solid var(--text-secondary);
  border-radius: 4px;
  color: var(--text-secondary);
  font-size: 0.8rem;
  justify-content: space-between;
  padding: 0.5rem 0.5rem;
  width: 300px;
  @media (max-width: 765px) {
    display: none;
  }
`;

export const SearchBarInput = styled.input`
  border: none;
  font-size: 1rem;
  outline: none;
  padding-left: 0.5rem;
  width: 90%;
  &::placeholder {
    color: var(--text-secondary);
  }
`;
