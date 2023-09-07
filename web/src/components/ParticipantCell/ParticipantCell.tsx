import type { partnerBySlugQuery } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import {
  type CellSuccessProps,
  type CellFailureProps,
  MetaTags,
} from '@redwoodjs/web'

import ParticipantForm from '../ParticipantForm/ParticipantForm'

export const QUERY = gql`
  query partnerBySlugQuery($slug: String!) {
    partnerBySlug(slug: $slug) {
      id
      name
      slug
      logo
      avatar
      virtualCode
      virtualDiscount
      virtualEndDate
      inPersonCode
      inPersonUrl
      inPersonDiscount
      inPersonEndDate
    }
  }
`

export const Loading = () => <div />

// If you can't find the partner in the database, redirect to the home page. At
// the top of HomePage.tsx, if there's not a slug specified in the URL, it
// will default to whatever is set in the Constants.ts file as
// `Constants.DEFAULT_PARTNER_SLUG`
export const Empty = () => {
  navigate(routes.home())
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  partnerBySlug,
}: CellSuccessProps<partnerBySlugQuery>) => {
  return (
    <>
      <MetaTags
        title={`${partnerBySlug.name} invites you to the RedwoodJS Conference`}
        description="Register for a free ticket to the RedwoodJS Conference and level up your web development skills! Join industry experts and fellow React developers for insightful talks, workshops, and networking opportunities. Don't miss this chance to be part of the first RedwoodJS Conference. Sign up now!"
        ogUrl={
          partnerBySlug
            ? `${process.env.REDWOOD_ENV_BASE_URL}/${partnerBySlug.id}`
            : process.env.REDWOOD_ENV_BASE_URL
        }
        ogContentUrl={`${process.env.REDWOOD_ENV_BASE_URL}/images/og.png`}
      />
      <ParticipantForm partner={partnerBySlug} />
    </>
  )
}
