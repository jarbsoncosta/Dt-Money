import styled, { css } from 'styled-components'

export const TransactionContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto 0;
  padding: 0 1.5rem;
`

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme['gray-700']};
    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
  @media (max-width: 750px) {
    display: none;
  }
`
interface PriceHighlightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`

export const CardTransactionResponsive = styled.main`
  display: none;
  width: 100%;
  border-radius: 6px;
  padding: 1.375rem;
  margin-bottom: 1rem;
  ul li {
    list-style: none;
    margin-bottom: 1rem;
    color: ${(props) => props.theme['gray-500']};
  }
  ul {
    &:last-child {
      display: flex;
      justify-content: space-between;
    }
    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
  background: ${(props) => props.theme['gray-700']};
  @media (max-width: 750px) {
    display: block;
  }
`
