import { useEffect, useState } from 'react'
import { footer } from '../data/content.js'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="section__inner" data-reveal>
        <p className="eyebrow">{footer.eyebrow}</p>
        <div className="site-footer__links">
          {footer.links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener">
              {link.label}
            </a>
          ))}
        </div>
        <div className="site-footer__bottom">
          <span>{footer.copyright}</span>
          <a href={footer.rateCard.href} target="_blank" rel="noopener">
            {footer.rateCard.label}
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
