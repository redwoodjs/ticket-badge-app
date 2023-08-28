import type {
  QueryResolvers,
  MutationResolvers,
  ParticipantRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const participants: QueryResolvers['participants'] = () => {
  return db.participant.findMany()
}

export const participant: QueryResolvers['participant'] = ({ id }) => {
  return db.participant.findUnique({
    where: { id },
  })
}

export const createParticipant: MutationResolvers['createParticipant'] = ({
  input,
}) => {
  return db.participant.create({
    data: input,
  })
}

export const updateParticipant: MutationResolvers['updateParticipant'] = ({
  id,
  input,
}) => {
  return db.participant.update({
    data: input,
    where: { id },
  })
}

export const deleteParticipant: MutationResolvers['deleteParticipant'] = ({
  id,
}) => {
  return db.participant.delete({
    where: { id },
  })
}

export const Participant: ParticipantRelationResolvers = {
  partner: (_obj, { root }) => {
    return db.participant.findUnique({ where: { id: root?.id } }).partner()
  },
}
