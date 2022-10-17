import { CalendarBlank, TagSimple } from 'phosphor-react'
import { useContext } from 'react'
import { Header } from '../../components/Header'
import { SearchForm } from '../../components/SearchForm'
import { Summary } from '../../components/Summary'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { useAuth } from '../../hooks/authContext'
import { formatDate, formatPrice } from '../../utils/formatter'

import {
  CardTransactionResponsive,
  PriceHighlight,
  Table,
  TransactionContainer,
} from './styles'

export function Transactions() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <div>
      <Header />
      <Summary />
      <SearchForm />
      <TransactionContainer>
        <Table>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description} </td>
                <td>
                  <PriceHighlight variant={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {formatPrice.format(transaction.price)}
                  </PriceHighlight>
                </td>
                <td>{transaction.category} </td>
                <td>{formatDate.format(new Date(transaction.createdAt))} </td>
              </tr>
            )
          })}
        </Table>
        {transactions.map((transaction) => {
          return (
            <CardTransactionResponsive key={transaction.id}>
              <ul>
                <li style={{ color: '#C4C4CC' }}>{transaction.description} </li>
                <li style={{ fontSize: '1.25rem' }}>
                  <PriceHighlight variant={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {formatPrice.format(transaction.price)}
                  </PriceHighlight>
                </li>
              </ul>
              <ul>
                <li>
                  <TagSimple size={18} /> {transaction.category}
                </li>
                <li>
                  <CalendarBlank size={18} />
                  {formatDate.format(new Date(transaction.createdAt))}
                </li>
              </ul>
            </CardTransactionResponsive>
          )
        })}
      </TransactionContainer>
    </div>
  )
}
