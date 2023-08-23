import type { Meta, StoryObj } from '@storybook/react'

import CustomizeTicketPage from './CustomizeTicketPage'

const meta: Meta<typeof CustomizeTicketPage> = {
  component: CustomizeTicketPage,
}

export default meta

type Story = StoryObj<typeof CustomizeTicketPage>

export const Primary: Story = {}
