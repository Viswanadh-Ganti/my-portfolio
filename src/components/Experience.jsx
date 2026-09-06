const experience = [
  {
    role: 'Senior Full Stack Java Developer',
    company: 'Leading Enterprise Solutions',
    period: '2022 — Present',
    summary:
      'Design and develop scalable web applications, integrate backend services, improve system performance, and collaborate with cross-functional teams to deliver client-focused solutions.',
  },
  {
    role: 'Java Developer',
    company: 'Product Engineering Team',
    period: '2019 — 2022',
    summary:
      'Built Java-based services, optimized APIs, handled SQL-based data flows, and contributed to front-end enhancements using modern React interfaces.',
  },
  {
    role: 'Software Engineer',
    company: 'Digital Platform Group',
    period: '2017 — 2019',
    summary:
      'Worked on feature development, bug fixes, and application maintenance with a strong focus on reliability, code quality, and user experience.',
  },
]

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="section-header">
        <h2>Experience</h2>
        <span>Career</span>
      </div>

      <div className="timeline">
        {experience.map((item) => (
          <article className="timeline-item" key={item.role}>
            <div className="timeline-top">
              <h3>{item.role}</h3>
              <span className="period">{item.period}</span>
            </div>
            <span className="company">{item.company}</span>
            <p>{item.summary}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
