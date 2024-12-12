import React from "react";

function Services() {
  return (
    <>
      {/* row */}
      <div id="empty"></div>

      <section id="services" className="bg">
        <h2>Services</h2>
        <div className="services-grid">
          <div className="service">
            <div className="icon">
              <ion-icon name="code-working-outline" size="large"></ion-icon>
            </div>
            <h5>WEB DEVELOPMENT</h5>
            <p>
              Building responsive and functional websites using various
              technologies (HTML, CSS, JavaScript, etc.)
            </p>
          </div>
          <div className="service">
            <div className="icon">
              <ion-icon name="book-outline" size="large"></ion-icon>
            </div>
            <h5>TEACHING</h5> <br />
            <p>
              Offering tutoring in university-level IT courses and for
              school-age children.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
