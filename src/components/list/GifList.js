import useCatsAndDogs from '../../hooks/useCatsAndDogs'
import {useQuery} from '@tanstack/react-query'
import fetchGifs from '../../api/fetchGifs'
import Pagination, {calculateOffset} from '../pagination/Pagination'
import Grid from '../grid/Grid'
import Image from '../image/Image'
import {Link} from 'react-router-dom'
import usePagination from '../../hooks/usePagination'
import {styled} from 'styled-components'

const StyledLink = styled(Link)`
    transition: box-shadow .2s;
    &:hover {
        box-shadow: 0px 1px 8px 0px rgba(0,0,0,0.75);
        -webkit-box-shadow: 0px 1px 8px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 1px 8px 0px rgba(0,0,0,0.75);
        transform: scale(1.07);
    }
`

const GifList = () => {
  const {value} = useCatsAndDogs()
  const {offset, page, setOffset, setPage} = usePagination()

  const {
    data,
  } = useQuery(
    ['gifs', value, offset],
    () => fetchGifs(value, offset),
    {keepPreviousData: true}
  )

  return (
    <div className='d-flex flex-col align-items-center'>
      <Grid total={data?.pagination?.count}>
        {
          data
            ?.data
            ?.map(
              gif => (
                <StyledLink key={gif?.id} to={gif?.id}>
                  <Image
                    height={150}
                    width={150}
                    alt={gif?.title}
                    src={gif?.images?.fixed_width?.url}
                    loading='lazy'
                  />
                </StyledLink>
              ))
        }
      </Grid>
      <Pagination
        forcePage={page}
        total={data?.pagination?.total_count}
        onPageChange={page => {
          setPage(page - 1)
          setOffset(calculateOffset(page))
        }}
      />
    </div>
  )
}

export default GifList