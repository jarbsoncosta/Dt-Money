import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { TransactionsProvider } from './contexts/TransactionsContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <TransactionsProvider>
          <Router />
        </TransactionsProvider>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}
