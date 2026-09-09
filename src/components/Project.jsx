const projects = [
  {
    title: 'IBM MREF / TRIRIGA',
    description:
      'Delivered enterprise backend services for a large facilities and real-estate platform, covering feature development, security hardening, defect remediation, and deployment support in OpenShift and AWS environments.',
    tech: ['Java', 'Spring Boot', 'Hibernate', 'OpenShift', 'AWS'],
  },
  {
    title: 'Security and platform hardening',
    description:
      'Remediated reflected XSS issues across high-traffic UI surfaces, upgraded vulnerable dependencies, improved static-analysis pipeline quality, and strengthened email and versioning behavior across customer-critical workflows.',
    tech: ['OWASP', 'XSS', 'CI/CD', 'Git', 'Jenkins'],
  },
  {
    title: 'FedEx Integrated Sortation System',
    description:
      'Built and maintained modules for a high-throughput package-sorting platform, applying multithreading, JDBC, and SQL optimization to production-critical code-upgrade patches and reliability fixes.',
    tech: ['Java', 'JDBC', 'SQL', 'Multithreading'],
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
