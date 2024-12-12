import React from "react";

function Hero() {
  return (
    <section className="bg">
      <div id="hero">
        <div className="img-container">
          <img src="img/Hello.png" alt="Hello, I'm Sara Suleiman" />
        </div>
        <div className="hero-p">
          <p>
            Freelance{" "}
            <span style={{color: '#0077b6', fontWeight: '600'}}>
              full-stack developer{" "}
            </span>
            , passionate about creating simple, user-friendly websites from
            scratch.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
