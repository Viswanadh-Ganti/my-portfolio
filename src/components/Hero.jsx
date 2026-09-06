export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-copy">
        <p className="eyebrow">Full Stack Java Developer</p>
        <h1>Building software that powers real business growth.</h1>
        <p>
          I’m Viswanadh Ganti, a Java and React developer focused on creating reliable,
          scalable web applications that blend clean architecture with a polished user
          experience.
        </p>
        <div className="button-row">
          <a href="#projects" className="primary-btn">
            View Projects
          </a>
          <a href="#contact" className="secondary-btn">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-panel" aria-label="Profile card">
        <div className="profile-card">
          <img className="profile-image" src="/vswanadh.jpeg" alt="Viswanadh Ganti" />
        </div>
      </div>
    </section>
  )
}
