import { useState } from "react";

import maya from "../assets/images/testimonials/maya.jpg";
import daniel from "../assets/images/testimonials/daniel.jpg";
import sofia from "../assets/images/testimonials/sofia.jpg";
import ahmed from "../assets/images/testimonials/ahmed.jpg";

function Testimonials() {
  const testimonials = [
    {
      quote:
        "Nexa understood what we wanted before we could even fully explain it. The final experience feels refined, intentional, and incredibly easy to use.",
      name: "Maya Carter",
      role: "Creative Director, Finova",
      image: maya,
    },
    {
      quote:
        "The team brought structure to a complicated product and turned it into something our customers immediately understood. The attention to detail was exceptional.",
      name: "Daniel Brooks",
      role: "Founder, Luma AI",
      image: daniel,
    },
    {
      quote:
        "What stood out most was the balance between strategy and creativity. Every design decision had a clear purpose behind it.",
      name: "Sofia Bennett",
      role: "Marketing Strategist, Nourish",
      image: sofia,
    },
    {
      quote:
        "From the first conversation to launch, the process felt focused and collaborative. We ended up with a digital presence that genuinely represents our brand.",
      name: "Ahmed Rahman",
      role: "Founder, Orbit",
      image: ahmed,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const activeTestimonial = testimonials[activeIndex];

  const nextTestimonial = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const previousTestimonial = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  return (
    <section className="testimonials section">
      <div className="container">
        <div className="testimonials-header">
          <span className="section-label">Client Perspective</span>

          <h2 className="section-title">
            Good work speaks
            <br />
            <span>for itself.</span>
          </h2>
        </div>

        <div className="testimonial-slider">
          <div className="testimonial-content">
            <span className="testimonial-mark">“</span>

            <blockquote>{activeTestimonial.quote}</blockquote>

            <div className="testimonial-person">
              <img
                src={activeTestimonial.image}
                alt={activeTestimonial.name}
              />

              <div>
                <strong>{activeTestimonial.name}</strong>
                <span>{activeTestimonial.role}</span>
              </div>
            </div>
          </div>

          <div className="testimonial-controls">
            <div className="testimonial-count">
              <span>
                {String(activeIndex + 1).padStart(2, "0")}
              </span>

              <span className="testimonial-count-line"></span>

              <span>
                {String(testimonials.length).padStart(2, "0")}
              </span>
            </div>

            <div className="testimonial-buttons">
              <button
                type="button"
                onClick={previousTestimonial}
                aria-label="Previous testimonial"
              >
                ←
              </button>

              <button
                type="button"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>
          </div>
        </div>

        <div className="testimonial-dots">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              className={`testimonial-dot ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;