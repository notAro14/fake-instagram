import styled from 'styled-components'

export const SearchUserWrapper = styled.div`
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
`

export const SearchUserInput = styled.input`
  border: none;
  font-size: 1rem;
  outline: none;
  padding-left: 0.5rem;
  width: 90%;
  &::placeholder {
    color: var(--text-secondary);
  }
`
