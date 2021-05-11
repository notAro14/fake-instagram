import styled from 'styled-components'

export const AsideWrapper = styled.aside`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 120px;
  position: -webkit-sticky;
  position: sticky;
  top: calc(var(--navbar-height) + 34px);
  width: 38%;
`
