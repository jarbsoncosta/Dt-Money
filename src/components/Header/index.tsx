import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import Logo from '../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'
import { Bank, TrendUp } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div className="logo">
          <Bank color="#00875F" size={40} />
          <h2>Finance</h2>
        </div>
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
