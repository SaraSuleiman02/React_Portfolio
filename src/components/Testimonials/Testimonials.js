import React, { useState, useEffect } from "react";
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  // State to track the active testimonial index
  const [activeIndex, setActiveIndex] = useState(0);

  // List of testimonials to iterate through
  const testimonials = [
    {
      img: "/img/jana.jfif",
      imgAlt: "Jana",
      testi:
        "Sara is a dependable team worker, supportive, always willing to help others, and performs well and on time under pressure at work.",
      name: "Jana Al-Massaeed",
    },
    {
      img: "/img/leen.jpeg",
      imgAlt: "Leen",
      testi:
        "Sara is a highly dependable team member with strong leadership qualities. She takes full ownership of her work, manages pressure effectively, and quickly learns new topics. She maintains a clear distinction between work time and fun time, ensuring productivity while fostering a positive team environment. Additionally, she communicates important information clearly to the entire team.",
      name: "Leen Soudi",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 10000); // Change every 10 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testi" className="bg2">
      <h2>Testimonials</h2>
      <div className="testi-grid">
        {/* Apply the flip effect to the active testimonial */}
        <div className={`testimonial-container`}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              img={testimonial.img}
              imgAlt={testimonial.imgAlt}
              testi={testimonial.testi}
              name={testimonial.name}
              className={index === activeIndex ? "active" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;