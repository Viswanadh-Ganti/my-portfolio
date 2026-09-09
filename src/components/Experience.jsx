const experience = [
  {
    role: 'Back End Developer',
    company: 'IBM',
    period: 'Nov 2023 — Present',
    summary:
      'Contribute to IBM MREF (Maximo Real Estate and Facilities, formerly TRIRIGA), delivering feature development, security hardening, dependency upgrades, customer defect resolution, and cloud deployment across OpenShift and AWS pipelines.',
  },
  {
    role: 'Technical Lead',
    company: 'Wipro Limited',
    period: 'Jul 2023 — Oct 2023',
    summary:
      'Led technical delivery for a Java engineering team on the TRIRIGA platform programme, coordinating design decisions, code-quality standards, sprint planning, and accessibility compliance work for a major financial client.',
  },
  {
    role: 'Senior Software Engineer',
    company: 'Wipro Technologies',
    period: 'Aug 2021 — Aug 2023',
    summary:
      'Delivered security and stability fixes across the TRIRIGA platform, resolved customer-reported APARs, and mentored junior engineers while partnering with architects and product stakeholders on scalable technical designs.',
  },
  {
    role: 'Project Engineer',
    company: 'Wipro Limited',
    period: 'Nov 2018 — Aug 2021',
    summary:
      'Built and maintained modules for the Integrated Sortation System (ISS), an automated package-sorting platform across FedEx Ground facilities, with strong work in multithreading, JDBC, and SQL query optimization.',
  },
  {
    role: 'Intern',
    company: 'Hiferk Technologies Pvt. Ltd.',
    period: 'Dec 2017 — Mar 2018',
    summary:
      'Contributed to development of an Online Recruitment System web application, gaining early full stack development experience across application workflows and user-facing features.',
  },
]

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="section-header">
        <h2>Experience</h2>
        <span>2017 — today</span>
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
