import type { Meta, StoryObj } from '@storybook/react'

import UsersPage from './UsersPage'

const meta: Meta<typeof UsersPage> = {
  component: UsersPage,
}

export default meta

type Story = StoryObj<typeof UsersPage>

export const Primary: Story = {}
