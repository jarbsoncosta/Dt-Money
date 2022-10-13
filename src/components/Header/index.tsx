import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import Logo from '../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={Logo} alt="" />
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
