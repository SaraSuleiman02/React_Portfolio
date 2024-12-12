// useScrollToTop.js
import { useEffect } from "react";

function useScrollToTop() {
  useEffect(() => {
    const handleHashChange = () => {
      const targetId = window.location.hash; // Get the target section id from the URL hash
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop, // Scroll to the target section
          behavior: "smooth", // Smooth scrolling
        });
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    // Scroll to the section immediately if the page loads with a hash in the URL
    if (window.location.hash) {
      handleHashChange();
    }

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
}

export default useScrollToTop;