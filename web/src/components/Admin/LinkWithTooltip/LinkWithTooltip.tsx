import { useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import Tooltip from '../Tooltip/Tooltip'

interface Props {
  children: JSX.Element
  href: string
  toolTipText: string
  target?: '_blank' | '_self'
}

const LinkWithToolTip = ({
  children,
  href,
  target = '_blank',
  toolTipText,
}: Props) => {
  const [isTooltipShowing, setIsTooltipShowing] = useState(false)

  return (
    <a
      href={href}
      className="relative inline-block p-2"
      target={target}
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
    </a>
  )
}

export default LinkWithToolTip
