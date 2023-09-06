import type { Prisma, Partner } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PartnerCreateArgs>({
  partner: {
    one: {
      data: {
        name: 'String',
        slug: 'String',
        logo: 'String',
        code: 'String',
        discount: 3610857,
      },
    },
    two: {
      data: {
        name: 'String',
        slug: 'String',
        logo: 'String',
        code: 'String',
        discount: 4551349,
      },
    },
  },
})

export type StandardScenario = ScenarioData<Partner, 'partner'>
