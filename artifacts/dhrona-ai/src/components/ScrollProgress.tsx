import React, { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[100] h-[2px] bg-transparent motion-reduce:hidden"
    >
      <div
        className="h-full bg-primary shadow-[0_0_8px_rgba(59,130,246,0.8)]"
        style={{ width: `${progress}%`, transition: 'width 0.05s linear' }}
      />
    </div>
  );
}
