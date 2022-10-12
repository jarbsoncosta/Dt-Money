import { CalendarBlank, TagSimple } from 'phosphor-react'
import { Header } from '../../components/Header'
import { SearchForm } from '../../components/SearchForm'
import { Summary } from '../../components/Summary'
import {
  CardTransactionResponsive,
  PriceHighlight,
  Table,
  TransactionContainer,
} from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <SearchForm />
      <TransactionContainer>
        <Table>
          <tr>
            <td width="50%">Desenvolvimento de site</td>
            <td>
              <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
            </td>
            <td>Venda</td>
            <td>13/04/2022</td>
          </tr>
          <tr>
            <td width="50%">Hamburguer</td>
            <td>
              <PriceHighlight variant="outcome">- R$ 59,00</PriceHighlight>
            </td>
            <td>Alimentação</td>
            <td>13/04/2022</td>
          </tr>
          <tr>
            <td width="50%">Janta</td>
            <td>
              <PriceHighlight variant="outcome">- R$ 39,00</PriceHighlight>
            </td>
            <td>Alimentação</td>
            <td>13/04/2022</td>
          </tr>
          <tr>
            <td width="50%">Desenvolvimento de site</td>
            <td>
              <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
            </td>
            <td>Venda</td>
            <td>13/04/2022</td>
          </tr>
        </Table>
        <CardTransactionResponsive>
          <ul>
            <li style={{ color: '#C4C4CC' }}>Janta</li>
            <li style={{ fontSize: '1.25rem' }}>
              <PriceHighlight variant="outcome">- R$ 39,00</PriceHighlight>
            </li>
          </ul>
          <ul>
            <li>
              <TagSimple size={18} /> Alimentação
            </li>
            <li>
              <CalendarBlank size={18} /> 13/04/2022
            </li>
          </ul>
        </CardTransactionResponsive>
        <CardTransactionResponsive>
          <ul>
            <li style={{ color: '#C4C4CC' }}>Janta</li>
            <li style={{ fontSize: '1.25rem' }}>
              <PriceHighlight variant="outcome">- R$ 39,00</PriceHighlight>
            </li>
          </ul>
          <ul>
            <li>
              <TagSimple size={18} /> Alimentação
            </li>
            <li>
              <CalendarBlank size={18} /> 13/04/2022
            </li>
          </ul>
        </CardTransactionResponsive>
      </TransactionContainer>
    </div>
  )
}
