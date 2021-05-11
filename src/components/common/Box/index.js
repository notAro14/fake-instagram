import styled from 'styled-components'

export const Box = styled.div`
  background: white;
  border: 1px solid var(--border-color);
  margin: 20px auto 0 auto;
  padding: 2rem;
  width: 350px;
  @media (max-width: 765px) {
    background: inherit;
    border: 1px solid transparent;
  }
`
