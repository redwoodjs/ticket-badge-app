import { render } from '@redwoodjs/testing/web'

import PartnerRow from './PartnerRow'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PartnerRow', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PartnerRow />)
    }).not.toThrow()
  })
})
