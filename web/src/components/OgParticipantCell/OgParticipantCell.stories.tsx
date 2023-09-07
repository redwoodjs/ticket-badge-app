import type { Meta, StoryObj } from '@storybook/react'

import { standard } from './OgParticipanCell.mock'
import { Loading, Empty, Failure, Success } from './OgParticipantCell'

const meta: Meta = {
  title: 'Cells/OgImageCell',
}

export default meta

export const loading: StoryObj<typeof Loading> = {
  render: () => {
    return Loading ? <Loading /> : <></>
  },
}

export const empty: StoryObj<typeof Empty> = {
  render: () => {
    return Empty ? <Empty /> : <></>
  },
}

export const failure: StoryObj<typeof Failure> = {
  render: (args) => {
    return Failure ? <Failure error={new Error('Oh no')} {...args} /> : <></>
  },
}

export const success: StoryObj<typeof Success> = {
  render: (args) => {
    return Success ? <Success {...standard()} {...args} /> : <></>
  },
}
