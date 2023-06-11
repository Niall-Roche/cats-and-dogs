import {useQuery} from '@tanstack/react-query'
import {useParams} from 'react-router-dom'
import fetchGif from '../api/fetchGif'
import Image from '../components/image/Image'

const Gif = () => {
  const {id} = useParams()

  const {data} = useQuery(['gif', id], () => fetchGif(id), {
    enabled: !!id,
    staleTime: 300000, // Data will become stale after 5 minutes
  })

  return (
    <div>
      <Image src={data?.data?.images?.original?.url} />
    </div>
  )
}

export default Gif