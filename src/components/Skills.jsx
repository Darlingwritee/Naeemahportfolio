import { skills } from '../data/content.js'

function TagGroup({ title, tags }) {
  return (
    <div className="skills__group">
      <h3>{title}</h3>
      <div className="tag-list">
        {tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

function Skills() {
  return (
    <section className="section skills">
      <div className="section__inner">
        <p className="eyebrow">{skills.eyebrow}</p>
        <h2>{skills.heading}</h2>
        <div className="skills__grid">
          {skills.columns.map((col) => (
            <TagGroup key={col.title} title={col.title} tags={col.tags} />
          ))}
        </div>
        <div className="skills__grid skills__grid--extras">
          {skills.extras.map((col) => (
            <TagGroup key={col.title} title={col.title} tags={col.tags} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
