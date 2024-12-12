import React from "react";

function Footer() {
  return (
    <footer>
      <div id="footer">
        <div className="left-footer">
          <h2>Who am I ?</h2>
          <h3>I'm Sara Suleiman</h3>
          <p>
            Self-taught developer based in Amman, Jordan. I’m a hard-working
            full stack developer with a strong foundation in web development.{" "}
            <br /> I’m passionate about creating simple, user-friendly websites
            from scratch, always eager to learn new techniques, and thrive in
            deadline-driven, bilingual environments.
          </p>
        </div>

        <div className="right-footer">
          <h2>Contact ME!</h2>
          <div className="contact">
            <div className="email-phone">
              <p>
                <i className="fa-regular fa-envelope fa-xl"></i>
                &nbsp; sarasuleiman1234@gmail.com
                <br />
                <i className="fa-solid fa-phone fa-xl"></i>
                &nbsp; +962795894363
              </p>
            </div>
            <div className="social">
              <div>
                <a
                  href="https://www.linkedin.com/in/sara-suleiman-b3aa9b280/"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin fa-xl"></i>
                </a>
              </div>
              <div>
                <a href="https://github.com/SaraSuleiman02" target="_blank">
                  <i className="fa-brands fa-github fa-xl"></i>
                </a>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/_sarasleman?igsh=MXJxcm5xdnQ5Mnhhcg=="
                  target="_blank"
                >
                  <i className="fa-brands fa-instagram fa-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
