import styled from 'styled-components';

export const Label = styled.label`
  position: absolute;
  top: 27%;
  left: 10px;
  font-size: 0.85rem;
  pointer-events: none;
  transition: all ease-out 100ms;
  will-change: transform;
  color: var(--text-secondary);
`;

export const Input = styled.input`
  padding: 15px 5px 5px 10px;
  background-color: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: 5px;
  height: 100%;
  width: 100%;
  outline: none;
  &::placeholder {
    color: transparent;
  }
  color: #333;
  &:focus + ${Label}, &:not(:placeholder-shown) + ${Label} {
    transform: translateY(-8px);
    font-size: 0.65rem;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const FieldWrapper = styled.div`
  width: 100%;
`;

export const Error = styled.div`
  color: red;
  font-size: 0.75rem;
  text-align: right;
`;
