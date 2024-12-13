import React from "react";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <>
      {/* row */}
      <div id="empty"></div>

      <section id="services" className="bg">
        <h2>Services</h2>
        <div className="services-grid">
          <ServiceCard
            icon="code-working-outline"
            title="WEB DEVELOPMENT"
            description="Building responsive and functional websites using various technologies
            (HTML, CSS, JavaScript, etc.)"
          />

          <ServiceCard
            icon="book-outline"
            title="TEACHING"
            description="Offering tutoring in university-level IT courses and for
              school-age children."
          />
        </div>
      </section>
    </>
  );
}

export default Services;
