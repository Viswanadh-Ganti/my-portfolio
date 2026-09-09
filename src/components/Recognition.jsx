const recognition = {
  title: 'Manager Appreciation',
  issuer: 'Thanks@IBM',
  date: 'September 2026',
  detail:
    'Recognized by Niti Dewan for valuable contributions to the team, including resolving skill cases, backporting fixes, and mentoring team members.',
}

export default function Recognition() {
  return (
    <section className="recognition-section" id="recognition">
      <div className="section-header">
        <h2>Recognition</h2>
        <span>{recognition.date}</span>
      </div>

      <article className="recognition-entry">
        <div>
          <span className="recognition-label">{recognition.issuer}</span>
          <h3>{recognition.title}</h3>
        </div>
        <p>{recognition.detail}</p>
      </article>
    </section>
  )
}