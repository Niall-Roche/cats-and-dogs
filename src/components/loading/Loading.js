import {styled} from 'styled-components'
import {pulse} from '../../styles/animations'

const LoadingContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: ${props => props?.theme?.primary};
  animation-name: ${props => props?.$loaded ? null : pulse};
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
`

const Loading = () => {
  return (
    <LoadingContainer />
  )
}

export default Loading