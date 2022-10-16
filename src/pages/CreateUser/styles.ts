import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  width: 100%;
  max-height: 100vh;
  max-width: 1120px;
  margin: 0 auto 0;
  padding: 0 1.5rem;

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
  padding: 4rem;
  width: 100%;
  border-radius: 8px;
  h1 {
    margin-bottom: 2rem;
  }

  .divInput {
    display: flex;
    align-items: center;
    padding: 0.2rem 1rem;
    border-radius: 6px;
    gap: 1rem;
    background: ${(props) => props.theme['gray-800']};
  }
  button {
    padding: 1rem;
    border-radius: 6px;
    background: ${(props) => props.theme['green-500']};
    cursor: pointer;
    color: ${(props) => props.theme.white};
    font-weight: 700;
    font-size: 1.2rem;
  }
`

export const InfoApp = styled.div`
  width: 100%;
`

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  background: ${(props) => props.theme['gray-800']};
  border: 0;
`
