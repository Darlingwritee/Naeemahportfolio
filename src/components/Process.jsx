import { process } from '../data/content.js'

function Process() {
  return (
    <section className="section process" id="process">
      <div className="section__inner">
        <p className="eyebrow" data-reveal>
          {process.eyebrow}
        </p>
        <h2 data-reveal>{process.heading}</h2>
        <div className="process__list">
          {process.steps.map((step, i) => (
            <div
              className="process__row"
              key={step.number}
              data-reveal
              style={{ '--reveal-delay': `${i * 60}ms` }}
            >
              <span className="process__number">{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
