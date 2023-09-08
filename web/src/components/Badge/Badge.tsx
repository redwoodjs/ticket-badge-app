import { useLayoutEffect, useRef } from 'react'

import { gsap } from 'gsap'
import { Draggable } from 'gsap/dist/Draggable'

import Tag from '../Tag/Tag'

interface Props {
  avatar?: string
  firstName?: string
  lastName?: string
  company?: string
}

const Badge = ({
  avatar = '',
  firstName = '',
  lastName = '',
  company = '',
}: Props) => {
  const comp = useRef()
  const badgeRef = useRef(null)
  const myDraggable = useRef(null)
  const myCordFront = useRef(null)
  const myCordBack = useRef(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(Draggable)

    const ctx = gsap.context(() => {
      const BADGE = '#badge'
      const CORD_BACK = '#cordBack'
      const CORD_FRONT = '#cordFront'

      // CREATE THE TIMELINE
      const CORD_TL = gsap.timeline({ paused: true })
      CORD_TL.add(
        gsap.to(BADGE, {
          x: 0,
          y: 0,
          rotation: -22,
          duration: 0.2,
          transformOrigin: 'center top',
        })
      )
      CORD_TL.add(
        gsap.to(BADGE, {
          x: 0,
          y: 0,
          rotation: 12,
          duration: 0.2,
          transformOrigin: 'center top',
        })
      )
      CORD_TL.add(
        gsap.to(BADGE, {
          x: 0,
          y: 0,
          rotation: -5,
          duration: 0.2,
          transformOrigin: 'center top',
        })
      )
      CORD_TL.add(
        gsap.to(BADGE, {
          x: 0,
          y: 0,
          rotation: 3,
          duration: 0.2,
          transformOrigin: 'center top',
        })
      )
      CORD_TL.add(
        gsap.to(BADGE, {
          x: 0,
          y: 0,
          rotation: 0,
          duration: 0.2,
          transformOrigin: 'center top',
        })
      )

      const WIGGLE_TL = gsap.timeline({ paused: true })
      WIGGLE_TL.add(
        gsap.to(BADGE, {
          x: 0,
          y: 0,
          rotation: -2,
          duration: 0.2,
          transformOrigin: 'center top',
        })
      )
      WIGGLE_TL.add(
        gsap.to(BADGE, {
          x: 0,
          y: 0,
          rotation: 2,
          duration: 0.2,
          transformOrigin: 'center top',
        })
      )
      WIGGLE_TL.add(
        gsap.to(BADGE, {
          x: 0,
          y: 0,
          rotation: -1,
          duration: 0.2,
          transformOrigin: 'center top',
        })
      )
      WIGGLE_TL.add(
        gsap.to(BADGE, {
          x: 0,
          y: 0,
          rotation: 1,
          duration: 0.2,
          transformOrigin: 'center top',
        })
      )
      WIGGLE_TL.add(
        gsap.to(BADGE, {
          x: 0,
          y: 0,
          rotation: 0,
          duration: 0.2,
          transformOrigin: 'center top',
        })
      )

      const ENDX = myCordFront.current.getAttribute('x2')
      const ENDY = myCordFront.current.getAttribute('y2')

      // TIMED FUNCTION TO UPDATE THE CORDS
      setInterval(() => {
        WIGGLE_TL.restart()
      }, 10000)

      // CREATE THE DRAGGABLE
      myDraggable.current = Draggable.create(BADGE, {
        onDrag: function () {
          gsap.set(CORD_FRONT, {
            attr: {
              x2: this.x + 175,
              y2: this.y + 155,
            },
          })
          gsap.set(CORD_BACK, {
            attr: {
              x2: this.x + 175,
              y2: this.y + 155,
            },
          })
          gsap.to(BADGE, {
            rotation: this.x / 50,
            transformOrigin: 'center top',
            duration: 0,
          })
        },
        onRelease: function () {
          gsap.to(CORD_FRONT, {
            attr: {
              x2: ENDX,
              y2: ENDY,
            },
            duration: 0.1,
          })

          gsap.to(CORD_BACK, {
            attr: {
              x2: ENDX,
              y2: ENDY,
            },
            duration: 0.1,
          })

          gsap.to(BADGE, {
            x: 0,
            y: 0,
            rotation: 0,
            duration: 0.1,
            onComplete: function () {
              CORD_TL.restart()
            },
          })
        },
      })[0]
    }, comp)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={comp}>
      <svg
        className="relative z-cord"
        viewBox="0 0 350 150"
        width="350"
        height="150"
        preserveAspectRatio="xMinYMin"
        style={{ overflow: 'visible' }}
      >
        <line
          x1="160"
          y1="-10"
          y2="160"
          x2="175"
          stroke="black"
          strokeWidth="17"
          id="cordBack"
          ref={myCordBack}
        />
        <line
          x1="180"
          y1="-10"
          y2="160"
          x2="175"
          stroke="#1E1E28"
          strokeWidth="17"
          id="cordFront"
          ref={myCordFront}
        />
      </svg>
      <div ref={badgeRef} id="badge" className="relative z-badge">
        <img
          src="/images/clip.png"
          alt="clip"
          className="relative z-clip mx-auto -mb-6 h-[222px] w-[58px]"
        />
        <Tag
          firstName={firstName}
          lastName={lastName}
          company={company}
          avatar={avatar}
        />
      </div>
    </div>
  )
}

export default Badge
