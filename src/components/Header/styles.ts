import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2.5rem 0 7.5rem;
  background: ${(props) => props.theme['gray-900']};
`
export const HeaderContent = styled.div`
  width: 100%;
  padding: 0 1.5rem;
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme['gray-900']};
`

export const ContentLogo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`
export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
export const UserLogged = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  strong {
    color: ${(props) => props.theme['green-500']};
  }
  span {
    color: ${(props) => props.theme['gray-500']};
  }
  p {
    cursor: pointer;
  }
`
