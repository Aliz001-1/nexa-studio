import heroVideo from "../assets/videos/hero-bg.mp4";

function Hero() {
  return (
    <section className="hero">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      <div className="container hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          Independent Digital Studio
        </div>

        <h1>
          We build digital
          <span> experiences </span>
          that matter.
        </h1>

        <p>
          Nexa Studio is a digital agency focused on creating
          thoughtful websites, powerful digital products, and
          memorable brand experiences.
        </p>

        <div className="hero-actions">
          <a href="#work" className="hero-primary">
            Explore Our Work
            <span>↗</span>
          </a>

          <a href="#contact" className="hero-secondary">
            Start a Project
          </a>
        </div>
      </div>

      <div className="hero-scroll">
        <span></span>
        Scroll to explore
      </div>
    </section>
  );
}

export default Hero;