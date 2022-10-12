import { Form, SearchContainer } from './styles'
import { MagnifyingGlass } from 'phosphor-react'

export function SearchForm() {
  return (
    <SearchContainer>
      <Form action="">
        <input type="text" placeholder="Busque uma transação" />
        <button>
          <MagnifyingGlass size={20} /> <p>Buscar</p>
        </button>
      </Form>
    </SearchContainer>
  )
}
