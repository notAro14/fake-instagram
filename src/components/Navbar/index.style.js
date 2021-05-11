import styled from 'styled-components'

export const NavbarWrapper = styled.nav`
  background-color: #fff;
  border-bottom: 1px solid var(--border-color);
  position: sticky;
  padding: 1rem 0;
  width: 100%;
  top: 0;
  z-index: 1;
`

export const NavbarContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 70%;
  @media (max-width: 1200px) {
    width: 95%;
  }
`
