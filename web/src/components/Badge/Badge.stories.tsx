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

import Badge from './Badge'

const meta: Meta<typeof Badge> = {
  component: Badge,
}

export default meta

type Story = StoryObj<typeof Badge>

export const Primary: Story = {}
