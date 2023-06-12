import React from 'react'
import Pagination from '../Pagination'
import 'jest-styled-components'
import renderCreate from '../../../utils/test-utils/renderCreate'
import {LIMIT} from '../../../constants/api'

describe('Pagination', () => {
  it('should match snapshot', () => {
    const comp = renderCreate(<Pagination />)
    const tree = comp.toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should match snapshot with required props', () => {
    const comp = renderCreate(
      <Pagination
        className='d-flex'
        limit={LIMIT}
        onPageChange={() => {}}
        total={0}
      />
    )
    const tree = comp.toJSON()

    expect(tree).toMatchSnapshot()
  })
})