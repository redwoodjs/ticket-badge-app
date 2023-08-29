import type { Meta, StoryObj } from '@storybook/react'

import AdminLayout from './AdminLayout'

const meta: Meta<typeof AdminLayout> = {
  component: AdminLayout,
}

export default meta

type Story = StoryObj<typeof AdminLayout>

export const Primary: Story = {}
