import {createGlobalStyle} from 'styled-components'

const AppStyles = createGlobalStyle`
  html, body {
    background-color: ${props => props?.theme?.background};
    color: ${props => props?.theme?.primary}
  }
`

export default function GlobalStyles() {
  return (
    <AppStyles />
  )
}