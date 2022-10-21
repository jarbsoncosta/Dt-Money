import { createContext, ReactNode, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useAuth } from '../hooks/authContext'
import { api } from '../services/api'

export interface Transaction {
  id?: string
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

interface TransactionContextType {
  transactions: Transaction[]
  getTransactions: (query?: string) => Promise<void>
  createNewTransaction: (data: Transaction) => void
}
interface TransactionProviderProps {
  children: ReactNode
}
export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransections] = useState<Transaction[]>([])
  const { user } = useAuth()

  async function getTransactions() {
    const response = await api.get('transaction')

    setTransections(response.data)
  }
  useEffect(() => {
    if (user) {
      getTransactions()
    }
  }, [])

  // create new transaction
  async function createNewTransaction(data: Transaction) {
    try {
      const response = await api.post('/transaction', data)
      toast.success('Cadastro realizado com sucesso!')

      const transaction = response.data

      setTransections([...transactions, transaction])
    } catch (error) {
      toast.error('Algo deu errado, tente novamente mais tarde!')
    }
  }

  return (
    <TransactionsContext.Provider
      value={{ transactions, getTransactions, createNewTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
