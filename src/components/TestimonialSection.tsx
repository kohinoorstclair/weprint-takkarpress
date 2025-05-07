import React, { useState, useEffect } from "react";

const testimonials = [
  {
    text: "Incredible speed and flawless prints. Our go-to printing partner.",
    author: "Aisha R., Brand Manager",
  },
  {
    text: "WePrint helps us hit tight deadlines without sacrificing quality.",
    author: "Raj T., Marketing Lead",
  },
  {
    text: "Their prices are unbeatable and service is top-notch.",
    author: "Priya M., Founder",
  },
];

const TestimonialSection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
        setFade(true); // Start fade-in
      }, 500); // Match with CSS fade duration
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonial-section">
      <div className="container text-center">
        <h2 className="section-heading">What Our Customers Say</h2>
        <div className={`testimonial-card ${fade ? "fade-in" : "fade-out"}`}>
          <p>"{testimonials[current].text}"</p>
          <span>- {testimonials[current].author}</span>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
