import React from 'react'
import {func, number, string} from 'prop-types'
import {LIMIT, MAX_PAGES} from '../../constants/api'
import StyledPagination from './StyledPagination'

const propTypes = {
  className: string,
  limit: number,
  onPageChange: func,
  total: number,
}

const defaultProps = {
  className: '',
  limit: LIMIT,
  onPageChange: () => console.log('on page change'),
  total: 0,
}

const Pagination = ({className, limit, onPageChange, total, ...rest}) => {
  const pageCount = Math.ceil(total / limit)
  const totalPageCount = pageCount > MAX_PAGES ? MAX_PAGES : pageCount

  return (
    totalPageCount > 1
      ? (
        <div className={className}>
          <StyledPagination
            onPageChange={({selected}) => {
              const pageNumber = selected + 1
              onPageChange(pageNumber)
            }}
            pageCount={totalPageCount}
            {...rest}
          />
        </div>
      )
      : null
  )
}

Pagination.propTypes = propTypes
Pagination.defaultProps = defaultProps

export default Pagination

export const calculateOffset = (pageNumber, limit = LIMIT) => {
  if (pageNumber === 1) return 0

  return (pageNumber - 1) * limit
}
