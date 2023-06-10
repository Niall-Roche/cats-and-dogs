import {css} from 'styled-components'

export const screenSm = styles => css`
  @media only screen and (max-width: 576px) { ${styles} }
`

export const screenMd = styles => css`
  @media only screen and (max-width: 768px) { ${styles} }
`

export const screenLg = styles => css`
  @media only screen and (max-width: 992px) { ${styles} }
`

export const screenXl = styles => css`
  @media only screen and (max-width: 1200px) { ${styles} }
`

export const screenMinSm = styles => css`
  @media only screen and (min-width: 576px) { ${styles} }
`

export const screenMinMd = styles => css`
  @media only screen and (min-width: 768px) { ${styles} }
`

export const screenMinLg = styles => css`
  @media only screen and (min-width: 992px) { ${styles} }
`

export const screenMinXl = styles => css`
  @media only screen and (min-width: 1200px) { ${styles} }
`