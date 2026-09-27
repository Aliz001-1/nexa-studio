import ctaVideo from "../assets/videos/cta-bg.mp4";

function CTA() {
  return (
    <section className="cta section" id="contact">
      <div className="container">
        <div className="cta-wrapper">
          <video
            className="cta-video"
            src={ctaVideo}
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          />

          <div className="cta-overlay"></div>

          <div className="cta-content">
            <span className="section-label">Have a project in mind?</span>

            <h2>
              Let's build something
              <br />
              <span>worth remembering.</span>
            </h2>

            <p>
              Tell us about your idea, challenge, or ambition.
              We would love to explore what we can create together.
            </p>

            <a href="mailto:hello@nexastudio.com" className="cta-button">
              Start a Project
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;