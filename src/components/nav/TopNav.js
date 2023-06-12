import {styled} from 'styled-components'
import {CAT_DOG_EMOJI} from '../../constants/images'
import {Link} from 'react-router-dom'

const TopNavContainer = styled.div`
    position: fixed;
    background-color: ${props => props?.theme?.accent};
    width: 100%;
    align-items: center;
    height: 50px;
    z-index: 1;
    /* padding-top: 10px; */
    /* padding-bottom: 10px; */
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${props => props?.theme?.primary};
`

const BrandImage = styled.img`
    margin-left: 10px;
    margin-right: 10px;
`

const Title = styled.span`
    font-weight: bold;
`

const SubTitle = styled.span`
    margin-right: 10px;
`

const TopNav = () => {
  return (
    <TopNavContainer className='d-flex flex-row mb-1'>
      <StyledLink className='d-flex align-items-center' to='/'>
        <BrandImage src={CAT_DOG_EMOJI} width={32} height={32} />
        <Title>Cats & Dogs</Title>
      </StyledLink>
      <SubTitle className='ms-auto'>Powered By GIPHY</SubTitle>
    </TopNavContainer>
  )
}

export default TopNav