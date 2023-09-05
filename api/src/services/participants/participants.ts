import { Prisma } from '@prisma/client'
import type {
  QueryResolvers,
  MutationResolvers,
  ParticipantRelationResolvers,
} from 'types/graphql'

import { RedwoodError } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'
import { mailer } from 'src/lib/mailer'
import { TicketEmail } from 'src/mail/TicketEmail'

export const participants: QueryResolvers['participants'] = () => {
  return db.participant.findMany()
}

export const participant: QueryResolvers['participant'] = ({ id }) => {
  return db.participant.findUnique({
    where: { id },
  })
}

export const createParticipant: MutationResolvers['createParticipant'] =
  async ({ input }) => {
    try {
      const newParticipant = await db.participant.create({
        data: input,
        select: {
          id: true,
          email: true,
          partner: {
            select: {
              inPersonCode: true,
              inPersonDiscount: true,
              inPersonUrl: true,
            },
          },
        },
      })

      await mailer.send(
        TicketEmail({
          preview:
            "You're in! Confirming your virtual spot at RedwoodJS Conference.Get ready for talks from Tom Preston- Werner on RedwoodJS, deep dives on Apollo and GraphQL, and more.Your ticket inside!",
          participantID: newParticipant.id,
          partnerInPersonCode: newParticipant.partner.inPersonCode,
          partnerInPersonDiscount: newParticipant.partner.inPersonDiscount,
          partnerInPersonUrl: newParticipant.partner.inPersonUrl,
        }),
        {
          to: input.email,
          from: 'conference@redwoodjs.com',
          subject:
            "🎟️ Confirmation: You're Registered for the RedwoodJS Conference!",
        }
      )

      return newParticipant
    } catch (e) {
      logger.error(e, 'Error creating character')

      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        // P2022: Unique constraint failed
        // Prisma error codes: https://www.prisma.io/docs/reference/api-reference/error-reference#error-codes
        if (e.code === 'P2002') {
          logger.error('That email address already exists.', e)
          throw new RedwoodError(
            'Someone has already registered with that email address.'
          )
        }
      }
      throw e
    }
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
