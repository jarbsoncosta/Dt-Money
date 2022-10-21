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

  input {
    padding-left: 1rem;
    border: 0;
    border-radius: 6px;
    width: 100%;
    max-width: 56.9rem;
    height: 3.37rem;
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-100']};
  }
`
export const NewTransactionButton = styled.button`
  max-width: 11rem;
  border: 0;
  margin-left: 1rem;
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  padding: 1rem;
  border-radius: 6px;
  svg {
    display: none;
  }
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme['green-700']};
    transition: background-color 0.2s;
  }
  @media (max-width: 500px) {
    padding: 0.5rem;
    p {
      display: none;
    }
    svg {
      display: block;
    }
  }
`
