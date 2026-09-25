import { work } from '../data/content.js'

function Work() {
  return (
    <section className="section work" id="work">
      <div className="section__inner">
        <p className="eyebrow">{work.eyebrow}</p>
        <h2>{work.heading}</h2>
        <div className="work__list">
          {work.cases.map((item) => (
            <article className="case" key={item.title}>
              <p className="case__meta">{item.meta}</p>
              <h3>{item.title}</h3>
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
              <div className="case__images">
                {item.images.map((src, i) => (
                  <img key={i} src={src} alt={`${item.title} visual ${i + 1}`} loading="lazy" />
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
