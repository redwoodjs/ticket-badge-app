import type { Participant } from '@prisma/client'

import {
  participants,
  participant,
  createParticipant,
  updateParticipant,
  deleteParticipant,
} from './participants'
import type { StandardScenario } from './participants.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('participants', () => {
  scenario('returns all participants', async (scenario: StandardScenario) => {
    const result = await participants()

    expect(result.length).toEqual(Object.keys(scenario.participant).length)
  })

  scenario(
    'returns a single participant',
    async (scenario: StandardScenario) => {
      const result = await participant({ id: scenario.participant.one.id })

      expect(result).toEqual(scenario.participant.one)
    }
  )

  scenario('creates a participant', async (scenario: StandardScenario) => {
    const result = await createParticipant({
      input: {
        email: 'String9153117',
        partnerId: scenario.participant.two.partnerId,
      },
    })

    expect(result.email).toEqual('String9153117')
    expect(result.partnerId).toEqual(scenario.participant.two.partnerId)
  })

  scenario('updates a participant', async (scenario: StandardScenario) => {
    const original = (await participant({
      id: scenario.participant.one.id,
    })) as Participant
    const result = await updateParticipant({
      id: original.id,
      input: { email: 'String86574462' },
    })

    expect(result.email).toEqual('String86574462')
  })

  scenario('deletes a participant', async (scenario: StandardScenario) => {
    const original = (await deleteParticipant({
      id: scenario.participant.one.id,
    })) as Participant
    const result = await participant({ id: original.id })

    expect(result).toEqual(null)
  })
})
