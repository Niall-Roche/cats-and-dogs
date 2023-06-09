import {QueryClient, QueryClientProvider, useQuery} from '@tanstack/react-query'
import fetchGifs from './api/fetchGifs'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import useCatsAndDogs, {CatsAndDogsProvider} from './hooks/useCatsAndDogs'
import Switch from './components/switch/Switch'

const queryClient = new QueryClient()

const Gifs = () => {
  const {value} = useCatsAndDogs()
  const {data} = useQuery(['gifs', value], () => fetchGifs())
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CatsAndDogsProvider>
        <div>
          <div style={{textAlign: 'center', marginTop: '20px'}}>
            <Switch />
          </div>
          <Gifs />
          <a
            href='https://www.flaticon.com/free-icons/cat'
            title='cat icons'>Cat icons created by Freepik - Flaticon
          </a>
          <a
            href='https://www.flaticon.com/free-icons/siberian-husky'
            title='siberian husky icons'>Siberian husky icons created by AomAm - Flaticon
          </a>
        </div>
      </CatsAndDogsProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
