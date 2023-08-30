import type {
  QueryResolvers,
  MutationResolvers,
  PartnerTypeRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const partnerTypes: QueryResolvers['partnerTypes'] = () => {
  return db.partnerType.findMany()
}

export const partnerType: QueryResolvers['partnerType'] = ({ id }) => {
  return db.partnerType.findUnique({
    where: { id },
  })
}

export const createPartnerType: MutationResolvers['createPartnerType'] = ({
  input,
}) => {
  return db.partnerType.create({
    data: input,
  })
}

export const updatePartnerType: MutationResolvers['updatePartnerType'] = ({
  id,
  input,
}) => {
  return db.partnerType.update({
    data: input,
    where: { id },
  })
}

export const deletePartnerType: MutationResolvers['deletePartnerType'] = ({
  id,
}) => {
  return db.partnerType.delete({
    where: { id },
  })
}

export const PartnerType: PartnerTypeRelationResolvers = {
  Partners: (_obj, { root }) => {
    return db.partnerType.findUnique({ where: { id: root?.id } }).Partners()
  },
}
