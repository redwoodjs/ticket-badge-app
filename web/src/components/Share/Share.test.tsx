import { render } from '@redwoodjs/testing/web'

import Share from './Share'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Share', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Share />)
    }).not.toThrow()
  })
})
