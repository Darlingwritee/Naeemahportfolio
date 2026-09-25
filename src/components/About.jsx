import { about } from '../data/content.js'

function About() {
  return (
    <section className="section about">
      <div className="section__inner about__grid">
        <div className="about__intro">
          <p className="eyebrow">{about.eyebrow}</p>
          <h2>{about.heading}</h2>
          <p className="about__lead">{about.lead}</p>
        </div>
        <div className="about__body">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
