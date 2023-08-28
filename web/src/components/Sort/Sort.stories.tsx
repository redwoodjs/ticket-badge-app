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

import Sort from './Sort'

const meta: Meta<typeof Sort> = {
  component: Sort,
}

export default meta

type Story = StoryObj<typeof Sort>

export const Primary: Story = {}
