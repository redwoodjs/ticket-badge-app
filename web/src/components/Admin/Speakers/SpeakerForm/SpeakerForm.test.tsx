import { render } from '@redwoodjs/testing/web'

import SpeakerForm from './SpeakerForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SpeakerForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SpeakerForm />)
    }).not.toThrow()
  })
})
