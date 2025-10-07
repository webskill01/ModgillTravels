// components/BackToTopButton.jsx
'use client';

export default function BackToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="text-center mt-12">
      <button
        onClick={scrollToTop}
        className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded px-4 py-2"
        aria-label="Scroll back to top"
      >
        ↑ Back to Top
      </button>
    </div>
  );
}
