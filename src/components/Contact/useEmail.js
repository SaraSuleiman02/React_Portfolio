import { useState } from "react";
import emailjs from "emailjs-com";

// Initialize EmailJS only once
emailjs.init("xzdofP09CPzGdmKMu");

const useEmail = () => {
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (serviceId, templateId, formData) => {
    setIsSending(true);
    try {
      await emailjs.send(serviceId, templateId, formData);
      setIsSending(false);
      return { success: true, message: "Message sent successfully!" };
    } catch (error) {
      setIsSending(false);
      return { success: false, message: "Failed to send the message. Please try again later." };
    }
  };

  return { sendEmail, isSending };
};

export default useEmail;
