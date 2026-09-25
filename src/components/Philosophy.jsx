import { philosophy } from '../data/content.js'

function Philosophy() {
  return (
    <section className="section section--plum philosophy">
      <div className="section__inner">
        <p className="eyebrow" data-reveal>
          {philosophy.eyebrow}
        </p>
        <h2 data-reveal>{philosophy.heading}</h2>
        <blockquote className="philosophy__quote" data-reveal>
          {philosophy.quote}
        </blockquote>
        <div className="philosophy__grid">
          {philosophy.principles.map((item, i) => (
            <div
              className="philosophy__item"
              key={item.title}
              data-reveal
              style={{ '--reveal-delay': `${i * 70}ms` }}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Philosophy
