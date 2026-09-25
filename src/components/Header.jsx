import { useEffect, useState } from 'react'
import { nav, portrait } from '../data/content.js'

function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={scrolled ? 'site-header is-scrolled' : 'site-header'}>
      <div className="site-header__inner">
        <a href="#top" className="brand">
          <span className="brand__avatar">
            <img src={portrait.src} alt="" width="1200" height="1500" />
          </span>
          Naeemah Kamaldeen
        </a>
        <nav className="site-nav" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={item.external ? 'is-external' : undefined}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
