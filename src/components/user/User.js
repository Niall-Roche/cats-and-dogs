import {shape, string} from 'prop-types'
import {styled} from 'styled-components'
import Image from '../image/Image'
import {GIPHY_ICON, INSTAGRAM_ICON} from '../../constants/images'

const propTypes = {
  data: shape({
    avatar_url: string,
    description: string,
    instagram_url: string,
    profile_url: string,
    username: string,
  }).isRequired,
}

const UserContainer = styled.div`
  align-self: start;
  background-color: ${props => props?.theme?.secondary};
  border-radius: 18px;
`

const UserDetails = styled.div`
  background-color: ${props => props?.theme?.accent};
  border-radius: 18px;
  padding: 10px;
`

const ProfileImage = styled(Image)`
  object-fit: cover;
  width: 50px;
  height: 50px;
  margin-right: 5px;
`

const UserLinks = styled.div`
  margin-top: 5px;
  display: flex;
  gap: 10px;
`

const UserLink = styled.a`
  text-decoration: none;
  color: ${props => props?.theme?.primary};
  transition: opacity .2s;
  &:hover {
    opacity: 0.7;
  }
`

const UserName = styled.span`
  font-weight: bold;
  font-size: 14px;
`

const ProfileDescription = styled.p`
  margin-left: 10px;
  margin-right: 10px;
  max-width: 250px;
  white-space: pre-wrap;
  font-size: 14px;
`

const User = ({data}) => {
  return (
    <UserContainer>
      <UserDetails className='d-flex'>
        <ProfileImage src={data?.avatar_url} />
        <div>
          <UserName>{data?.username}</UserName>
          <UserLinks>
            <UserLink target='blank' rel='noreferrer' href={data?.profile_url}>
              <img src={GIPHY_ICON} height={25} width={25} />
            </UserLink>
            <UserLink target='blank' rel='noreferrer' href={data?.instagram_url}>
              <img src={INSTAGRAM_ICON} height={25} width={25} />
            </UserLink>
          </UserLinks>
        </div>
      </UserDetails>
      <ProfileDescription>{data?.description}</ProfileDescription>
    </UserContainer>
  )
}

User.propTypes = propTypes

export default User