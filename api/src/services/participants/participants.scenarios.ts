import type { Prisma, Participant } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ParticipantCreateArgs>({
  participant: {
    one: {
      data: {
        email: 'String6984707',
        partner: {
          create: {
            name: 'String',
            slug: 'String1445706',
            PartnerType: { create: { name: 'String' } },
          },
        },
      },
    },
    two: {
      data: {
        email: 'String577525',
        partner: {
          create: {
            name: 'String',
            slug: 'String4947947',
            PartnerType: { create: { name: 'String' } },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Participant, 'participant'>
