import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {CatsAndDogsProvider} from './hooks/useCatsAndDogs'
import {ThemeProvider} from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import {PaginationProvider} from './hooks/usePagination'
import Router from './components/router/Router'

const queryClient = new QueryClient()

const theme = {
  accent: '#b7f4f8',
  background: '#fde7e5',
  primary: '#7e7e7e',
  secondary: '#fff',
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CatsAndDogsProvider>
        <PaginationProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Router />
            {/* <a
              href='https://www.flaticon.com/free-icons/cat'
              title='cat icons'>Cat icons created by Freepik - Flaticon
            </a>
            <a
              href='https://www.flaticon.com/free-icons/siberian-husky'
              title='siberian husky icons'>Siberian husky icons created by AomAm - Flaticon
            </a> */}
          </ThemeProvider>
        </PaginationProvider>
      </CatsAndDogsProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
