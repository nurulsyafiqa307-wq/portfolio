import projectInventaris from '../assets/img/project-inventaris.png'
import projectSekolah from '../assets/img/project-sekolah.jpeg'
import projectPkl from '../assets/img/project-pkl.png'

function Projects() {
  const projects = [
    {
      title: "Website Inventaris Labor",
      description:
        "Website untuk mengelola dan mencatat data inventaris laboratorium.",
      tech: "Laravel • PHP • MySQL",
      image: projectInventaris,
      link: "https://github.com/nurulsyafiqa307-wq/inventaris"
    },
    {
      title: "Website Sekolah",
      description:
        "Website sekolah dengan tampilan informatif dan interaktif.",
      tech: "Laravel • PHP • MySQL",
      image: projectSekolah,
      link: "https://github.com/nurulsyafiqa307-wq/web-sekolah"
    },
    {
      title: "Sistem Informasi PKL",
      description:
        "Sistem informasi untuk mengelola data dan proses Praktik Kerja Lapangan.",
      tech: "Laravel • PHP • MySQL",
      image: projectPkl,
      link: "https://pkl.tefa-bcs.org"
    }
  ]

  return (
    <section id="projects" className="section projects-section">
      <div className="section-heading">
        <p className="section-label">PROJECT SAYA</p>

        <h2>My Projects</h2>

        <p>
          Beberapa project yang pernah saya buat selama
          belajar web development.
        </p>
      </div>

      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>

            <div className="project-image">
              <img
                src={project.image}
                alt={project.title}
              />
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <span className="project-tech">
                {project.tech}
              </span>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                Lihat Project →
              </a>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects