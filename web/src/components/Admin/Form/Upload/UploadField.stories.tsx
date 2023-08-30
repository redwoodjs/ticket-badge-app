// Pass props to your component by passing an `args` object to your story
//
// ```jsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import UploadField from './UploadField'

const meta: Meta<typeof UploadField> = {
  component: UploadField,
}

export default meta

type Story = StoryObj<typeof UploadField>

export const Primary: Story = {}
