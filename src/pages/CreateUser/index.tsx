import { Bank, EnvelopeSimple, LockKey, User } from 'phosphor-react'
import { Container, FormInputs } from './styles'

export function CreateUser() {
  return (
    <Container>
      <FormInputs>
        <div className="logo">
          <Bank color="#00875F" size={40} />
          <h2>Finance</h2>
        </div>
        <h1>Crie sua conta</h1>
        <div className="divInput">
          <User size={30} />
          <input type="text" placeholder="Seu E-mail" />
        </div>
        <div className="divInput">
          <EnvelopeSimple size={30} />
          <input type="text" placeholder="Seu nome" />
        </div>
        <div className="divInput">
          <LockKey size={30} />
          <input type="text" placeholder="Sua senha" />
        </div>
        <div className="divInput">
          <LockKey size={30} />
          <input type="text" placeholder="Confirme sua senha" />
        </div>
        <button> Cadastrar</button>
      </FormInputs>
    </Container>
  )
}
