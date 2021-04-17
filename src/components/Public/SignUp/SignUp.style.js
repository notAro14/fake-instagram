import styled from 'styled-components';

export const SignUpWrapper = styled.div`
  background: white;
  border: 1px solid var(--border-color);
  margin: 20px auto 0 auto;
  padding: 2.5rem;
  width: 350px;
  @media (max-width: 765px) {
    background: inherit;
    border: 1px solid transparent;
  }
`;

export const Title = styled.h2`
  font-family: var(--secondary-font), cursive;
  font-size: 2rem;
  margin-bottom: 25px;
  text-align: center;
`;

export const CatchPhrase = styled.h2`
  color: rgb(142, 142, 142);
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 15px;
  text-align: center;
`;
