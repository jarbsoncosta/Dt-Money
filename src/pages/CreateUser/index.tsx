import { EnvelopeSimple, LockKey, User } from 'phosphor-react'
import { Container, FormInputs, InfoApp, Input } from './styles'

export function CreateUser() {
  return (
    <Container>
      <FormInputs>
        <h1>Crie sua conta</h1>
        <div className="divInput">
          <User size={30} />
          <Input type="text" placeholder="Seu E-mail" />
        </div>
        <div className="divInput">
          <EnvelopeSimple size={30} />
          <Input type="text" placeholder="Seu nome" />
        </div>
        <div className="divInput">
          <LockKey size={30} />
          <Input type="text" placeholder="Sua senha" />
        </div>
        <div className="divInput">
          <LockKey size={30} />
          <Input type="text" placeholder="Confirme sua senha" />
        </div>
        <button type="submit"> CADASTRAR</button>
      </FormInputs>
      <InfoApp>
        <h3>ola</h3>
      </InfoApp>
    </Container>
  )
}
