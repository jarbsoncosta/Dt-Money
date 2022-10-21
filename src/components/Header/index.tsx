import {
  ContentLogo,
  HeaderContainer,
  HeaderContent,
  Logo,
  UserLogged,
} from './styles'

import { Bank, Door, Plus } from 'phosphor-react'
import { useAuth } from '../../hooks/authContext'

export function Header() {
  const { user, signOut } = useAuth()
  return (
    <HeaderContainer>
      <HeaderContent>
        <ContentLogo className="logo-name">
          <Logo>
            <Bank color="#00875F" size={40} />
            <h2>Finance</h2>
          </Logo>
          {user && (
            <UserLogged>
              <strong>Olaa !</strong>
              <span>{user.name} </span>
              <p title="Sair" onClick={signOut} role="button">
                <Door color="#F75A68" size={30} />
              </p>
            </UserLogged>
          )}
        </ContentLogo>
        <div></div>
      </HeaderContent>
    </HeaderContainer>
  )
}
