import { useEffect, useRef } from 'react'
import { contents, elsewhere, portrait } from '../data/content.js'

/**
 * Full-screen contents index. Replaces the conventional link bar: one
 * persistent trigger opens a numbered index to every section on the page.
 */
export default function IndexMenu({ open, onClose }) {
  const panelRef = useRef(null)
  const firstLinkRef = useRef(null)

  useEffect(() => {
    if (!open) return

    const focusables = () =>
      Array.from(panelRef.current?.querySelectorAll('a[href], button:not([disabled])') || [])

    const onKey = (e) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key !== 'Tab') return

      const items = focusables()
      if (!items.length) return
      const first = items[0]
      const last = items[items.length - 1]

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    firstLinkRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open, onClose])

  if (!open) return null

  const goTo = (e, href) => {
    e.preventDefault()
    onClose()
    const target = document.querySelector(href)
    if (target) {
      // Wait for the scroll lock to lift before moving the page.
      requestAnimationFrame(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }))
    }
  }

  return (
    <div
      className="index-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      ref={panelRef}
    >
      <div className="index-menu__inner">
        <div className="index-menu__top">
          <span className="index-menu__brand">
            <span className="index-menu__avatar">
              <img src={portrait.src} alt="" />
            </span>
            {portrait.name}
          </span>
          <button type="button" className="index-menu__close" onClick={onClose}>
            Close
          </button>
        </div>

        <nav className="index-menu__nav" aria-label="Contents">
          <p className="index-menu__eyebrow">Contents</p>
          <ul className="index-menu__list">
            {contents.map((item, i) => (
              <li className="index-menu__item" key={item.href} style={{ '--i': i }}>
                <a
                  className="index-menu__link"
                  href={item.href}
                  ref={i === 0 ? firstLinkRef : undefined}
                  onClick={(e) => goTo(e, item.href)}
                >
                  <span className="index-menu__num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="index-menu__label">{item.label}</span>
                  <span className="index-menu__arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="index-menu__elsewhere">
          <p className="index-menu__eyebrow">Elsewhere</p>
          <div className="index-menu__links">
            {elsewhere.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener"
                className="index-menu__pill"
              >
                {item.label}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
