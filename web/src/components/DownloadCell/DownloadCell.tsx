import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { SplitFullName } from 'src/helpers/NameHelpers'

export const QUERY = gql`
  query FindParticipant($id: Int!) {
    participant(id: $id) {
      id
      avatar
      name
      company
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ participant }: CellSuccessProps) => {
  const { avatar, name, company } = participant
  const [firstName, lastName] = SplitFullName(name)

  return (
    <div className="center bg-[#170E13]">
      <div className="relative">
        <img
          src="/images/tag.png"
          alt="conference badge"
          className="pointer-events-none relative z-card h-[537px] w-[351px]"
        />
        <div className="absolute left-[70px] top-[140px] z-content w-[280px] pr-4 text-white">
          <h3 className="m-0 -mb-1 p-0 font-condensed text-[82px] font-normal uppercase leading-none text-sandyBrown">
            {firstName}
          </h3>
          <h3 className="m-0 p-0 font-condensed text-[82px] font-normal uppercase leading-none text-chestnutRose">
            {lastName}
          </h3>
          {company && (
            <h4 className="min-h-[30px] font-wide text-sm font-normal uppercase leading-none text-white">
              {company}
            </h4>
          )}
          {avatar && (
            <img
              src={avatar}
              alt={`${firstName} ${lastName}`}
              className="float-right h-[120px] w-[120px] rounded-full border-2 border-white"
            />
          )}
        </div>
      </div>
    </div>
  )
}
