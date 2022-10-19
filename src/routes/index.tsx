import { Route, Routes } from 'react-router-dom'
import { CreateUser } from '../pages/CreateUser'
import { Login } from '../pages/Login'
import { Transactions } from '../pages/Transactions'
import PrivateRoutes from './PrivatesRouter'


export function Router() {
  return (
    <Routes>
       <Route path="/" element={<Login />} />
      <Route path="/transacoes" element={<PrivateRoutes><Transactions /></PrivateRoutes>} />
      <Route path="/cadastro" element={<CreateUser />} />
     
    </Routes>
  )
}
