import { render } from '@redwoodjs/testing/web'

import AdminHeader from './AdminHeader'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AdminHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminHeader />)
    }).not.toThrow()
  })
})
