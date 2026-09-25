import { useCallback, useEffect, useRef, useState } from 'react'
import { portrait } from '../data/content.js'
import IndexMenu from './IndexMenu.jsx'

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const triggerRef = useRef(null)
  const progressRef = useRef(null)
  const frameRef = useRef(0)

  useEffect(() => {
    const update = () => {
      frameRef.current = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      const p = max > 0 ? window.scrollY / max : 0
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${Math.min(1, Math.max(0, p))})`
      }
      setScrolled(window.scrollY > 24)
    }

    const onScroll = () => {
      if (frameRef.current) return
      frameRef.current = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [])

  // Returning focus to the trigger keeps keyboard users oriented.
  const closeMenu = useCallback(() => {
    setOpen(false)
    triggerRef.current?.focus()
  }, [])

  return (
    <>
      <div className="scroll-progress" aria-hidden="true">
        <span className="scroll-progress__bar" ref={progressRef} />
      </div>

      <header className={scrolled ? 'site-header is-scrolled' : 'site-header'}>
        <div className="site-header__inner">
          <a href="#top" className="brand">
            <span className="brand__avatar">
              <img src={portrait.src} alt="" width="1200" height="1500" />
            </span>
            <span className="brand__name">{portrait.name}</span>
          </a>

          <button
            type="button"
            className="index-trigger"
            ref={triggerRef}
            aria-expanded={open}
            aria-haspopup="dialog"
            onClick={() => setOpen(true)}
          >
            <span className="index-trigger__bars" aria-hidden="true">
              <span />
              <span />
            </span>
            Menu
          </button>
        </div>
      </header>

      <IndexMenu open={open} onClose={closeMenu} />
    </>
  )
}

export default Header
