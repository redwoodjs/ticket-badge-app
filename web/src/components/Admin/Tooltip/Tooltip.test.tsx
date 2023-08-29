import { render } from '@redwoodjs/testing/web'

import Tooltip from './Tooltip'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Tooltip', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Tooltip />)
    }).not.toThrow()
  })
})
