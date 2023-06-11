import {createContext, useContext, useMemo, useState} from 'react'
import {MAX_OFFSET} from '../constants/api'

const PaginationContext = createContext()

const usePagination = () => useContext(PaginationContext)

// eslint-disable-next-line react/prop-types
export const PaginationProvider = ({children}) => {
  const [currentOffset, setOffset] = useState(0)
  const [page, setPage] = useState(0)

  // GIPHY's max offset is 4999. We won't use a value for offset higher than this.
  const offset = currentOffset > MAX_OFFSET ? MAX_OFFSET : currentOffset

  return (
    <PaginationContext.Provider value={{offset, page, setOffset, setPage}}>
      {children}
    </PaginationContext.Provider>
  )
}

export default usePagination