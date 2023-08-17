import { useEffect, useState } from 'react'

import { motion, useDragControls } from 'framer-motion'

const Badge = () => {
  const controls = useDragControls()
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    console.log({ controls })
  }, [controls])

  return (
    <motion.div
      drag
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      // dragTransition={{  }}
      dragElastic={0.2}
      whileHover={{ scale: 1.01 }}
      whileTap={{
        boxShadow: '0px 0px 15px rgba(0,0,0,0.2)',
        // rotate element based on how far it's dragged
        rotate: offset,
      }}
      className="h-[537px] w-[351px]"
      dragControls={controls}
    >
      <img
        src="/images/tag.png"
        alt="conference badge"
        className="pointer-events-none h-[537px] w-[351px]"
      />
    </motion.div>
  )
}

export default Badge
