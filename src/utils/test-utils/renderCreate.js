import {ThemeProvider} from '@tanstack/react-query-devtools/build/lib/theme'
import TestRenderer from 'react-test-renderer'
import theme from '../../app-theme.json'
import {CatsAndDogsProvider} from '../../hooks/useCatsAndDogs'
import {PaginationProvider} from '../../hooks/usePagination'

export default comp => TestRenderer.create(
  <CatsAndDogsProvider>
    <PaginationProvider>
      <ThemeProvider theme={theme}>
        {comp}
      </ThemeProvider>
    </PaginationProvider>
  </CatsAndDogsProvider>
)