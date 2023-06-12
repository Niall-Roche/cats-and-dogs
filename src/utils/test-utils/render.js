import {ThemeProvider} from '@tanstack/react-query-devtools/build/lib/theme'
import {render} from '@testing-library/react'
import theme from '../../../app-theme.json'
import {CatsAndDogsProvider} from '../../hooks/useCatsAndDogs'
import {PaginationProvider} from '../../hooks/usePagination'

export default comp => render(
  <CatsAndDogsProvider>
    <PaginationProvider>
      <ThemeProvider theme={theme}>
        {comp}
      </ThemeProvider>
    </PaginationProvider>
  </CatsAndDogsProvider>
)