import type { Meta, StoryObj } from '@storybook/react'

import SpeakersPage from './SpeakersPage'

const meta: Meta<typeof SpeakersPage> = {
  component: SpeakersPage,
}

export default meta

type Story = StoryObj<typeof SpeakersPage>

export const Primary: Story = {}
