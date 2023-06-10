import {createGlobalStyle} from 'styled-components'
import Utilities from './Utilities'

const AppStyles = createGlobalStyle`
  html, body {
    background-color: ${props => props?.theme?.background};
    color: ${props => props?.theme?.primary};
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export default function GlobalStyles() {
  return (
    <>
      <AppStyles />
      <Utilities />
    </>
  )
}