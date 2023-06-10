import {QueryClient, QueryClientProvider, useQuery} from '@tanstack/react-query'
import fetchGifs from './api/fetchGifs'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import useCatsAndDogs, {CatsAndDogsProvider} from './hooks/useCatsAndDogs'
import Switch from './components/switch/Switch'
import {useEffect, useState} from 'react'
import Pagination, {calculateOffset} from './components/pagination/Pagination'
import {LIMIT, MAX_OFFSET} from './constants/api'
import {ThemeProvider, styled} from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import {RouterProvider} from 'react-router-dom'
import router from './components/router/router'

const queryClient = new QueryClient()

const theme = {
  accent: '#b7f4f8',
  background: '#fde7e5',
  primary: '#7e7e7e',
  secondary: '#fff',
}

const MainContainer = styled.div`
  height: 100%;
  width:  100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`

const Gifs = () => {
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
    <Pagination
      forcePage={page}
      total={data?.pagination?.total_count}
      onPageChange={page => {
        setPage(page - 1)
        setOffset(calculateOffset(page, LIMIT))
      }}
    />
  )
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CatsAndDogsProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <MainContainer>
            <RouterProvider router={router} />
          </MainContainer>
          {/* <a
              href='https://www.flaticon.com/free-icons/cat'
              title='cat icons'>Cat icons created by Freepik - Flaticon
            </a>
            <a
              href='https://www.flaticon.com/free-icons/siberian-husky'
              title='siberian husky icons'>Siberian husky icons created by AomAm - Flaticon
            </a> */}
        </ThemeProvider>
      </CatsAndDogsProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
