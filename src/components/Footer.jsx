function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <span className="footer-logo-mark">N</span>
              <span>Nexa Studio</span>
            </a>

            <p>
              Independent digital studio creating thoughtful websites,
              products, and brand experiences.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <span className="footer-heading">Explore</span>

              <a href="#work">Work</a>
              <a href="#services">Services</a>
              <a href="#about">About</a>
              <a href="#process">Process</a>
            </div>

            <div className="footer-column">
              <span className="footer-heading">Connect</span>

              <a href="mailto:hello@nexastudio.com">
                Email
              </a>

              <a href="#" target="_blank" rel="noreferrer">
                Instagram
              </a>

              <a href="#" target="_blank" rel="noreferrer">
                LinkedIn
              </a>

              <a href="#" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {currentYear} Nexa Studio. All rights reserved.
          </span>

          <span>Built with intention.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;