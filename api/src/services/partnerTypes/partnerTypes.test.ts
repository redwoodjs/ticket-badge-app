import type { PartnerType } from '@prisma/client'

import {
  partnerTypes,
  partnerType,
  createPartnerType,
  updatePartnerType,
  deletePartnerType,
} from './partnerTypes'
import type { StandardScenario } from './partnerTypes.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('partnerTypes', () => {
  scenario('returns all partnerTypes', async (scenario: StandardScenario) => {
    const result = await partnerTypes()

    expect(result.length).toEqual(Object.keys(scenario.partnerType).length)
  })

  scenario(
    'returns a single partnerType',
    async (scenario: StandardScenario) => {
      const result = await partnerType({ id: scenario.partnerType.one.id })

      expect(result).toEqual(scenario.partnerType.one)
    }
  )

  scenario('creates a partnerType', async () => {
    const result = await createPartnerType({
      input: { name: 'String' },
    })

    expect(result.name).toEqual('String')
  })

  scenario('updates a partnerType', async (scenario: StandardScenario) => {
    const original = (await partnerType({
      id: scenario.partnerType.one.id,
    })) as PartnerType
    const result = await updatePartnerType({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a partnerType', async (scenario: StandardScenario) => {
    const original = (await deletePartnerType({
      id: scenario.partnerType.one.id,
    })) as PartnerType
    const result = await partnerType({ id: original.id })

    expect(result).toEqual(null)
  })
})
