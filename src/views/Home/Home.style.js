import styled from 'styled-components';

export const HomeWrapper = styled.section`
  display: flex;
  height: 100%;
`;

export const LeftWrapper = styled.main`
  background-color: dodgerblue;
  height: 100%;
  width: 60%;
  @media (max-width: 1000px) {
    margin: 0 auto;
    width: 100%;
  }
`;

export const RightWrapper = styled.aside`
  align-self: flex-start;
  background-color: green;
  height: auto;
  position: -webkit-sticky;
  position: sticky;
  top: 66px;
  width: 40%;
  @media (max-width: 1000px) {
    display: none;
  }
`;
