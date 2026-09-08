const skillGroups = [
  {
    title: 'Backend engineering',
    items: ['Java', 'Spring', 'Spring Boot', 'Hibernate', 'REST APIs', 'Multithreading'],
  },
  {
    title: 'Data & integration',
    items: ['SQL', 'Oracle Database', 'JDBC', 'Data modeling', 'Query optimization'],
  },
  {
    title: 'Full stack & delivery',
    items: ['React.js', 'JavaScript', 'OpenShift', 'Docker', 'AWS', 'CI/CD', 'TDD'],
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
