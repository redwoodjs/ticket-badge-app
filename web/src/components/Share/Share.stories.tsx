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

import Share from './Share'

const meta: Meta<typeof Share> = {
  component: Share,
}

export default meta

type Story = StoryObj<typeof Share>

export const Primary: Story = {}
