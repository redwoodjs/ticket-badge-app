export interface Props {
  direction?: 'top' | 'bottom' | 'left' | 'right'
  label: string
}

const Tooltip = ({ direction = 'top', label }: Props) => {
  return (
    <div
      className={`relative whitespace-nowrap rounded-md bg-black px-6 py-2 font-sans text-sm text-white ${
        direction === 'top' && 'arrow--top'
      } ${direction === 'left' && 'arrow--left'} ${
        direction === 'right' && 'arrow--right'
      } ${direction === 'bottom' && 'arrow--bottom'}`}
    >
      {label}
    </div>
  )
}

export default Tooltip
