import { render } from '@redwoodjs/testing/web'

import PartnersPage from './PartnersPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PartnersPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PartnersPage />)
    }).not.toThrow()
  })
})
