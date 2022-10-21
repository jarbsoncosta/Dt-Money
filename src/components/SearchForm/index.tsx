import { Form, SearchContainer, NewTransactionButton } from './styles'
import { Plus } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'

export function SearchForm({ handleChange }: any) {
  return (
    <SearchContainer>
      <Form>
        <input
          type="text"
          placeholder="Busque uma transação"
          onChange={handleChange}
        />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>
              <p>Nova transação </p>
              <Plus size={32} />
            </NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </Form>
    </SearchContainer>
  )
}
