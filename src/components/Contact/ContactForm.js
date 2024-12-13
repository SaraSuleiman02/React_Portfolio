import React, { useState } from "react";
import Swal from 'sweetalert2';
import useEmail from "./useEmail";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { sendEmail, isSending } = useEmail();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await sendEmail("service_a56k7hh", "template_m4jgsiq", formData);

    if (response.success) {
      Swal.fire({
        title: "Success!",
        text: response.message,
        icon: "success",
        showCloseButton: true,
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      Swal.fire({
        title: "Error!",
        text: response.message,
        icon: "error",
        showCloseButton: true,
      });
    }
  };

  return (
    <div className="bg">
      <h2 style={{ textAlign: "center", marginBottom: "20px", paddingTop: "20px" }}>Contact ME!</h2>
      <div className="contact-form-container">
        <div className="contact-info">
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <p>
              <strong>Address</strong>
              <br />
              Amman, Jordan
            </p>
          </div>
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <p>
              <strong>Call Me</strong>
              <br />
              +962 795894363
            </p>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <p>
              <strong>Email Me</strong>
              <br />
              sarasuleiman1234@gmail.com
            </p>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="send-message-btn" disabled={isSending}>
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
