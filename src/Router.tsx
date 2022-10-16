import { Route, Routes } from 'react-router-dom'
import { CreateUser } from './pages/CreateUser'
import { Transactions } from './pages/Transactions'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Transactions />} />
      <Route path="/cadastro" element={<CreateUser />} />
    </Routes>
  )
}
