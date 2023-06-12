import {useQuery} from '@tanstack/react-query'
import {useParams} from 'react-router-dom'
import fetchGif from '../api/fetchGif'
import Image from '../components/image/Image'
import {styled} from 'styled-components'
import {screenMd} from '../styles/mixins/screens'
import {GIPHY_ICON, INSTAGRAM_ICON} from '../constants/images'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 10px;
  padding-right: 10px;
  gap: 50px;
  margin-bottom: 20px;
  ${screenMd({
    justifyContent: 'center',
    flexDirection: 'column',
  })}
`

const Title = styled.div`
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
`

const StyledImage = styled(Image)`
  ${screenMd({
    width: '100%',
  })}
`

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  ${screenMd({
    flexDirection: 'row',
    order: 1,
  })}
`

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

const SourceContainer = styled.div`
  padding-bottom: 10px;
  border-radius: 18px;
  max-width: 250px;
  background-color: ${props => props?.theme?.secondary};
  ${screenMd({
    alignSelf: 'start',
  })}
`

const SourceText = styled.div`
  border-radius: 18px;
  background-color: ${props => props?.theme?.accent};
  font-weight: bold;
  padding: 10px;
`

const SourceLink = styled.a`
  display: block;
  padding-top: 10px;
  padding-left: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const GifContainer = styled.div`
  ${screenMd({
    order: 0,
    marginBottom: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
  })}
`

const Gif = () => {
  const {id} = useParams()

  const {data} = useQuery(['gif', id], () => fetchGif(id), {
    enabled: !!id,
    staleTime: 300000, // Data will become stale after 5 minutes
  })

  console.log(data?.data?.source || data?.data?.source_post_url || data?.data?.user?.website_url)

  return (
    <Container>
      <DetailsContainer>
        {
          !!data?.data?.user &&
          <UserContainer>
            <UserDetails className='d-flex'>
              <ProfileImage src={data?.data?.user?.avatar_url} />
              <div>
                <UserName>{data?.data?.user?.username}</UserName>
                <UserLinks>
                  <UserLink target='blank' rel='noreferrer' href={data?.data?.user?.profile_url}>
                    <img src={GIPHY_ICON} height={25} width={25} />
                  </UserLink>
                  <UserLink target='blank' rel='noreferrer' href={data?.data?.user?.instagram_url}>
                    <img src={INSTAGRAM_ICON} height={25} width={25} />
                  </UserLink>
                </UserLinks>
              </div>
            </UserDetails>
            <ProfileDescription>{data?.data?.user?.description}</ProfileDescription>
          </UserContainer>
        }
        {
          (!!data?.data?.source || !!data?.data?.source_post_url || !!data?.data?.user?.website_url)
          && (
            <SourceContainer>
              <SourceText>Source</SourceText>
              <SourceLink
                target='_blank'
                rel='noreferrer'
                href={data?.data?.source || data?.data?.source_post_url || data?.data?.user?.website_url}>
                {data?.data?.source || data?.data?.source_post_url || data?.data?.user?.website_url}
              </SourceLink>
            </SourceContainer>
          )
        }
      </DetailsContainer>
      <GifContainer>
        <Title>{data?.data?.title}</Title>
        <StyledImage src={data?.data?.images?.original?.url} />
        <div className='text-center'>
          <a target='_blank' rel='noreferrer' href={data?.data?.url}>View on GIPHY</a>
        </div>
      </GifContainer>
    </Container>
  )
}

export default Gif