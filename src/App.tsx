import 'react-toastify/dist/ReactToastify.css' // O estilo do Toastify

import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { TransactionsProvider } from './contexts/TransactionsContext'
import { AuthProvider } from './hooks/authContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { ToastContainer } from 'react-toastify'

export function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider theme={defaultTheme}>
          <TransactionsProvider>
            <Router />
            <ToastContainer autoClose={3000} />
          </TransactionsProvider>
          <GlobalStyle />
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}
