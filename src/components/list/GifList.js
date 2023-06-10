import {useEffect, useState} from 'react'
import useCatsAndDogs from '../../hooks/useCatsAndDogs'
import {MAX_OFFSET} from '../../constants/api'
import {useQuery} from '@tanstack/react-query'
import fetchGifs from '../../api/fetchGifs'
import Pagination, {calculateOffset} from '../pagination/Pagination'
import Grid from '../grid/Grid'
import GridImage from '../image/GridImage'
import {Link} from 'react-router-dom'

const GifList = () => {
  const {value} = useCatsAndDogs()

  const [offset, setOffset] = useState(0)
  const [page, setPage] = useState(0)

  const actualOffset = offset > MAX_OFFSET ? MAX_OFFSET : offset

  useEffect(() => {
    setOffset(0)
    setPage(0)
  }, [value])

  const {
    data,
  } = useQuery(
    ['gifs', value, actualOffset],
    () => fetchGifs(value, actualOffset),
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
                <Link key={gif?.id} to={gif?.id}>
                  <GridImage
                    height={150}
                    width={150}
                    src={gif?.images?.fixed_width?.url}
                    loading='lazy'
                  />
                </Link>
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