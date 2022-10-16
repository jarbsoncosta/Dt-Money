import { SummaryCard, SummaryContainer } from './styles'
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'
import { useContext } from 'react'
import { useSummary } from '../../hooks/useSummary'
import { formatPrice } from '../../utils/formatter'

export function Summary() {
  const { income, outcome, total } = useSummary()

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>{formatPrice.format(income)} </strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saída</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>{formatPrice.format(outcome)} </strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>
        <strong>{formatPrice.format(total)} </strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
