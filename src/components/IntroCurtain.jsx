import { useEffect, useState } from 'react'

const HOLD_MS = 1500
const SLIDE_MS = 850

export default function IntroCurtain() {
  // 'visible' → 'sliding' → 'gone'
  const [phase, setPhase] = useState('visible')

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setPhase('gone')
      return
    }

    const slideTimer = setTimeout(() => setPhase('sliding'), HOLD_MS)
    const goneTimer = setTimeout(() => setPhase('gone'), HOLD_MS + SLIDE_MS)

    return () => {
      clearTimeout(slideTimer)
      clearTimeout(goneTimer)
    }
  }, [])

  if (phase === 'gone') return null

  return (
    <div
      className={`intro${phase === 'sliding' ? ' is-sliding' : ''}`}
      style={{ '--intro-slide': `${SLIDE_MS}ms` }}
      aria-hidden="true"
    >
      <div className="intro__inner">
        <h1 className="intro__name">
          Naeemah
          <em>Kamaldeen</em>
        </h1>
        <span className="intro__rule" />
        <p className="intro__role">Graphic Designer &amp; Brand Strategist</p>
      </div>
    </div>
  )
}
