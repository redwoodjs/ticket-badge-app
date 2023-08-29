import { useRef } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import Icon from 'src/components/Icon/Icon'
import { useClickOutside } from 'src/hooks/useClickOutside'
import { useEscapeKey } from 'src/hooks/useEscapeKey'

import Overlay from '../Overlay/Overlay'

interface Props {
  children: JSX.Element
  handleClose: () => void
  isShowing?: boolean
}

const SlideOut = ({ children, handleClose, isShowing = false }: Props) => {
  const closeSlideOut = () => {
    handleClose()
  }

  useEscapeKey(closeSlideOut)

  const slideOutPanelRef = useRef(null)
  useClickOutside(closeSlideOut, slideOutPanelRef)

  return (
    <AnimatePresence>
      {isShowing && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Overlay />
          </motion.div>
          <motion.div
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            exit={{ x: 500 }}
            className="z-overlaySlideout fixed bottom-0 right-0 top-0 h-screen w-[500px] overflow-x-scroll bg-black px-16 py-24"
            ref={slideOutPanelRef}
          >
            <button
              onClick={closeSlideOut}
              className="absolute right-8 top-8 text-white"
            >
              <Icon id="close" />
            </button>
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default SlideOut
