import React from 'react'
import Switch from '../Switch'
import 'jest-styled-components'
import renderCreate from '../../../utils/test-utils/renderCreate'
import {fireEvent, screen} from '@testing-library/react'
import render from '../../../utils/test-utils/render'

describe('Switch', () => {
  it('should match snapshot', () => {
    const comp = renderCreate(<Switch />)
    const tree = comp.toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should match snapshot with required props', () => {
    const comp = renderCreate(
      <Switch
        className='d-flex'
        onChange={() => {}}
      />
    )
    const tree = comp.toJSON()

    expect(tree).toMatchSnapshot()
  })


  it('should toggle the switch', () => {
    const handleToggle = jest.fn()

    render(
      <Switch
        onChange={handleToggle}
      />
    )

    const button = screen.getByRole('switch')

    fireEvent.click(button)

    expect(handleToggle).toHaveBeenCalledTimes(1)
  })
})