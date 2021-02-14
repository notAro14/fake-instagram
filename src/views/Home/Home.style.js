import styled from 'styled-components';

export const HomeWrapper = styled.section`
  display: flex;
  height: 100%;
`;

export const MainWrapper = styled.main`
  height: 100%;
  width: 60%;
  @media (max-width: 1000px) {
    margin: 0 auto;
    width: 100%;
  }
`;

export const AsideWrapper = styled.aside`
  align-self: flex-start;
  height: auto;
  position: -webkit-sticky;
  position: sticky;
  top: 66px;
  width: 40%;
`;
