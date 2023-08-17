import { render } from '@redwoodjs/testing/web'

import BadgeLayout from './BadgeLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('BadgeLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BadgeLayout />)
    }).not.toThrow()
  })
})
