const projects = [
  {
    title: 'MREF / TRIRIGA Enterprise Solutions',
    description:
      'Enterprise real-estate and facilities workflows supported through Java services, REST integrations, and React interfaces at IBM.',
    tech: ['Java', 'Spring Boot', 'React'],
  },
  {
    title: 'FedEx Integrated Sortation System',
    description:
      'Backend services and business workflows for a logistics platform, with a focus on reliable APIs, data processing, and production support at Wipro.',
    tech: ['Java', 'Spring', 'REST APIs'],
  },
  {
    title: 'Online Recruitment System',
    description:
      'A web application contributed to during my internship at Hiferk Technologies, providing early hands-on experience with full stack application development.',
    tech: ['Java', 'Web Development', 'SQL'],
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
          </article>
        ))}
      </div>
    </section>
  )
}
