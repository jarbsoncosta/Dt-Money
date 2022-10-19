import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  width: 100%;
  justify-content: center;
  max-height: 100vh;
  padding: 0 1rem;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
`
export const FormInputs = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: ${(props) => props.theme['gray-900']};
  padding: 3rem;
  width: 100%;
  max-width: 32rem;
  border-radius: 8px;
  h1 {
    margin-bottom: 2rem;
  }

  p {
    color: ${(props) => props.theme['red-500']};
    font-size: 0.875rem;
  }

  .logo {
    padding: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .divInput {
    display: flex;
    align-items: center;
    padding: 0.2rem 1rem;
    border-radius: 6px;
    gap: 1rem;
    background: ${(props) => props.theme['gray-800']};

    input {
      width: 100%;
      height: 3rem;
      background: ${(props) => props.theme['gray-800']};
      border: 0;
      box-shadow: none;
      color: ${(props) => props.theme['gray-100']};
    }

    &:focus-within {
      box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
    }
  }
  button {
    border: 0;
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 6px;
    background: ${(props) => props.theme['green-500']};
    cursor: pointer;
    color: ${(props) => props.theme.white};

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }
    &:not(:disabled):hover {
        background: ${(props) => props.theme['green-700']};
        color: ${(props) => props.theme.white};
        border-color: ${(props) => props.theme['green-700']};
        transition: background-color 0.2s, color 0.2s, border-color 0.2s;
      }
  }

  a{
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1rem;
    font-weight: bold;
    text-decoration: none;
    color: ${(props) => props.theme['green-700']};
    &:hover{
      color: ${(props) => props.theme['green-500']};
    }
  }

  @media (max-width: 750px) {
    padding: 2rem;
    h1 {
      font-size: 1.3rem;
      margin-bottom: 1rem;
    }
  }
`
