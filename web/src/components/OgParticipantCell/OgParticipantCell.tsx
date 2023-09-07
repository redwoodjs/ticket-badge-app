import { SplitFullName } from 'src/helpers/NameHelpers'

import Tag from '../Tag/Tag'

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

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ participant }) => {
  const [firstName, lastName] = participant.name
    ? SplitFullName(participant.name)
    : ['', '']

  return (
    <div className="flex h-[630px] w-[1200px] bg-white px-9 py-8">
      <div className="w-[853px]">
        <img
          src="/images/rw-conf-logo.png"
          alt="RedwoodJS Conference logo"
          className="mb-6 h-[60px] w-[207px]"
        />
        <div className="pl-10">
          <div className="mb-10 flex items-center gap-x-6">
            <img
              src={participant.avatar}
              alt={participant.name}
              className="h-[187px] w-[187px] rounded-full"
            />
            <h1 className="font-wide text-[40px] leading-tight">
              {participant.name}
              <br />
              <span className="text-[#868686]">invites you to</span>
            </h1>
          </div>
          <h2 className="font-condensed text-[126px] font-normal leading-[90%] text-darkSlateGray">
            Register &amp; Get Your
            <br />
            <span className="text-chestnutRose">Free</span> Virtual Ticket
          </h2>
        </div>
      </div>
      <div className="relative min-w-[350px]">
        <div className="relative left-[160px] z-clip -mb-[25px] -mt-8">
          <img src="/images/lanyard.png" alt="lanyard and clip for the badge" />
        </div>
        <div className="relative -top-[62px] rotate-1 scale-75">
          <Tag
            firstName={firstName}
            lastName={lastName}
            company={participant.company}
            avatar={participant.avatar}
          />
        </div>
      </div>
    </div>
  )
}
