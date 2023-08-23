import { render } from '@redwoodjs/testing/web'

import CustomizeTicketPage from './CustomizeTicketPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CustomizeTicketPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CustomizeTicketPage />)
    }).not.toThrow()
  })
})
