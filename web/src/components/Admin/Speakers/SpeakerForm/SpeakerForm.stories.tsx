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

import SpeakerForm from './SpeakerForm'

const meta: Meta<typeof SpeakerForm> = {
  component: SpeakerForm,
}

export default meta

type Story = StoryObj<typeof SpeakerForm>

export const Primary: Story = {}
