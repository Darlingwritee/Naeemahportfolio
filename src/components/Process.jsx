import { process } from '../data/content.js'

function Process() {
  return (
    <section className="section process" id="process">
      <div className="section__inner">
        <p className="eyebrow">{process.eyebrow}</p>
        <h2>{process.heading}</h2>
        <div className="process__list">
          {process.steps.map((step) => (
            <div className="process__row" key={step.number}>
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
