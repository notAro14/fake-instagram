import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to {
      transform: rotate(360deg);
    }
`;

export const SpinnerOverlay = styled.div`
  --size: 30px;
  --border-size: 2px;
  animation: ${spin} 700ms ease-out infinite;
  border: var(--border-size) solid var(--text-secondary);
  border-radius: 50%;
  border-top-color: grey;
  height: var(--size);
  margin: 0 auto;
  margin-top: 20px;
  width: var(--size);
`;
