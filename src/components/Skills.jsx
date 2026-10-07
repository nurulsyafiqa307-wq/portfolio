function Skills() {
  const skills = [
    {
      name: "HTML",
      icon: "devicon-html5-plain",
      description: "Membangun struktur dasar halaman website."
    },
    {
      name: "CSS",
      icon: "devicon-css3-plain",
      description: "Membuat tampilan website yang menarik dan responsif."
    },
    {
      name: "JavaScript",
      icon: "devicon-javascript-plain",
      description: "Menambahkan interaksi dan fungsi pada website."
    },
    {
      name: "PHP",
      icon: "devicon-php-plain",
      description: "Mengembangkan fitur dan sistem berbasis web."
    },
    {
      name: "MySQL",
      icon: "devicon-mysql-plain",
      description: "Mengelola database untuk aplikasi berbasis web."
    },
    {
      name: "Laravel",
      icon: "devicon-laravel-plain",
      description: "Membangun aplikasi web menggunakan framework Laravel."
    },
    {
      name: "Git & GitHub",
      icon: "devicon-github-original",
      description: "Mengelola project menggunakan version control."
    }
  ]

  return (
    <section id="skills" className="section skills-section">

      <div className="section-heading">
        <p className="section-label">KEMAMPUAN</p>

        <h2>My Skills</h2>

        <p>
          Teknologi dan tools yang saya pelajari
          dalam proses pengembangan website.
        </p>
      </div>

      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>

            <div className="skill-icon">
              <i className={skill.icon}></i>
            </div>

            <h3>{skill.name}</h3>

            <p>{skill.description}</p>

          </div>
        ))}
      </div>

    </section>
  )
}

export default Skills