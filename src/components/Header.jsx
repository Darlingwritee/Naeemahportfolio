import { nav } from '../data/content.js'

function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a href="#top" className="brand">
          Naeemah Kamaldeen
        </a>
        <nav className="site-nav">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
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
