import { about } from '../data/content.js'

function About() {
  return (
    <section className="section about" id="about">
      <div className="section__inner about__grid">
        <div className="about__intro" data-reveal>
          <div className="about__mark">
            <span className="about__monogram" aria-hidden="true">
              NK
            </span>
            <span className="about__mark-label">Brand &amp; Communication Design</span>
          </div>
          <p className="eyebrow">{about.eyebrow}</p>
          <h2>{about.heading}</h2>
          <p className="lede">{about.lead}</p>
        </div>
        <div className="about__body" data-reveal style={{ '--reveal-delay': '90ms' }}>
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
