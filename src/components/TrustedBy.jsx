function TrustedBy() {
  const clients = [
    "FINOVA",
    "LUMA AI",
    "ARC STUDIO",
    "NOURISH",
    "ORBIT",
    "MONO",
  ];

  return (
    <section className="trusted-by">
      <div className="container">
        <p className="trusted-label">Trusted by forward-thinking brands</p>

        <div className="trusted-logos">
          {clients.map((client) => (
            <span key={client} className="trusted-logo">
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedBy;