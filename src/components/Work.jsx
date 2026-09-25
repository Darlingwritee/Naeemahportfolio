import { work } from '../data/content.js'

function Work() {
  return (
    <section className="section work" id="work">
      <div className="section__inner">
        <p className="eyebrow" data-reveal>
          {work.eyebrow}
        </p>
        <h2 data-reveal>{work.heading}</h2>
        <div className="work__list">
          {work.cases.map((item, index) => (
            <article className="case" key={item.title} data-reveal>
              <header className="case__head">
                <span className="case__index">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <p className="case__meta">{item.meta}</p>
                  <h3>{item.title}</h3>
                </div>
              </header>
              <div className="case__body">
                <div>
                  <p className="case__label">Task</p>
                  <p>{item.task}</p>
                </div>
                <div>
                  <p className="case__label">Strategy</p>
                  <p>{item.strategy}</p>
                </div>
                <div>
                  <p className="case__label">Outcome</p>
                  <p>{item.outcome}</p>
                </div>
              </div>
              <div
                className={`case__gallery case__gallery--${
                  item.images.length % 2 === 0 ? 'even' : 'odd'
                }`}
              >
                {item.images.map((src, i) => (
                  <figure className="case__shot" key={i}>
                    <img
                      src={src}
                      alt={`${item.title} — visual ${i + 1}`}
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
