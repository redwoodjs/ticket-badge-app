import { render } from '@redwoodjs/testing/web'

import UserForm from './UserForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UserForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserForm />)
    }).not.toThrow()
  })
})
