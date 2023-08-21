import { useLayoutEffect, useRef } from 'react'

import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'

const Badge = ({ bounds }) => {
  const myDraggable = useRef(null)
  const badgeRef = useRef(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(Draggable)

    const BADGE = '#badge'

    // CREATE THE TIMELINE
    const CORD_TL = gsap.timeline({ paused: true })
    CORD_TL.add(gsap.to(BADGE, { x: 0, y: 0, rotation: -22, duration: 0.1 }))
    CORD_TL.add(gsap.to(BADGE, { x: 0, y: 0, rotation: 12, duration: 0.1 }))
    CORD_TL.add(gsap.to(BADGE, { x: 0, y: 0, rotation: 0, duration: 0.1 }))

    // CREATE THE DRAGGABLE
    myDraggable.current = Draggable.create(BADGE, {
      onDrag: function () {
        gsap.to(BADGE, {
          rotation: this.x / 50,
          transformOrigin: 'center top',
          duration: 0,
        })
      },
    })[0]
    return () => myDraggable.current[0].kill()
  }, [])

  return (
    <div ref={badgeRef} id="badge">
      <img
        src="/images/tag.png"
        alt="conference badge"
        className="pointer-events-none h-[537px] w-[351px]"
      />
    </div>
  )
}

export default Badge
