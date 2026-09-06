const projects = [
  {
    title: 'Enterprise Dashboard',
    description:
      'A business operations dashboard built with Java and React to centralize reporting, analytics, and workflow monitoring for internal teams.',
    tech: ['React', 'Spring Boot', 'MySQL'],
    link: '#',
  },
  {
    title: 'Inventory Management System',
    description:
      'A full-stack inventory platform designed to streamline stock tracking, supplier management, and automated purchase workflows.',
    tech: ['Java', 'REST APIs', 'PostgreSQL'],
    link: '#',
  },
  {
    title: 'Customer Portal',
    description:
      'A customer-facing portal with secure authentication, role-based access, and responsive interfaces for service requests and account tracking.',
    tech: ['React', 'Spring Security', 'JWT'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="section-header">
        <h2>Projects</h2>
        <span>Work</span>
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
            <a href={project.link} className="project-link">
              Learn more →
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
