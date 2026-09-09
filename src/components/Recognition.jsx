const recognitions = [
  {
    title: 'Support and client success',
    issuer: 'Dinesh Bhudavaram',
    detail:
      'Thanks for helping Support by managing attention to prioritised skill cases, defects, and their fix deliveries. Non-replicated cases pose a greater challenge for us all, and your supportive nature makes it easy to progress them. Thanks for doing all that you do for our Client Success.',
  },
  {
    title: 'Year-round support',
    issuer: 'Kishore Pyaga',
    detail:
      'Thank you very much for all the support, guidance, and help all over this year. Expecting this to be continued further. Happy new year!',
  },
  {
    title: 'Skill cases, APARs, and security',
    issuer: 'Ashok Janagam',
    detail:
      'Thank you for the great work! You have done a good job on skill cases, APARs, and security defect resolutions in 2025. Special thanks for the strong collaboration and dedicated efforts on XSS mitigation. Keep up the outstanding work!',
  },
  {
    title: 'Customer Engineering',
    issuer: 'Sudhir Kumar Allamshetti',
    detail: 'Thanks for all the good work in 2025, especially the Customer Engineering part. Keep up the good work!',
  },
  {
    title: 'Guidance and support',
    issuer: 'Niti Dewan',
    detail:
      'I hold immense gratitude for the unwavering guidance and support you have provided since my induction into the team. Your patience and eagerness to explain each of my questions have shaped my understanding and fostered a sense of trust and respect. Your commitment to helping me grow has been inspiring.',
  },
  {
    title: 'Project onboarding and collaboration',
    issuer: 'Sunilkumar Tomar',
    detail:
      'I would like to express my appreciation for your dedication and effort in helping me get started with the project, set up the environment, and work through blockers many times. Your contributions have been invaluable in ensuring a smoother and more efficient workflow.',
  },
]

export default function Recognition() {
  return (
    <section className="recognition-section" id="recognition">
      <div className="section-header">
        <h2>Recognition</h2>
        <span>IBM appreciations</span>
      </div>

      {recognitions.map((recognition) => (
        <article className="recognition-entry" key={recognition.issuer}>
          <div>
            <span className="recognition-label">{recognition.issuer}</span>
            <h3>{recognition.title}</h3>
          </div>
          <p>{recognition.detail}</p>
        </article>
      ))}
    </section>
  )
}