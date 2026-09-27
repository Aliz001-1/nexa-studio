import webDesign from "../assets/images/services/web-design.jpg";
import webDevelopment from "../assets/images/services/web-development.jpg";
import branding from "../assets/images/services/branding.jpg";
import digitalStrategy from "../assets/images/services/digital-strategy.jpg";

function Services() {
  const services = [
    {
      number: "01",
      title: "Web Design",
      description:
        "Thoughtful interfaces designed to look distinctive, feel intuitive, and turn visitors into customers.",
      image: webDesign,
    },
    {
      number: "02",
      title: "Web Development",
      description:
        "Fast, responsive, and scalable digital experiences built with modern technologies and clean architecture.",
      image: webDevelopment,
    },
    {
      number: "03",
      title: "Branding & Creative",
      description:
        "Distinctive visual identities that give brands a clear voice, memorable presence, and consistent direction.",
      image: branding,
    },
    {
      number: "04",
      title: "Digital Strategy",
      description:
        "Clear digital thinking that connects business goals, user needs, creative direction, and measurable growth.",
      image: digitalStrategy,
    },
  ];

  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="services-heading">
          <div>
            <span className="section-label">What we do</span>

            <h2 className="section-title">
              Strategy, creativity,
              <br />
              and technology.
            </h2>
          </div>

          <p className="section-description">
            We combine thoughtful design with modern technology to create
            digital experiences that are useful, distinctive, and built to
            perform.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-card-top">
                <span className="service-number">{service.number}</span>

                <span className="service-arrow">↗</span>
              </div>

              <div className="service-visual">
                <img
                  src={service.image}
                  alt=""
                  loading="lazy"
                />
              </div>

              <div className="service-content">
                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;