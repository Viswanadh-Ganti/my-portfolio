export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-header">
        <h2>Contact</h2>
        <span>Let’s connect</span>
      </div>

      <div className="contact-grid">
        <div className="contact-item">
          <label>Email</label>
          <a href="mailto:viswanadh.ganti@outlook.com">viswanadh.ganti@outlook.com</a>
        </div>
        <div className="contact-item">
          <label>Phone</label>
          <a href="tel:+917075452889">+91 7075452889</a>
        </div>
        <div className="contact-item">
          <label>Location</label>
          <span>Hyderabad, India</span>
        </div>
      </div>
    </section>
  )
}
