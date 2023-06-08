import {QueryClient, QueryClientProvider, useQuery} from '@tanstack/react-query'
import fetchGifs from './api/fetchGifs'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import useCatsAndDogs, {CatsAndDogsProvider} from './hooks/useCatsAndDogs'

const queryClient = new QueryClient()

const Gifs = () => {
  const {value} = useCatsAndDogs()
  const {data} = useQuery(['gifs', value], () => fetchGifs())
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CatsAndDogsProvider>
        <Gifs />
      </CatsAndDogsProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
