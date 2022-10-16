import styled from 'styled-components'

export const SearchContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  padding: 4rem 1.5rem 1rem 1.5rem;
  margin: 0 auto;
`
export const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;

  input {
    padding-left: 1rem;
    border: 0;
    border-radius: 6px;
    width: 100%;
    max-width: 59.6rem;
    height: 3.37rem;
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-100']};
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    color: ${(props) => props.theme['green-300']};
    background: transparent;
    border: 0;
    border: 1px solid ${(props) => props.theme['green-300']};
    border-radius: 6px;
    padding: 1rem;

    cursor: pointer;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};
      border-color: ${(props) => props.theme['green-500']};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
    @media (max-width: 750px) {
      p {
        display: none;
      }
    }
  }
`
