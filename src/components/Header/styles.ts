import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2.5rem 0 7.5rem;
  background: ${(props) => props.theme['gray-900']};
`
export const HeaderContent = styled.div`
  width: 100%;
  padding: 0 1rem;
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme['gray-900']};
`
export const NewTransactionButton = styled.button`
  border: 0;

  height: 3.12rem;
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;

  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme['green-700']};
    transition: background-color 0.2s;
  }
`
