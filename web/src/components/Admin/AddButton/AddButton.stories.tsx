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

import AddButton from './AddButton'

const meta: Meta<typeof AddButton> = {
  component: AddButton,
}

export default meta

type Story = StoryObj<typeof AddButton>

export const Primary: Story = {}
