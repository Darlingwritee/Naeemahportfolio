import { hero } from '../data/content.js'

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__inner">
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
    </section>
  )
}

export default Hero
