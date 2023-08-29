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

import PartnerForm from './PartnerForm'

const meta: Meta<typeof PartnerForm> = {
  component: PartnerForm,
}

export default meta

type Story = StoryObj<typeof PartnerForm>

export const Primary: Story = {}
