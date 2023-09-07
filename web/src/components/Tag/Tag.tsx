interface Props {
  firstName?: string
  lastName?: string
  company?: string
  avatar?: string
}

const Tag = ({
  firstName = '',
  lastName = '',
  company = '',
  avatar = '',
}: Props) => {
  return (
    <div className="relative">
      <img
        src={
          avatar || firstName || lastName
            ? '/images/tag.png'
            : '/images/tag--blank.png'
        }
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
  )
}

export default Tag
