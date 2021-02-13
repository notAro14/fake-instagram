import styled from 'styled-components';
import Link from '../Link/Link.style';

export const Logo = styled.span`
  color: tomato;
  font-weight: 900;
  font-family: cursive;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
`;

export const NavbarWrapper = styled.nav`
  background-color: #fff;
  border-bottom: 1px solid #dbdbdb;
  position: fixed;
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
  width: 60%;
  @media (max-width: 1000px) {
    width: 80%;
  }
  @media (max-width: 768px) {
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

export const NavLinkContainer = styled.li`
  font-size: 1.5rem;
`;

export const SearchBarContainer = styled.div`
  align-items: center;
  display: flex;
  border: 1px solid #c8c8c8;
  border-radius: 4px;
  color: #c8c8c8;
  font-size: 0.8rem;
  justify-content: space-between;
  padding: 0.5rem 0.5rem;
  width: 250px;
  @media (max-width: 765px) {
    display: none;
  }
`;

export const SearchBarInput = styled.input`
  border: none;
  outline: none;
  padding-left: 0.5rem;
  width: 90%;
  &::placeholder {
    color: #c8c8c8;
  }
`;
