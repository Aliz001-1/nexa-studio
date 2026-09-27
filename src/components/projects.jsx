import { useState } from "react";
import projects from "../data/projects";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Web Design",
    "Development",
    "Branding",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="projects section" id="work">
      <div className="container">

        {/* Section Header */}
        <div className="projects-header">
          <div>
            <span className="section-label">Selected Work</span>

            <h2 className="section-title">
              Digital work with
              <br />
              <span>purpose.</span>
            </h2>
          </div>

          <p className="section-description">
            A selection of digital experiences, brands, and products
            designed and developed with clarity, character, and intention.
          </p>
        </div>

        {/* Filters */}
        <div className="project-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`project-filter ${
                activeFilter === filter ? "active" : ""
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <article
              className={`project-card ${
                index === 0 ? "project-card-large" : ""
              }`}
              key={project.id}
            >
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={`${project.title} project`}
                  className="project-image"
                />

                <div className="project-overlay">
                  <span>View Project</span>
                  <span className="project-arrow">↗</span>
                </div>
              </div>

              <div className="project-info">
                <div>
                  <span className="project-type">
                    {project.type}
                  </span>

                  <h3>{project.title}</h3>
                </div>

                <span className="project-category">
                  {project.category}
                </span>
              </div>

              <p className="project-description">
                {project.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;