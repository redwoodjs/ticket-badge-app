import { render } from '@redwoodjs/testing/web'

import TwitterPage from './TwitterPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TwitterPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TwitterPage />)
    }).not.toThrow()
  })
})
