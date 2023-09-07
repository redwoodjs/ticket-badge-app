import { render } from '@redwoodjs/testing/web'

import OgImagePage from './OgImagePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('OgImagePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OgImagePage />)
    }).not.toThrow()
  })
})
