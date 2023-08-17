import { useEffect, useRef, useState } from 'react'

const Badge = () => {
  const badgeRef = useRef(null)
  const tagRef = useRef(null)
  const cordsRef = useRef(null)
  const clipRef = useRef(null)
  const [mousePos, setMousePos] = useState({})
  const [startingPos, setStartingPos] = useState({})
  const [isDragging, setIsDragging] = useState(false)

  useEffect(() => {
    if (isDragging) {
      const handleMouseMove = (event) => {
        setMousePos({ x: event.clientX, y: event.clientY })
      }

      console.log({ mousePos })
      handleDrag(mousePos)

      window.addEventListener('mousemove', handleMouseMove)

      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
      }
    } else return
  }, [mousePos, isDragging])

  const handleDragStart = (e) => {
    setIsDragging(true)

    console.log('dragging')
    console.log(e)
  }

  const handleDrag = (mousePos) => {
    console.log('dragging')

    // get the current position
    const { x, y } = badgeRef.current.getBoundingClientRect()

    // determine the difference between the starting position and the current position
    const diffX = mousePos.x - x
    const diffY = mousePos.y - y

    console.log({ x, y, mouseX: mousePos.x, mouseY: mousePos.y, diffX, diffY })

    badgeRef.current.style.transform = `translate(${diffX}px, ${diffY}px)`
  }

  const handleDrop = () => {
    setIsDragging(false)
    console.log('dropping')
  }

  return (
    <div className="absolute bottom-[0px] right-[50px]">
      <svg
        ref={badgeRef}
        width="543"
        height="2403"
        viewBox="0 0 543 2403"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g id="cord" ref={cordsRef}>
          <path
            d="M263.003 974C263.403 958 265.503 924.667 266.503 910L285.503 0H319L292.503 910V965C292.503 984 289.503 1017.5 289.503 1029.5C289.503 1041.5 285.503 1059 285.503 1101.5C285.503 1135.5 287.503 1419.67 288.503 1557.5C285.337 1556.67 278.503 1553 267.503 1557.5C251.503 1540.5 250.503 1471.5 250.003 1430C249.503 1388.5 253.503 1155 254.003 1121.5C254.503 1088 252.503 1071 257.003 1046.5C261.503 1022 262.503 994 263.003 974Z"
            fill="#131519"
          />
          <path
            d="M300 977.5C302 962.3 317.333 17 316.5 1H335C340.5 6.5 319.5 955.5 318.5 970C317.5 984.5 308.5 1022.5 313 1042.5C317.5 1062.5 316.5 1097 313 1119.5C309.5 1142 313 1160 313 1182C313 1204 309.5 1266 308.5 1290C307.5 1314 305.5 1429.5 305.5 1443C305.5 1456.5 296 1511.5 294 1525.5C292 1539.5 293 1562.5 286.5 1557.5C281.3 1553.5 271.667 1555.83 267.5 1557.5C266.834 1556.17 265.4 1549.6 265 1534C264.5 1514.5 283.5 1459 286.5 1422C289.5 1385 290 1299.5 290 1257V1119.5C290 1095 291.5 1091 290 1078C288.5 1065 293.5 1045.5 294.5 1025.5C295.5 1005.5 297.5 996.5 300 977.5Z"
            fill="#1E1E29"
          />
        </g>
        <g
          onMouseDown={handleDragStart}
          className="cursor-grab"
          onMouseUp={handleDrop}
        >
          <image
            ref={tagRef}
            id="tag"
            href="/images/tag.png"
            width="363.07"
            height="534.78"
            x="100"
            y="1750"
          />
        </g>
        <image
          ref={clipRef}
          href="/images/clip.png"
          width="58"
          height="222"
          id="clip"
          x="251.5"
          y="1555"
        />
      </svg>
    </div>
  )
}

export default Badge
