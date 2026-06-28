import { useState, useEffect } from 'react';

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function toggleVisibility() {
      setIsVisible(window.scrollY > 300);
    }

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      className={`scroll-to-top ${isVisible ? 'scroll-to-top--visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      aria-hidden={!isVisible}
    >
      <i className="fa-solid fa-arrow-up" />
    </button>
  );
}
