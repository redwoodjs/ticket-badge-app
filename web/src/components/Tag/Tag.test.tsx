import { render } from '@redwoodjs/testing/web'

import Tag from './Tag'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Tag', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Tag />)
    }).not.toThrow()
  })
})
