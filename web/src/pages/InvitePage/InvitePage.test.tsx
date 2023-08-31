import { render } from '@redwoodjs/testing/web'

import InvitePage from './InvitePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('InvitePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InvitePage />)
    }).not.toThrow()
  })
})
