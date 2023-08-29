import { render } from '@redwoodjs/testing/web'

import SlideOut from './SlideOut'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SlideOut', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SlideOut />)
    }).not.toThrow()
  })
})
