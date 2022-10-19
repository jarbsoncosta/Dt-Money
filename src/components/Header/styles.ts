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
export const NewTransactionButton = styled.button`
  border: 0;
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  padding: 1rem;
  border-radius: 6px;
  svg{
    display: none;
  }
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme['green-700']};
    transition: background-color 0.2s;
  }
  @media (max-width: 500px) {
    margin-top: 0.9rem;
    padding: 0.5rem;
    p{
      display: none;
    }
    svg{
      display: block;
    }
  }
`
export const ContentLogo = styled.div`
  display: flex;
    flex-direction: column;    
    
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
strong{
  color: ${(props) => props.theme['green-500']};
}
span{
  color: ${(props) => props.theme['gray-500']};
}
p{

  cursor: pointer;
}

`
