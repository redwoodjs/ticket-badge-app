import { render } from '@redwoodjs/testing/web'

import Overlay from './Overlay'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Overlay', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Overlay />)
    }).not.toThrow()
  })
})
