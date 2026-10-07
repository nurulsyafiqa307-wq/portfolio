function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-heading">
        <p className="section-label">TENTANG SAYA</p>
        <h2>About Me</h2>
        <p>
          Sedikit tentang saya dan hal-hal yang sedang saya pelajari
          di bidang teknologi.
        </p>
      </div>

      <div className="about-content">

        <div className="about-text">
          <h3>Hai, saya Ika! </h3>

          <p>
            Saya adalah siswa jurusan Pengembangan Perangkat Lunak
            dan Gim (PPLG) yang memiliki ketertarikan dalam bidang
            pemrograman dan pengembangan website.
          </p>

          <p>
            Saya senang mempelajari teknologi baru, membuat berbagai
            project, dan terus mengembangkan kemampuan saya melalui
            proses belajar.
          </p>

          <p>
            Saat ini saya sedang mengembangkan kemampuan di bidang
            web development dan mempersiapkan diri untuk mendapatkan
            pengalaman melalui kegiatan PKL.
          </p>
        </div>

        <div className="about-info">

          <div className="info-box">
            <span>Jurusan</span>
            <strong>PPLG</strong>
          </div>

          <div className="info-box">
            <span>Fokus</span>
            <strong>Backend Development</strong>
          </div>

          <div className="info-box">
            <span>Status</span>
            <strong>Pelajar</strong>
          </div>

          <div className="info-box">
            <span>Minat</span>
            <strong>Programming</strong>
          </div>

        </div>

      </div>
    </section>
  )
}

export default About