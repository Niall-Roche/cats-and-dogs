import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {CatsAndDogsProvider} from './hooks/useCatsAndDogs'
import {ThemeProvider} from 'styled-components'
import theme from '../app-theme.json'
import GlobalStyles from './styles/GlobalStyles'
import {PaginationProvider} from './hooks/usePagination'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Gifs from './pages/Gifs'
import Gif from './pages/Gif'
import TopNav from './components/nav/TopNav'

const Router = () => {
  return (
    <BrowserRouter>
      <TopNav />
      <Routes>
        <Route path='/' element={<Gifs />} />
        <Route path=':id' element={<Gif />} />
      </Routes>
    </BrowserRouter>
  )
}

const queryClient = new QueryClient()

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
