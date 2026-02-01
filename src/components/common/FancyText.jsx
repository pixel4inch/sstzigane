import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const words = [
  'Smart Buildings!',
  'Facility Management!',
  'Energy Efficiency!',
  'IoT Automation!',
  'Life & Fire Safety!'
]

const FancyText = () => {
  const textRef = useRef(null)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 }
    )

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [index])

  return (
    <span ref={textRef} className="fw-600">
      {words[index]}
    </span>
  )
}

export default FancyText
