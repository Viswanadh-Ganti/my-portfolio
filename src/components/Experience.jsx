const experience = [
  {
    role: 'Back End Developer',
    company: 'IBM',
    period: 'Nov 2023 — Present',
    summary:
      'Develop and maintain Java backend services for IBM MREF, formerly TRIRIGA, a facilities, infrastructure, and asset-management platform. Build Spring Boot and Hibernate services, resolve production issues, and support containerized deployments on OpenShift and AWS.',
  },
  {
    role: 'Technical Lead',
    company: 'Wipro Limited',
    period: 'Jul 2023 — Oct 2023',
    summary:
      'Led technical delivery for a Java engineering team, coordinating design decisions and code quality standards across the project.',
  },
  {
    role: 'Senior Software Engineer',
    company: 'Wipro Technologies',
    period: 'Aug 2021 — Aug 2023',
    summary:
      'Delivered backend Java features and enhancements as a senior contributor, mentored junior engineers, and drove code review standards while partnering with architects and product stakeholders.',
  },
  {
    role: 'Project Engineer',
    company: 'Wipro Limited',
    period: 'Nov 2018 — Aug 2021',
    summary:
      'Built and maintained modules for the FedEx Integrated Sortation System, an automated package-sorting platform across FedEx Ground facilities. Developed production code-upgrade patches using multithreading, JDBC, and SQL query optimization.',
  },
  {
    role: 'Intern',
    company: 'Hiferk Technologies Pvt. Ltd.',
    period: 'Dec 2017 — Mar 2018',
    summary:
      'Contributed to an Online Recruitment System web application and gained early full stack web development experience.',
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
