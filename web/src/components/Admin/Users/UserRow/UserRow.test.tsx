import { render } from '@redwoodjs/testing/web'

import UserRow from './UserRow'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UserRow', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserRow />)
    }).not.toThrow()
  })
})
