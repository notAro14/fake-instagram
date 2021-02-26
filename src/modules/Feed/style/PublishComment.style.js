import styled from 'styled-components';
import { AiOutlineSmile } from 'react-icons/ai';

export const MyComment = styled.div`
  align-items: center;
  border-top: 1px solid var(--border-color);
  display: flex;
  padding: 0.75rem 0;
  width: 100%;
`;

export const Emoji = styled(AiOutlineSmile)`
  font-size: 2rem;
  padding: 0 0.5rem;
  width: auto;
`;

export const MyCommentForm = styled.form`
  align-items: center;
  display: flex;
  width: 95%;
`;

export const MyCommentInput = styled.input`
  border: none;
  font-size: 0.8rem;
  outline: none;
  padding: 0 1rem;
  width: 100%;
  &::placeholder {
    color: var(--text-secondary);
  }
`;

export const MyCommentSubmitBtn = styled.button`
  background-color: inherit;
  border: none;
  color: dodgerblue;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0 0.5rem;
  &:disabled {
    opacity: 0.3;
  }
`;
