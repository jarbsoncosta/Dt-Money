import { ContentLogo, HeaderContainer, HeaderContent, Logo, NewTransactionButton, UserLogged } from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'
import { Bank, Door } from 'phosphor-react'
import { useAuth } from '../../hooks/authContext'

export function Header() {
  const {user, signOut}= useAuth()
  return (
    <HeaderContainer>
      <HeaderContent>
        <ContentLogo className="logo-name">
          <Logo >
          <Bank color="#00875F" size={40} />
          <h2>Finance</h2>
          </Logo>
       {user && 
          <UserLogged>
          <strong>Olaa !</strong>
          <span>{user.name} </span>
          <p title="Sair" onClick={signOut}><Door color="#F75A68" size={30} /></p>
        </UserLogged>
       }
        </ContentLogo>
        <div>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <NewTransactionButton>Nova transação</NewTransactionButton>
            </Dialog.Trigger>
            <NewTransactionModal />
          </Dialog.Root>
        </div>
      </HeaderContent>
    </HeaderContainer>
  )
}
