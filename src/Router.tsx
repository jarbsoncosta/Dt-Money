import { Route, Routes } from 'react-router-dom'
import { CreateUser } from './pages/CreateUser'
import { Login } from './pages/Login'
import { Transactions } from './pages/Transactions'

export function Router() {
  return (
    <Routes>
      <Route path="/transacoes" element={<Transactions />} />
      <Route path="/cadastro" element={<CreateUser />} />
      <Route path="/" element={<Login />} />
    </Routes>
  )
}
