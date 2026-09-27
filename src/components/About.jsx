import aboutVisual from "../assets/images/about/about-visual.jpg";

function About() {
  const stats = [
    {
      number: "20+",
      label: "Digital Projects",
    },
    {
      number: "12",
      label: "Brands Supported",
    },
    {
      number: "4+",
      label: "Years of Craft",
    },
  ];

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-grid">

          {/* Visual */}
          <div className="about-visual-wrapper">
            <img
              src={aboutVisual}
              alt="Nexa Studio creative workspace"
              className="about-visual"
            />

            <div className="about-visual-label">
              <span className="about-dot"></span>
              Independent Digital Studio
            </div>
          </div>

          {/* Content */}
          <div className="about-content">
            <span className="section-label">About Nexa</span>

            <h2 className="section-title">
              Small studio.
              <br />
              <span>Big thinking.</span>
            </h2>

            <p className="about-intro">
              Nexa Studio is an independent digital studio focused on
              creating thoughtful websites, digital products, and brand
              experiences for ambitious businesses.
            </p>

            <p className="about-text">
              We believe great digital work should do more than look good.
              It should communicate clearly, feel effortless to use, and
              create a lasting impression.
            </p>

            {/* Stats */}
            <div className="about-stats">
              {stats.map((stat) => (
                <div className="about-stat" key={stat.label}>
                  <strong>{stat.number}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;