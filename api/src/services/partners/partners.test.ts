import type { Partner } from '@prisma/client'

import {
  partners,
  partner,
  createPartner,
  updatePartner,
  deletePartner,
} from './partners'
import type { StandardScenario } from './partners.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('partners', () => {
  scenario('returns all partners', async (scenario: StandardScenario) => {
    const result = await partners()

    expect(result.length).toEqual(Object.keys(scenario.partner).length)
  })

  scenario('returns a single partner', async (scenario: StandardScenario) => {
    const result = await partner({ id: scenario.partner.one.id })

    expect(result).toEqual(scenario.partner.one)
  })

  scenario('creates a partner', async () => {
    const result = await createPartner({
      input: {
        name: 'String',
        slug: 'String',
        logo: 'String',
        code: 'String',
        discount: 8857315,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.slug).toEqual('String')
    expect(result.logo).toEqual('String')
    expect(result.code).toEqual('String')
    expect(result.discount).toEqual(8857315)
  })

  scenario('updates a partner', async (scenario: StandardScenario) => {
    const original = (await partner({ id: scenario.partner.one.id })) as Partner
    const result = await updatePartner({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a partner', async (scenario: StandardScenario) => {
    const original = (await deletePartner({
      id: scenario.partner.one.id,
    })) as Partner
    const result = await partner({ id: original.id })

    expect(result).toEqual(null)
  })
})
