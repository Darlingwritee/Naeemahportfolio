import { contact } from '../data/content.js'

function Contact() {
  return (
    <section className="section contact">
      <div className="section__inner contact__grid">
        <div className="contact__intro">
          <p className="eyebrow">{contact.eyebrow}</p>
          <h2>{contact.heading}</h2>
          <p>{contact.intro}</p>
          <p className="contact__line">{contact.lineIntro}</p>
          <ul className="contact__bullets">
            {contact.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
        <div className="contact__card">
          <h3>{contact.card.heading}</h3>
          <a className="contact__cta" href={contact.card.conversation.href} target="_blank" rel="noopener">
            {contact.card.conversation.label}
          </a>
          <a className="contact__link" href={contact.card.linkedin.href} target="_blank" rel="noopener">
            {contact.card.linkedin.label}
          </a>
          <a className="contact__link" href={contact.card.rateCard.href} target="_blank" rel="noopener">
            {contact.card.rateCard.label}
          </a>
          <p className="contact__status">● {contact.card.status}</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
