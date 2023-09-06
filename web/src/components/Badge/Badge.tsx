import { useLayoutEffect, useRef } from 'react'

import { gsap } from 'gsap'
import { Draggable } from 'gsap/dist/Draggable'

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

      // let startX = 0
      // let startY = 0

      const ENDX = myCordFront.current.getAttribute('x2')
      const ENDY = myCordFront.current.getAttribute('y2')

      // TIMED FUNCTION TO UPDATE THE CORDS
      setInterval(() => {
        WIGGLE_TL.restart()
      }, 10000)

      // CREATE THE DRAGGABLE
      myDraggable.current = Draggable.create(BADGE, {
        onPress: function (e) {
          startX = e.x
          startY = e.y
        },
        onDrag: function () {
          gsap.to('.card-shadow', {
            scale: 0.75,
            y: 100,
          })
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
          gsap.to('.card-shadow', {
            scale: 1,
            y: 0,
            duration: 0.5,
          })
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
        <div className="relative">
          <img
            src={
              avatar || firstName || lastName
                ? '/images/tag.png'
                : '/images/tag--blank.png'
            }
            alt="conference badge"
            className="pointer-events-none relative z-card h-[537px] w-[351px]"
          />
          <div className="card-shadow absolute inset-0 bg-[#747474] blur-[42px]" />
        </div>
        <div className="absolute left-[70px] top-[335px] z-content pr-4 text-white">
          {firstName && (
            <h3 className="m-0 -mb-1 p-0 font-condensed text-[82px] font-normal uppercase leading-none text-sandyBrown">
              {firstName}
            </h3>
          )}
          {lastName && (
            <h3 className="m-0 p-0 font-condensed text-[82px] font-normal uppercase leading-none text-chestnutRose">
              {lastName}
            </h3>
          )}
          {company && (
            <h4 className="font-wide text-sm uppercase leading-none text-white">
              {company}
            </h4>
          )}
          {avatar && (
            <img
              src={avatar}
              alt={`${firstName} ${lastName}`}
              className="float-right mt-2 h-[120px] w-[120px] rounded-full border-2 border-white"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Badge
