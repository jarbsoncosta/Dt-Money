import { Bank, EnvelopeSimple, LockKey, User } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { Container, FormInputs } from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { toast } from 'react-toastify'

interface RequestUserProps {
  name: string
  email: string
  password: string
  confirmPassword: string
}

const validatetionPost = zod.object({
  name: zod.string().min(1, 'Nome e sobrenome não pode ficar vazio'),
  email: zod.string().email({
    message: 'Eita, esse e-mail não parece correto - email@test.com',
  }),
  password: zod.string().min(8, 'Senha com minimo 8 caracteres'),
  confirmPassword: zod.string().min(8, 'Confirmação de senha não confere'),
})

export function CreateUser() {
  const history = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<RequestUserProps>({
    resolver: zodResolver(validatetionPost),
  })

  function handleCreateNewUser(data: RequestUserProps) {
    api
      .post('/user', data)
      .then(() => {
        toast.success('Cadastro realizado com sucesso!')
        reset()
        history('/')
      })
      .catch((error) => {
        const { data } = error.response
        toast.error(data.message)
      })
  }
  return (
    <Container>
      <FormInputs onSubmit={handleSubmit(handleCreateNewUser)}>
        <div className="logo">
          <Bank color="#00875F" size={40} />
          <h2>Finance</h2>
        </div>
        <h1>Crie sua conta</h1>
        <div className="divInput">
          <User size={30} />
          <input type="email" placeholder="Seu E-mail" {...register('email')} />
        </div>
        {errors.email?.message && <p>{errors.email?.message}</p>}
        <div className="divInput">
          <EnvelopeSimple size={30} />
          <input type="text" placeholder="Seu nome" {...register('name')} />
        </div>
        {errors.name?.message && <p>{errors.name?.message}</p>}
        <div className="divInput">
          <LockKey size={30} />
          <input
            type="password"
            placeholder="Sua senha"
            {...register('password')}
          />
        </div>
        {errors.password?.message && <p>{errors.password?.message}</p>}
        <div className="divInput">
          <LockKey size={30} />
          <input
            type="password"
            placeholder="Confirme sua senha"
            {...register('confirmPassword')}
          />
        </div>
        {errors.confirmPassword?.message && (
          <p>{errors.confirmPassword?.message}</p>
        )}
        <button type="submit"> Cadastrar</button>
      </FormInputs>
    </Container>
  )
}
