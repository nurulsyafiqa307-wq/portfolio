import sertifikatAI from '../assets/img/sertifikat-ai.jpg'

function Certificates() {
  return (
    <section id="certificates" className="section certificates-section">

      <div className="section-heading">
        <p className="section-label">SERTIFIKAT</p>

        <h2>My Certificate</h2>

        <p>
          Sertifikat yang saya dapatkan selama proses belajar
          di bidang teknologi.
        </p>
      </div>

      <div className="certificate-container">

        <div className="certificate-card">

          <img
            src={sertifikatAI}
            alt="Sertifikat Belajar Dasar AI"
          />

          <div className="certificate-content">
            <h3>Belajar Dasar AI</h3>

            <p>Dicoding Indonesia</p>

            <span>
              Diterbitkan 08 Oktober 2025
            </span>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Certificates