import { useRef } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import Icon from 'src/components/Icon/Icon'
import { useClickOutside } from 'src/hooks/useClickOutside'
import { useEscapeKey } from 'src/hooks/useEscapeKey'

import Overlay from '../Overlay/Overlay'

const Modal = ({ children, handleClose, isShowing = false }) => {
  const closeSlideOut = () => {
    handleClose()
  }

  useEscapeKey(closeSlideOut)

  const slideOutPanelRef = useRef(null)
  useClickOutside(closeSlideOut, slideOutPanelRef)

  return (
    <AnimatePresence>
      {isShowing && (
        <div className="z-modal fixed inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Overlay />
          </motion.div>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="relative z-overlayContent h-[200px] w-[500px] rounded-xl border-1 border-gray-300 bg-white shadow-lg"
            ref={slideOutPanelRef}
          >
            <button
              onClick={closeSlideOut}
              className="absolute right-4 top-4 text-black"
            >
              <Icon id="close" />
            </button>
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default Modal
