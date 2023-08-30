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

import SpeakerRow from './SpeakerRow'

const meta: Meta<typeof SpeakerRow> = {
  component: SpeakerRow,
}

export default meta

type Story = StoryObj<typeof SpeakerRow>

export const Primary: Story = {}
