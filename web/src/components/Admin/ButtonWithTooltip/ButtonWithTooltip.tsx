import { useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import Tooltip from '../Tooltip/Tooltip'

interface Props {
  children: JSX.Element
  handleClick: () => void
  toolTipText: string
}

const ButtonWithToolTip = ({ children, handleClick, toolTipText }: Props) => {
  const [isTooltipShowing, setIsTooltipShowing] = useState(false)

  return (
    <button
      onClick={handleClick}
      className="relative p-2"
      onMouseEnter={() => setIsTooltipShowing(true)}
      onMouseLeave={() => setIsTooltipShowing(false)}
    >
      <AnimatePresence>
        {isTooltipShowing && (
          <motion.div
            className="absolute -top-10 left-1/2"
            initial={{ opacity: 0, y: 10, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 10, x: '-50%' }}
          >
            <Tooltip label={toolTipText} />
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </button>
  )
}

export default ButtonWithToolTip
