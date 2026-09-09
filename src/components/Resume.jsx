const resumeExperience = [
  {
    role: 'Back End Developer',
    company: 'IBM',
    period: 'Nov 2023 - Present',
    bullets: [
      'Contribute to IBM MREF (Maximo Real Estate and Facilities, formerly TRIRIGA), an enterprise facilities and real-estate management platform deployed at large global organisations.',
      'Delivered 340+ commits spanning feature development, security hardening, dependency management, and customer defect resolution across more than 50 work items since 2022.',
      'Led end-to-end remediation of reflected XSS exposures across multiple high-traffic UI surfaces and configured a continuous static-analysis pipeline with custom sanitizer rules and per-pull-request scanning.',
      'Resolved critical third-party library vulnerabilities, optimized AES encryption throughput for large datasets, hardened email transport security, and delivered work within containerized OpenShift and AWS deployment pipelines using Git and Jenkins CI/CD.',
    ],
  },
  {
    role: 'Technical Lead',
    company: 'Wipro Limited',
    period: 'Jul 2023 - Oct 2023',
    bullets: [
      'Led technical delivery for a Java engineering team embedded in the TRIRIGA platform programme, coordinating design decisions, code-quality standards, and sprint planning via JIRA.',
      'Oversaw delivery of accessibility compliance work targeting WCAG 2.1 requirements for a major financial-sector client, covering keyboard navigation, screen-reader announcements, and semantic HTML correctness across the reporting module.',
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Wipro Technologies',
    period: 'Aug 2021 - Aug 2023',
    bullets: [
      'Delivered security and stability fixes across the TRIRIGA platform by patching open-source library vulnerabilities, resolving reflected XSS attack vectors, and upgrading the bundled Liberty application server to a current release.',
      'Resolved 10+ customer-reported production defects covering data localisation, unit-of-measure field regressions, OSLC date formatting, report Excel-template rendering, property-tree pagination, BIM Connector warnings, and meeting occurrence count mismatches.',
      'Mentored junior engineers, drove code-review standards, and partnered with architects and product stakeholders to translate business requirements into scalable technical designs.',
    ],
  },
  {
    role: 'Project Engineer',
    company: 'Wipro Limited',
    period: 'Nov 2018 - Aug 2021',
    bullets: [
      'Built and maintained modules for the Integrated Sortation System (ISS), an automated package-sorting platform running across FedEx Ground facilities.',
      'Developed and deployed code-upgrade patches for a high-throughput, mission-critical production system using Git and Maven, gaining hands-on depth in multithreading, JDBC, and SQL query optimization.',
    ],
  },
  {
    role: 'Intern',
    company: 'Hiferk Technologies Pvt. Ltd.',
    period: 'Dec 2017 - Mar 2018',
    bullets: ['Contributed to development of an Online Recruitment System web application, gaining early full stack web development experience.'],
  },
]

export default function Resume() {
  return (
    <section className="resume-section" id="resume" aria-label="Printable resume">
      <header className="resume-header">
        <h1>Viswanadh Ganti</h1>
        <p className="resume-title">Full Stack Developer - Java | Spring Boot | React.js | Cloud (OpenShift/AWS)</p>
        <p>Hyderabad, Telangana, India | +91 7075452889 | viswanadh.ganti@gmail.com</p>
        <p><a href="https://www.linkedin.com/in/viswanadhganti/">linkedin.com/in/viswanadhganti</a></p>
      </header>

      <div className="resume-content">
        <section className="resume-block">
          <h2>Professional Summary</h2>
          <p>
            Full stack engineer with 8 years building enterprise Java systems, including 4+ years
            delivering backend services for IBM&apos;s MREF (formerly TRIRIGA) facilities-management
            platform, and prior experience leading a Java engineering team as Technical Lead at
            Wipro. Strong foundation across Spring Boot, Hibernate, SQL/Oracle, React.js, and
            containerized deployment on OpenShift/AWS, backed by hands-on delivery in Git,
            Maven/Gradle, Jenkins CI/CD, and JIRA-driven Agile teams.
          </p>
        </section>

        <section className="resume-block">
          <h2>Core Skills</h2>
          <p><strong>Languages & Frameworks:</strong> Java, Spring, Spring Boot, Hibernate, React.js, JavaScript</p>
          <p><strong>Cloud & DevOps:</strong> OpenShift, AWS, Docker/Podman, Jenkins, CI/CD, Maven/Gradle, Git</p>
          <p><strong>Data:</strong> SQL, Oracle Database, JDBC, relational data modeling</p>
          <p><strong>Practices & Leadership:</strong> Agile/Scrum, JIRA, sprint planning, code review standards, mentoring, unit testing, TDD, multithreading</p>
          <p><strong>Domain Expertise:</strong> IBM MREF/TRIRIGA, logistics systems, application security (OWASP, XSS remediation)</p>
        </section>

        <section className="resume-block">
          <h2>Professional Experience</h2>
          {resumeExperience.map((item) => (
            <article className="resume-job" key={`${item.company}-${item.role}`}>
              <div className="resume-job-heading">
                <h3>{item.role} - {item.company}</h3>
                <span>{item.period}</span>
              </div>
              <ul>
                {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            </article>
          ))}
        </section>

        <section className="resume-block">
          <h2>Education</h2>
          <p><strong>Bachelor of Technology, Computer Science</strong></p>
          <p>GMR Institute of Technology, 2014 - 2018</p>
        </section>

        <section className="resume-block">
          <h2>Awards & Recognition</h2>
          <p><strong>Manager Appreciation, Thanks@IBM</strong> - Recognized by Niti Dewan in September 2026 for resolving skill cases, backporting fixes, and mentoring team members.</p>
        </section>

        <section className="resume-block">
          <h2>Technical Writing</h2>
          <p>Authored a LinkedIn technical article on IBM MREF Date/DateTime configuration, including an accompanying decision guide graphic for practitioners.</p>
        </section>

        <section className="resume-block">
          <h2>Certifications</h2>
          <p>Generative AI: Introduction and Applications</p>
          <p>2025 IBMer watsonx Challenge</p>
        </section>

        <section className="resume-block">
          <h2>Languages</h2>
          <p>English - Full Professional</p>
          <p>Telugu - Native/Bilingual</p>
          <p>Hindi - Elementary</p>
        </section>
      </div>
    </section>
  )
}
