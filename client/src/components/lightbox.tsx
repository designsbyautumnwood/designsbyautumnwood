import { useEffect } from "react";

export default function Lightbox() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        const lightbox = document.getElementById('lightbox');
        if (lightbox && !lightbox.classList.contains('hidden')) {
          lightbox.classList.add('hidden');
          lightbox.classList.remove('flex');
          document.body.style.overflow = '';
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return null; // This component is handled by the portfolio component
}
