'use client'

import { useState, useEffect, useRef } from 'react'

export default function RoiCounter({ target = 190000 }) {
  const [value, setValue] = useState(target)
  const animatedRef = useRef(false)
  const elRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true
          let start = 0
          const stepTime = 20
          const steps = 1500 / stepTime
          const increment = target / steps
          const timer = setInterval(() => {
            start += increment
            if (start >= target) {
              start = target
              clearInterval(timer)
            }
            setValue(Math.floor(start))
          }, stepTime)
        }
      },
      { threshold: 0.3 }
    )
    if (elRef.current) observer.observe(elRef.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={elRef}>
      {value.toLocaleString('sv-SE')}
    </span>
  )
}
