import {css} from 'styled-components'

// For smaller screens less than 768px
export const screenMd = styles => css`
  @media only screen and (max-width: 768px) { ${styles} }
`