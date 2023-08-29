import { render } from '@redwoodjs/testing/web'

import Modal from './Modal'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Modal', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Modal />)
    }).not.toThrow()
  })
})
