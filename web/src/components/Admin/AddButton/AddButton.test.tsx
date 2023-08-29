import { render } from '@redwoodjs/testing/web'

import AddButton from './AddButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AddButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AddButton />)
    }).not.toThrow()
  })
})
