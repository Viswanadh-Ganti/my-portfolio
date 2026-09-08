const projects = [
  {
    title: 'IBM MREF / TRIRIGA',
    description:
      'Java backend services for enterprise facilities, infrastructure, and asset-management workflows. Contributions span feature delivery, production troubleshooting, and container-ready deployments.',
    tech: ['Java', 'Spring Boot', 'Hibernate', 'OpenShift'],
  },
  {
    title: 'FedEx Integrated Sortation System',
    description:
      'Modules and upgrade patches for an automated package-sorting platform used across FedEx Ground facilities, with emphasis on production reliability and throughput.',
    tech: ['Java', 'JDBC', 'SQL', 'Multithreading'],
  },
  {
    title: 'Early full stack work',
    description:
      "Contributed to an Online Recruitment System at Hiferk Technologies - an early opportunity to work across a web application's development lifecycle.",
    tech: ['Java', 'JavaScript', 'SQL'],
  },
]

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="section-header">
        <h2>Selected enterprise work</h2>
        <span>Experience highlights</span>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.tech.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
