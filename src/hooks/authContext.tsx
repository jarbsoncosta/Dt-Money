import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react'
import { useNavigate } from 'react-router-dom'

import { api } from '../services/api'

interface User {
  id: string
  name: string
  email: string
}

interface AuthContextState {
  token: TokenState
  signIn({ email, password }: UserData): Promise<void>
  userLogged(): boolean
  signOut(): void
  updateUser(user: User): void
  user: User
}

interface UserData {
  email: string
  password: string
}

interface TokenState {
  token: string
  user: User
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState)

const AuthProvider = ({ children }: any) => {
  // armazenando token em um estado
  const [token, setToken] = useState<TokenState>(() => {
    const token = localStorage.getItem('@financa:token')
    const user = localStorage.getItem('@financa:user')

    if (token && user) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`
      return { token, user: JSON.parse(user) }
    }

    return {} as TokenState
  })

  const signIn = useCallback(async ({ email, password }: UserData) => {
    const response = await api.post('user/session', {
      email,
      password,
    })

    const { token, user } = response.data

    localStorage.setItem('@financa:token', token)
    localStorage.setItem('@financa:user', JSON.stringify(user))

    api.defaults.headers.common.Authorization = `Bearer ${token}`

    setToken({ token, user })
  }, [])

  const signOut = useCallback(() => { 
    localStorage.removeItem('@financa:token')
    localStorage.removeItem('@financa:user')
    setToken({} as TokenState)
   
  }, [])

  // verificar se existe um token no localstorage
  const userLogged = useCallback(() => {
    const token = localStorage.getItem('@financa:token')
    const user = localStorage.getItem('@financa:user')
    if (token && user) {
      return true
    }
    return false
  }, [])

  const updateUser = useCallback(
    (user: User) => {
      localStorage.setItem('@financa:user', JSON.stringify(user))
      setToken({
        token: token.token,
        user,
      })
    },
    [setToken, token.token],
  )

  return (
    <AuthContext.Provider
      value={{
        user: token.user,
        token,
        signIn,
        signOut,
        userLogged,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): AuthContextState {
  const context = useContext(AuthContext)
  return context
}

export { AuthProvider, useAuth }
