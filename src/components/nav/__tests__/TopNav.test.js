import React from 'react'
import TopNav from '../TopNav'
import 'jest-styled-components'
import renderCreate from '../../../utils/test-utils/renderCreate'
import {BrowserRouter} from 'react-router-dom'

describe('TopNav', () => {
  it('should match snapshot', () => {
    const comp = renderCreate(
      <BrowserRouter>
        <TopNav />
      </BrowserRouter>
    )
    const tree = comp.toJSON()

    expect(tree).toMatchSnapshot()
  })
})