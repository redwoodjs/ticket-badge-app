import { render } from '@redwoodjs/testing/web'

import SpeakerRow from './SpeakerRow'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SpeakerRow', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SpeakerRow />)
    }).not.toThrow()
  })
})
