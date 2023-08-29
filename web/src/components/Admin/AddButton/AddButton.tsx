import Icon from '../../Icon/Icon'

interface Props {
  handleClick: () => void
  label: string
}

const AddButton = ({ handleClick, label }: Props) => {
  return (
    <button
      onClick={handleClick}
      className="flex h-10 w-full items-center justify-center gap-x-3 rounded-[6px] border-2 border-black font-sans font-bold text-black hover:border-steelBlue hover:bg-steelBlue hover:text-white"
    >
      <Icon id="plus" size={24} />
      {label}
    </button>
  )
}

export default AddButton
