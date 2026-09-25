import { useState } from 'react'
import { hero, portrait } from '../data/content.js'

function Hero() {
  const [portraitFailed, setPortraitFailed] = useState(false)

  return (
    <section className="hero" id="top">
      <div className="hero__inner">
        <div className="hero__grid">
          <div className="hero__lede">
            <p className="hero__meta">
              <span className="hero__status">{hero.status}</span>
            </p>
            <h1 className="hero__headline">
              {hero.headline.split('\n').map((line, i) => (
                <span className="hero__line" key={i}>
                  {line}
                </span>
              ))}
            </h1>
            <p className="hero__subtitle">{hero.subtitle}</p>
            <p className="hero__tagline">{hero.tagline}</p>
            <div className="hero__actions">
              <a className="btn btn--primary" href={hero.primaryCta.href} target="_blank" rel="noopener">
                {hero.primaryCta.label}
              </a>
              <a className="btn btn--ghost" href={hero.secondaryCta.href}>
                {hero.secondaryCta.label}
              </a>
            </div>
          </div>

          <figure className="hero__portrait">
            {portraitFailed ? (
              <span className="hero__portrait-fallback" aria-hidden="true">
                NK
              </span>
            ) : (
              <img
                src={portrait.src}
                alt={`Portrait of ${portrait.name}`}
                width="1200"
                height="1500"
                fetchPriority="high"
                onError={() => setPortraitFailed(true)}
              />
            )}
          </figure>
        </div>
      </div>
    </section>
  )
}

export default Hero
