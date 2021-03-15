import styled from 'styled-components';

export const PublishPostWrapper = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border-color);
  background-color: white;
  margin-top: 20px;
  width: 50%;
  min-height: 250px;
  margin: 20px auto 0 auto;
  padding: 1.5rem;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 765px) {
    width: 100%;
  }
  h2 {
    font-family: var(--secondary-font), cursive;
    font-size: 2rem;
  }
`;
