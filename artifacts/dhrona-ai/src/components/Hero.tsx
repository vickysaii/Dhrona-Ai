import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Headline words with special marker for "YOUR"
const headlineWords = ['We', 'Build', 'AI', 'That', 'Works', 'For', 'YOUR', 'Business'];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -500, y: -500 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const setSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    setSize();

    const ro = new ResizeObserver(setSize);
    ro.observe(canvas);

    const N = 24;
    const particles = Array.from({ length: N }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: 1.5 + Math.random() * 2,
    }));

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    canvas.addEventListener('mousemove', onMouseMove);

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      particles.forEach((p) => {
        // Subtle mouse attraction
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 220 && dist > 0) {
          p.vx += (dx / dist) * 0.004;
          p.vy += (dy / dist) * 0.004;
        }

        // Speed cap
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > 1.2) {
          p.vx = (p.vx / speed) * 1.2;
          p.vy = (p.vy / speed) * 1.2;
        }

        p.vx *= 0.997;
        p.vy *= 0.997;
        p.x += p.vx;
        p.y += p.vy;

        // Wrap
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
      });

      // Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${(1 - d / 150) * 0.22})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      // Nodes
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(59, 130, 246, 0.55)';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r + 5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(59, 130, 246, 0.07)';
        ctx.fill();
      });

      rafRef.current = requestAnimationFrame(draw);
    };
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      ro.disconnect();
      canvas.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center pt-20 overflow-hidden">
      {/* Particle canvas — full hero background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none motion-reduce:hidden"
        style={{ zIndex: 1 }}
      />

      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[130px] pointer-events-none" style={{ zIndex: 0 }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" style={{ zIndex: 0 }} />

      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8 py-12 lg:py-0"
        style={{ position: 'relative', zIndex: 10 }}
      >
        {/* Left Column */}
        <div className="flex-1 text-center lg:text-left">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-secondary mr-2 animate-pulse" />
            AI Solutions for Every Industry
          </motion.div>

          {/* Word-by-word headline */}
          <h1 className="text-[40px] leading-[1.1] sm:text-5xl lg:text-[64px] font-bold tracking-tight mb-6">
            {headlineWords.map((word, i) => (
              <motion.span
                key={word + i}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2 + i * 0.08,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`inline-block mr-[0.22em] ${
                  word === 'YOUR'
                    ? 'text-primary relative'
                    : ''
                }`}
              >
                {word === 'YOUR' ? (
                  <>
                    YOUR
                    <svg
                      className="absolute -bottom-2 left-0 w-full"
                      viewBox="0 0 100 14"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 10 Q 50 0 100 10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            From intelligent chatbots to voice agents and full-scale AI automation — Dhrona AI delivers cutting-edge solutions tailored to Healthcare, Defense, Education, and beyond.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <a
              href="#services"
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground
                         transition-all hover:bg-primary/90 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] active:scale-95 group"
            >
              Explore Our Services
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 text-base font-semibold text-white
                         transition-all hover:bg-white/10 hover:border-white/40"
            >
              Book a Free Consultation
            </a>
          </motion.div>
        </div>

        {/* Right Column — SVG Neural Orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 w-full max-w-lg lg:max-w-none relative aspect-square lg:aspect-auto lg:h-[560px] flex items-center justify-center"
        >
          <div className="relative w-full h-full max-w-md mx-auto animate-float">
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full drop-shadow-[0_0_40px_rgba(59,130,246,0.25)]"
            >
              <defs>
                <radialGradient id="coreGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
                  <stop offset="100%" stopColor="#0D1117" stopOpacity="0.7" />
                </radialGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Animated connection lines */}
              <g stroke="rgba(59,130,246,0.45)" strokeWidth="1.5" fill="none">
                {[
                  ['M200 200 L120 100', '3s'],
                  ['M200 200 L280 100', '4s'],
                  ['M200 200 L100 240', '2.5s'],
                  ['M200 200 L300 240', '3.5s'],
                  ['M200 200 L200 320', '2s'],
                ].map(([d, dur], i) => (
                  <path key={i} d={d as string} strokeDasharray="6 4">
                    <animate
                      attributeName="stroke-dashoffset"
                      from="100"
                      to="0"
                      dur={dur as string}
                      repeatCount="indefinite"
                    />
                  </path>
                ))}
                <path d="M120 100 L280 100" stroke="rgba(6,182,212,0.15)" />
                <path d="M100 240 L200 320" stroke="rgba(6,182,212,0.15)" />
                <path d="M300 240 L200 320" stroke="rgba(6,182,212,0.15)" />
              </g>

              {/* Central pulsing orb */}
              <circle cx="200" cy="200" r="42" fill="url(#coreGrad)" filter="url(#glow)">
                <animate attributeName="r" values="40;44;40" dur="2.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="200" cy="200" r="54" fill="none" stroke="#3B82F6" strokeWidth="1" strokeDasharray="12 6" opacity="0.45">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 200 200"
                  to="360 200 200"
                  dur="12s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Peripheral nodes */}
              <g fill="#0D1117" stroke="#3B82F6" strokeWidth="2">
                <circle cx="120" cy="100" r="15" />
                <circle cx="280" cy="100" r="20" stroke="#06B6D4" />
                <circle cx="100" cy="240" r="18" />
                <circle cx="300" cy="240" r="14" stroke="#06B6D4" />
                <circle cx="200" cy="320" r="22" />
              </g>
              <g fill="#F1F5F9">
                <circle cx="120" cy="100" r="4" />
                <circle cx="280" cy="100" r="6" fill="#06B6D4" />
                <circle cx="100" cy="240" r="5" />
                <circle cx="300" cy="240" r="3" fill="#06B6D4" />
                <circle cx="200" cy="320" r="6" />
              </g>
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Industry ticker */}
      <div
        className="absolute bottom-0 left-0 w-full border-t border-white/5 bg-background/60 backdrop-blur-sm overflow-hidden py-3"
        style={{ zIndex: 10 }}
      >
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="flex gap-8 items-center px-4 font-mono text-sm tracking-widest text-muted-foreground/55 uppercase"
            >
              {['Healthcare','Defense','Education','Salons','Schools','Retail','Finance','Real Estate','Legal','Hospitality'].map((ind) => (
                <React.Fragment key={ind}>
                  <span>{ind}</span>
                  <span className="text-primary/35">•</span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
