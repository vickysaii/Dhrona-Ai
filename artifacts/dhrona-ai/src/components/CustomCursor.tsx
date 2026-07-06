import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -200, y: -200 });
  const ringPos = useRef({ x: -200, y: -200 });
  const hasEntered = useRef(false);
  const rafRef = useRef<number>(0);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    // Only activate on devices with a real pointer (not touch) and large screens
    if (window.matchMedia('(hover: none)').matches) return;

    // Inject scoped CSS that hides the native cursor only on lg+ screens
    const styleEl = document.createElement('style');
    styleEl.textContent =
      '@media (min-width: 1024px) and (hover: hover) { *, *::before, *::after { cursor: none !important; } }';
    document.head.appendChild(styleEl);

    const onMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!hasEntered.current) {
        hasEntered.current = true;
        ringPos.current = { x: e.clientX, y: e.clientY };
        setVisible(true);
      }
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(!!t.closest('a, button, [role="button"], input, select, textarea'));
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);

    const tick = () => {
      // LERP ring toward mouse
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mousePos.current.x}px, ${mousePos.current.y}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      document.head.removeChild(styleEl);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Instant dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block motion-reduce:hidden"
        style={{ willChange: 'transform', marginLeft: '-4px', marginTop: '-4px' }}
      >
        <div
          className={`rounded-full bg-primary transition-all duration-150 ${
            hovering ? 'w-3 h-3' : 'w-2 h-2'
          }`}
        />
      </div>

      {/* Lagged ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-[9998] hidden lg:block motion-reduce:hidden"
        style={{ willChange: 'transform', marginLeft: '-16px', marginTop: '-16px' }}
      >
        <div
          className={`rounded-full border border-primary/60 transition-all duration-200 ${
            hovering ? 'w-10 h-10 bg-primary/10 border-primary/80' : 'w-8 h-8'
          }`}
        />
      </div>
    </>
  );
}
