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
  transition: opacity .2s, box-shadow .2s;
  opacity: ${props => !!props?.$loaded ? '1' : '0'};
  &:hover {
    box-shadow: 0px 1px 8px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 1px 8px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 1px 8px 0px rgba(0,0,0,0.75);
    transform: scale(1.07);
  }
`

const GridImage = props => {
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

export default GridImage