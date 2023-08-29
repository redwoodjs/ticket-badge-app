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

import Tooltip from './Tooltip'

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
}

export default meta

type Story = StoryObj<typeof Tooltip>

export const Primary: Story = {}
