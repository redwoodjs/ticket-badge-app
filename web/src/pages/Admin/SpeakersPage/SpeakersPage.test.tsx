import { render } from '@redwoodjs/testing/web'

import SpeakersPage from './SpeakersPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SpeakersPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SpeakersPage />)
    }).not.toThrow()
  })
})
