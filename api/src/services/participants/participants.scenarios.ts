import type { Prisma, Participant } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ParticipantCreateArgs>({
  participant: {
    one: {
      data: {
        firstName: 'String',
        lastName: 'String',
        email: 'String',
        company: 'String',
        avatar: 'String',
        partner: { create: { name: 'String', slug: 'String', logo: 'String' } },
      },
    },
    two: {
      data: {
        firstName: 'String',
        lastName: 'String',
        email: 'String',
        company: 'String',
        avatar: 'String',
        partner: { create: { name: 'String', slug: 'String', logo: 'String' } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Participant, 'participant'>
