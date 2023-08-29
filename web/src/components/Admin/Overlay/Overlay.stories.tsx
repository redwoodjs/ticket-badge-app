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

import Overlay from './Overlay'

const meta: Meta<typeof Overlay> = {
  component: Overlay,
}

export default meta

type Story = StoryObj<typeof Overlay>

export const Primary: Story = {}
