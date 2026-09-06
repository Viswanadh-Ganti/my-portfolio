const skillGroups = [
  {
    title: 'Frontend',
    items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Responsive UI'],
  },
  {
    title: 'Backend',
    items: ['Java', 'Spring Boot', 'REST APIs', 'Microservices', 'Hibernate'],
  },
  {
    title: 'Database & Tools',
    items: ['MySQL', 'PostgreSQL', 'Git', 'Docker', 'JUnit'],
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
