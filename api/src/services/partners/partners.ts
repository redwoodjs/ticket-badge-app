import type {
  QueryResolvers,
  MutationResolvers,
  PartnerRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const partners: QueryResolvers['partners'] = () => {
  return db.partner.findMany()
}

export const partnersCompaniesOnly: QueryResolvers['partners'] = () => {
  return db.partner.findMany({
    where: { partnerTypeId: 2 },
  })
}

export const partnersSpeakersOnly: QueryResolvers['partners'] = () => {
  return db.partner.findMany({
    where: { partnerTypeId: 1 },
  })
}

export const partner: QueryResolvers['partner'] = ({ id }) => {
  return db.partner.findUnique({
    where: { id },
  })
}

export const partnerBySlug: QueryResolvers['partnerBySlug'] = ({ slug }) => {
  return db.partner.findUnique({
    where: { slug },
  })
}

export const createPartner: MutationResolvers['createPartner'] = ({
  input,
}) => {
  return db.partner.create({
    data: input,
  })
}

export const updatePartner: MutationResolvers['updatePartner'] = ({
  id,
  input,
}) => {
  return db.partner.update({
    data: input,
    where: { id },
  })
}

export const deletePartner: MutationResolvers['deletePartner'] = ({ id }) => {
  return db.partner.delete({
    where: { id },
  })
}

export const Partner: PartnerRelationResolvers = {
  Participants: (_obj, { root }) => {
    return db.partner.findUnique({ where: { id: root?.id } }).Participants()
  },
}
