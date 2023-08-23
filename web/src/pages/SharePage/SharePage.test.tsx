import { render } from '@redwoodjs/testing/web'

import SharePage from './SharePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SharePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SharePage />)
    }).not.toThrow()
  })
})
