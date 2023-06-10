import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {CatsAndDogsProvider} from './hooks/useCatsAndDogs'
import {ThemeProvider} from 'styled-components'
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

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CatsAndDogsProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <div className='d-flex flex-col align-items-center mb-1'>
            <h3>Cats & Dogs</h3>
            <span className='mb-1'>Powered By GIPHY</span>
            <RouterProvider router={router} />
          </div>
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
