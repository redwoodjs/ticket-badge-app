import { useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import { useCopyToClipboard } from 'src/hooks/useCopyToClipboard'

import Tooltip from '../Tooltip/Tooltip'

interface Props {
  children: JSX.Element
  defaultToolTipText?: string
  textToCopy: string
}

const CopyButtonWithTooltip = ({
  children,
  textToCopy,
  defaultToolTipText = 'Copy',
}: Props) => {
  const [isTooltipShowing, setIsTooltipShowing] = useState(false)
  const [toolTipText, setToolTipText] = useState(defaultToolTipText)
  const [, copy] = useCopyToClipboard()

  const handleClick = () => {
    setToolTipText('Copied!')
    copy(textToCopy)

    // in 3 seconds change the tool tip text back to 'Copy'
    setTimeout(() => {
      setToolTipText(defaultToolTipText)
    }, 2000)
  }

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

export default CopyButtonWithTooltip
