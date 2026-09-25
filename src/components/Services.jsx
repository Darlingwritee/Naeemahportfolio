import { services } from '../data/content.js'

function Services() {
  return (
    <section className="section services">
      <div className="section__inner">
        <p className="eyebrow">{services.eyebrow}</p>
        <h2>{services.heading}</h2>
        <div className="services__list">
          {services.items.map((item) => (
            <div className="services__row" key={item.title}>
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
