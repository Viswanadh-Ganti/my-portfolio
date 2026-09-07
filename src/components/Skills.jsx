const skillGroups = [
  {
    title: 'Languages & Frameworks',
    items: ['Java', 'Spring', 'Spring Boot', 'Hibernate', 'React.js', 'JavaScript'],
  },
  {
    title: 'Cloud & DevOps',
    items: ['OpenShift', 'Docker', 'Podman', 'AWS', 'CI/CD', 'Containerization'],
  },
  {
    title: 'Data & Practices',
    items: ['SQL', 'Oracle Database', 'JDBC', 'Multithreading', 'TDD', 'Code Review'],
  },
]

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="section-header">
        <h2>Skills</h2>
        <span>Capabilities</span>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <ul className="skill-list">
              {group.items.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
