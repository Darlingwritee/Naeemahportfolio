import { testimonials } from '../data/content.js'

function Testimonials() {
  return (
    <section className="section section--tint testimonials" id="testimonials">
      <div className="section__inner">
        <p className="eyebrow" data-reveal>
          {testimonials.eyebrow}
        </p>
        <h2 data-reveal>{testimonials.heading}</h2>
        <div className="testimonials__grid">
          {testimonials.items.map((item, i) => (
            <figure
              className="testimonial-card"
              key={item.cite}
              data-reveal
              style={{ '--reveal-delay': `${i * 80}ms` }}
            >
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
