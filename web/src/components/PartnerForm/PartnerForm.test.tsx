import { render } from '@redwoodjs/testing/web'

import PartnerForm from './PartnerForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PartnerForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PartnerForm />)
    }).not.toThrow()
  })
})
