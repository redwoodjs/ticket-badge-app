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

import ParticipantForm from './ParticipantForm'

const meta: Meta<typeof ParticipantForm> = {
  component: ParticipantForm,
}

export default meta

type Story = StoryObj<typeof ParticipantForm>

export const Primary: Story = {}
