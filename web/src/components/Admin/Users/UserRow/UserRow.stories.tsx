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

import UserRow from './UserRow'

const meta: Meta<typeof UserRow> = {
  component: UserRow,
}

export default meta

type Story = StoryObj<typeof UserRow>

export const Primary: Story = {}
