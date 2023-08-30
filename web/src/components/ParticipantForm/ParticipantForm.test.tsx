import { render } from '@redwoodjs/testing/web'

import ParticipantForm from './ParticipantForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ParticipantForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ParticipantForm />)
    }).not.toThrow()
  })
})
