import React from "react";

function Testimonials() {
  return (
    <section id="testi" className="bg2">
      <h1>Testimonials</h1>
      <div className="testi-grid">
        <div className="testimonial">
          <img src="/img/jana.jfif" alt="Jana" height="100px" />

          <p>
            <q>
              Sara is a dependable team worker, supportive, always willing to
              help others, and performs well and on time under pressure at work.
            </q>
            <br />
            <span className="name">Jana Al-Massaeed</span>
          </p>
        </div>

        <div className="testimonial">
          <img src="/img/leen.jpeg" alt="Jana" height="100px" />

          <p>
            <q>
              Sara is a highly dependable team member with strong leadership
              qualities. She takes full ownership of her work, manages pressure
              effectively, and quickly learns new topics. She maintains a clear
              distinction between work time and fun time, ensuring productivity
              while fostering a positive team environment. Additionally, she
              communicates important information clearly to the entire team.
            </q>
            <br />
            <span className="name">Leen Soudi</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
