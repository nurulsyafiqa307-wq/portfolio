function Contact() {
  return (
    <section id="contact" className="section contact-section">

      <div className="section-heading">
        <p className="section-label">KONTAK</p>

        <h2>Contact Me</h2>

        <p>
          Tertarik untuk bekerja sama atau ingin menghubungi saya?
          Silakan hubungi saya melalui kontak berikut.
        </p>
      </div>

      <div className="contact-container">

        <div className="contact-card">
          <div className="contact-icon">
            ✉
          </div>

          <div>
            <span>Email</span>

            <a href="mailto:nurulsyafiqaramadhan@gmail.com">
              nurulsyafiqaramadhan@gmail.com
            </a>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-icon">
            GH
          </div>

          <div>
            <span>GitHub</span>

            <a
              href="https://github.com/nurulsyafiqa307-wq"
              target="_blank"
              rel="noreferrer"
            >
              github.com/nurulsyafiqa307-wq
            </a>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Contact