import processVisual from "../assets/images/process/process-visual.jpg";

function Process() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      description:
        "We understand your goals, audience, challenges, and the opportunity behind the project.",
    },
    {
      number: "02",
      title: "Design",
      description:
        "We turn ideas into clear visual systems, intuitive experiences, and purposeful interfaces.",
    },
    {
      number: "03",
      title: "Build",
      description:
        "We develop the experience with clean, responsive, and reliable technology.",
    },
    {
      number: "04",
      title: "Launch",
      description:
        "We refine, test, and prepare everything for a confident launch into the real world.",
    },
  ];

  return (
    <section className="process section" id="process">
      <div className="container">

        {/* Header */}
        <div className="process-header">
          <div>
            <span className="section-label">How We Work</span>

            <h2 className="section-title">
              From idea
              <br />
              <span>to impact.</span>
            </h2>
          </div>

          <p className="section-description">
            A focused process designed to keep every project thoughtful,
            collaborative, and moving in the right direction.
          </p>
        </div>

        {/* Visual */}
        <div className="process-visual-wrapper">
          <img
            src={processVisual}
            alt="Nexa Studio creative process"
            className="process-visual"
          />
        </div>

        {/* Steps */}
        <div className="process-steps">
          {steps.map((step) => (
            <article className="process-step" key={step.number}>
              <span className="process-number">{step.number}</span>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Process;