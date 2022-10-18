import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { toast } from 'react-toastify'
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './styles'
import { api } from '../../services/api'
import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/TransactionsContext'

interface RequestTransactionProps {
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt?: string
}

const newTransactionSchema = zod.object({
  description: zod.string().min(1, 'Campo obrigatório'),
  type: zod.enum(['income', 'outcome']),
  category: zod.string().min(1, 'Campo obrigatório'),
  price: zod.number().min(1, 'Campo obrigatório'),
})

type SearchFormInputs = zod.infer<typeof newTransactionSchema>
export function NewTransactionModal() {
  const { createNewTransaction } = useContext(TransactionsContext)

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SearchFormInputs>({
    defaultValues: {
      type: 'income',
    },
    resolver: zodResolver(newTransactionSchema),
  })

  function handleCreateNewTransaction(data: SearchFormInputs) {
    createNewTransaction(data)
    reset()
  }

  return (
    <div>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <Dialog.Title>Nova transação</Dialog.Title>
          <CloseButton>
            <X size={24} />
          </CloseButton>
          <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
            <input
              {...register('description')}
              type="text"
              placeholder="Description"
            />
            {errors.description?.message && (
              <p>{errors.description?.message}</p>
            )}
            <input
              {...register('price', {
                valueAsNumber: true,
              })}
              type="number"
              placeholder="Preço"
            />
            {errors.price?.message && <p>{errors.price?.message}</p>}
            <input
              {...register('category')}
              type="text"
              placeholder="Categoria"
            />
            {errors.category?.message && <p>{errors.category?.message}</p>}

            <Controller
              control={control}
              name="type"
              render={({ field }) => {
                return (
                  <TransactionType
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <TransactionTypeButton
                      {...register('type')}
                      variant="income"
                      value="income"
                    >
                      <ArrowCircleUp size={24} /> Entrada
                    </TransactionTypeButton>
                    <TransactionTypeButton
                      {...register('type')}
                      variant="outcome"
                      value="outcome"
                    >
                      <ArrowCircleDown size={24} />
                      Saída
                    </TransactionTypeButton>
                  </TransactionType>
                )
              }}
            />

            <button type="submit" disabled={isSubmitting}>
              Cadastrar
            </button>
          </form>
        </Content>
      </Dialog.Portal>
    </div>
  )
}
