import {useState} from 'react'
import {styled} from 'styled-components'
import {pulse} from '../../styles/animations'

const ImageContainer = styled.div`
  background-color: ${props => props?.$loaded ? 'transparent' : props?.theme?.primary};
  animation-name: ${props => props?.$loaded ? null : pulse};
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
`

const StyledImg = styled.img`
  max-width: 500px;
  max-height: 500px;
  transition: opacity .2s;
  opacity: ${props => !!props?.$loaded ? '1' : '0'};
`

const Image = props => {
  const [loaded, setLoaded] = useState(false)

  return (
    <ImageContainer $loaded={loaded}>
      <StyledImg
        $loaded={loaded}
        onLoad={() => setLoaded(true)}
        {...props}
      />
    </ImageContainer>
  )
}

export default Image