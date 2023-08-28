import { render } from '@redwoodjs/testing/web'

import Sort from './Sort'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Sort', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Sort />)
    }).not.toThrow()
  })
})
