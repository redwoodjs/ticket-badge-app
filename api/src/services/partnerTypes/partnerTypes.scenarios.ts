import type { Prisma, PartnerType } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PartnerTypeCreateArgs>({
  partnerType: {
    one: { data: { name: 'String' } },
    two: { data: { name: 'String' } },
  },
})

export type StandardScenario = ScenarioData<PartnerType, 'partnerType'>
