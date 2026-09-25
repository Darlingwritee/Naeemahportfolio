import { services } from '../data/content.js'

function Services() {
  return (
    <section className="section services">
      <div className="section__inner">
        <p className="eyebrow" data-reveal>
          {services.eyebrow}
        </p>
        <h2 data-reveal>{services.heading}</h2>
        <div className="services__list">
          {services.items.map((item, i) => (
            <div
              className="services__row"
              key={item.title}
              data-reveal
              style={{ '--reveal-delay': `${i * 70}ms` }}
            >
              <span className="services__index">{String(i + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
