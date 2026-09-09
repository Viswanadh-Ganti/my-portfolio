export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-copy">
        <p className="eyebrow">Java engineer · Hyderabad, Telangana, India</p>
        <h1>Enterprise software, built to hold up.</h1>
        <p>
          I&apos;m Viswanadh Ganti, a full stack Java developer with 8 years of experience
          building enterprise systems, including 4+ years delivering backend services for IBM&apos;s
          MREF platform and prior technical leadership in Java engineering teams.
        </p>
        <div className="button-row">
          <a href="#experience" className="primary-btn">
            Explore experience
          </a>
          <a href="#contact" className="secondary-btn">
            Start a conversation
          </a>
        </div>
        <dl className="hero-facts" aria-label="Professional highlights">
          <div><dt>8</dt><dd>years in Java engineering</dd></div>
          <div><dt>IBM</dt><dd>MREF / TRIRIGA platform</dd></div>
          <div><dt>FedEx</dt><dd>high-throughput logistics systems</dd></div>
        </dl>
      </div>

      <div className="hero-panel" aria-label="Profile card">
        <div className="profile-card">
            <picture>
              <source srcSet="/vswanadh.webp" type="image/webp" />
              <img className="profile-image" src="/vswanadh.jpeg" alt="Viswanadh Ganti" />
            </picture>
        </div>
        <p className="profile-caption">Currently building backend services at IBM.</p>
      </div>
    </section>
  )
}
