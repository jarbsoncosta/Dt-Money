import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../services/api'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

interface TransactionContextType {
  transactions: Transaction[]
}
interface TransactionProviderProps {
  children: ReactNode
}
export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransections] = useState<Transaction[]>([])

  useEffect(() => {
    api
      .get('transaction')
      .then((response) => {
        setTransections(response.data)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}
