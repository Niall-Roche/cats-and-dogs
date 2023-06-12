import {useQuery} from '@tanstack/react-query'
import {useParams} from 'react-router-dom'
import fetchGif from '../api/fetchGif'
import Image from '../components/image/Image'
import {styled} from 'styled-components'
import {screenMd} from '../styles/mixins/screens'
import User from '../components/user/User'

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
  ${props => props?.$shouldCenter ? {marginLeft: 'auto', marginRight: 'auto'} : {}}
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

  const noUserOrSource = (
    !data?.data?.source ||
    !data?.data?.source_post_url ||
    !data?.data?.user?.website_url ||
    !data?.data?.user
  )

  return (
    <Container>
      <DetailsContainer>
        {
          !!data?.data?.user &&
          <User data={data?.data?.user} />
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
      <GifContainer $shouldCenter={noUserOrSource}>
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