import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background: ${(props) => props.theme['gray-800']};
    color:${(props) => props.theme['gray-100']};
    -webkit-font-smoothing: antialiased;

}
:focus{
    outline: 0;
    -webkit-appearance: none;
    -webkit-box-shadow: 0 0 0 2px${(props) => props.theme['green-500']};
    box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
}
body, input, textarea, button{
    font: 400 1rem 'Roboto', sans-serif;
   
}

`
