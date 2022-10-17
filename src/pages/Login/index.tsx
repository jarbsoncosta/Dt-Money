import { Bank, EnvelopeSimple, LockKey } from 'phosphor-react'
import { useCallback, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAuth } from '../../hooks/authContext'
import { Container, FormInputs } from './styles'

export function Login() {
  const { signIn } = useAuth()

  const history = useNavigate()
  const [email, setUserEmail] = useState('')
  const [emailErr, setEmailErr] = useState(false)
  const [password, setPassword] = useState('')
  const [inputPassordErr, setInputPasswordErr] = useState(false)

  /*
  const validate = () => {
    if (!validateEmail.test(email)) {
      setEmailErr(true)
    } else {
      setEmailErr(false)
    }
    if (!validatePassword.test(password)) {
      setInputPasswordErr(true)
    } else {
      setInputPasswordErr(false)
    }
  }
  */

  useEffect(() => {
    localStorage.removeItem('@financa:token')
  }, [])

  const handleSubmit = useCallback(
    async (event: any) => {
      event.preventDefault()

      try {
        await signIn({ email, password })
        // history('transacoes')
        window.location.replace('transacoes')
      } catch {
        toast.error('E-mail ou senha incorretos!')
      }
    },
    [email, password, history, signIn],
  )

  const disableButtonIfInputIsEmpty = email.length === 0 || password.length < 8

  // Show and Hide Password
  const [passwordShown, setPasswordShown] = useState(false)

  const togglePassword = () => {
    setPasswordShown(!passwordShown)
  }
  //
  return (
    <Container>
      <FormInputs onSubmit={handleSubmit}>
        <div className="logo">
          <Bank color="#00875F" size={40} />
          <h2>Finance</h2>
        </div>
        <h1>Entrar</h1>

        <div className="divInput">
          <EnvelopeSimple size={30} />
          <input
            type="email"
            placeholder="Seu E-mail"
            onChange={(event) => setUserEmail(event.target.value)}
          />
        </div>
        <div className="divInput">
          <LockKey size={30} />
          <input
            type="password"
            placeholder="Sua senha"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Entrar</button>
        <span>
          Não tem uma conta? <Link to="/cadastro"> Registre-se</Link>
        </span>
      </FormInputs>
    </Container>
  )
}
