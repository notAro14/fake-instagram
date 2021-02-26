import styled from 'styled-components';

export const FeedWrapper = styled.section`
  display: flex;
  height: 100%;
  justify-content: space-between;
`;

export const MainWrapper = styled.main`
  height: 100%;
  margin-top: 20px;
  width: 60%;
  @media (max-width: 1000px) {
    margin: 20px auto 0 auto;
    width: 100%;
  }
`;

export const AsideWrapper = styled.aside`
  align-self: flex-start;
  height: auto;
  position: -webkit-sticky;
  position: sticky;
  top: calc(var(--navbar-height) + 34px);
  width: 38%;
`;
