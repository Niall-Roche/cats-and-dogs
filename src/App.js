import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {CatsAndDogsProvider} from './hooks/useCatsAndDogs'
import {ThemeProvider} from 'styled-components'
import theme from './app-theme.json'
import GlobalStyles from './styles/GlobalStyles'
import {PaginationProvider} from './hooks/usePagination'
import Router from './components/router/AppRouter'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CatsAndDogsProvider>
        <PaginationProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Router />
          </ThemeProvider>
        </PaginationProvider>
      </CatsAndDogsProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
