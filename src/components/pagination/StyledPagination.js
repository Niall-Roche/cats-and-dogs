import styled from 'styled-components'
import ReactPaginate from 'react-paginate'

const Pagination = styled(ReactPaginate)`
  list-style: none;
  padding-left: 0;

  a, a:hover { color: ${props => props?.theme?.primary} }

  li {
    display: inline-block;

    &.disabled {
      a:hover {
        font-weight: normal !important;
        cursor: default;
        color: ${props => props?.theme?.accent};
      }
    }

    a {
      cursor: pointer;
      background-color: transparent;
      border: none;
      padding: 4px 9px;
      margin-left: 4px;
      border-radius: 50px;
      transition: background-color .2s;

      &:hover,
      &:focus {
        color: ${props => props?.theme?.primary};
        background-color: ${props => props?.theme?.accent};
        text-decoration: none !important;
        box-shadow: none !important;
        outline: 0;

        &.break-link {
          padding: 4px 9px;
        }
      }
      &:focus-visible {outline: 2px solid blue}

      &.active-link {
        background-color: ${props => props?.theme?.secondary};
        &:hover {
          font-weight: normal !important;
          cursor: default;
        }
      }

      &.page-link {
        &:hover { color: ${props => props?.theme?.primary} }
        &:focus { box-shadow: none }
        &:focus-visible {outline: 2px solid blue}
      }

      &.previous-link,
      &.next-link {
        display: none;
      }
    }
  }
`


const StyledPagination = props => {
  return (
    <Pagination
      {...props}
      breakLinkClassName='break-link'
      pageLinkClassName='page-link'
      activeLinkClassName='active-link'
      previousLinkClassName='previous-link'
      nextLinkClassName='next-link'
    />
  )
}

export default StyledPagination