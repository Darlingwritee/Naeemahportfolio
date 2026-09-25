import { philosophy } from '../data/content.js'

function Philosophy() {
  return (
    <section className="section philosophy">
      <div className="section__inner">
        <p className="eyebrow">{philosophy.eyebrow}</p>
        <h2>{philosophy.heading}</h2>
        <blockquote className="philosophy__quote">{philosophy.quote}</blockquote>
        <div className="philosophy__grid">
          {philosophy.principles.map((item) => (
            <div className="philosophy__item" key={item.title}>
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
