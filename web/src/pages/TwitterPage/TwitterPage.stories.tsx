import type { Meta, StoryObj } from '@storybook/react'

import TwitterPage from './TwitterPage'

const meta: Meta<typeof TwitterPage> = {
  component: TwitterPage,
}

export default meta

type Story = StoryObj<typeof TwitterPage>

export const Primary: Story = {}
