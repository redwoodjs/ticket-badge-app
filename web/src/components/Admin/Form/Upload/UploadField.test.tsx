import { render } from '@redwoodjs/testing/web'

import UploadField from './UploadField'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UploadField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UploadField />)
    }).not.toThrow()
  })
})
