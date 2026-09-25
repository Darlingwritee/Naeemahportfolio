import { testimonials } from '../data/content.js'

function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="section__inner">
        <p className="eyebrow">{testimonials.eyebrow}</p>
        <h2>{testimonials.heading}</h2>
        <div className="testimonials__grid">
          {testimonials.items.map((item) => (
            <figure className="testimonial-card" key={item.cite}>
              <blockquote>{item.quote}</blockquote>
              <figcaption>{item.cite}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
