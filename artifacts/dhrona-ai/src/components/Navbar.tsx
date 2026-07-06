import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Logo = () => (
  <div className="flex items-center gap-2 z-50 relative">
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 4L18 4C23.5228 4 28 8.47715 28 14V18C28 23.5228 23.5228 28 18 28L8 28V4Z" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="8" cy="4" r="2" fill="#3B82F6"/>
      <circle cx="18" cy="4" r="2" fill="#3B82F6"/>
      <circle cx="28" cy="14" r="2" fill="#3B82F6"/>
      <circle cx="28" cy="18" r="2" fill="#3B82F6"/>
      <circle cx="18" cy="28" r="2" fill="#3B82F6"/>
      <circle cx="8" cy="28" r="2" fill="#3B82F6"/>
      <circle cx="8" cy="16" r="2" fill="#3B82F6"/>
      <line x1="8" y1="4" x2="18" y2="4" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="2 2"/>
      <line x1="18" y1="4" x2="28" y2="14" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="2 2"/>
      <line x1="28" y1="14" x2="28" y2="18" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="2 2"/>
      <line x1="28" y1="18" x2="18" y2="28" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="2 2"/>
      <line x1="18" y1="28" x2="8" y2="28" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="2 2"/>
      <line x1="8" y1="4" x2="8" y2="16" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="2 2"/>
      <line x1="8" y1="16" x2="8" y2="28" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="2 2"/>
      <line x1="8" y1="16" x2="18" y2="16" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="2 2"/>
      <circle cx="18" cy="16" r="2" fill="#3B82F6"/>
    </svg>
    <div className="flex flex-col">
      <div className="flex items-baseline gap-1">
        <span className="font-display font-bold text-xl tracking-tight text-foreground">DHRONA</span>
        <span className="font-display font-semibold text-lg text-foreground">A<span className="text-accent">i</span></span>
      </div>
      <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold leading-none -mt-0.5">AI Agency</span>
    </div>
  </div>
);

const NavLinks = ({ onClick }: { onClick?: () => void }) => {
  const links = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Why Dhrona AI', href: '#why' },
    { name: 'Tech Stack', href: '#tech' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          onClick={onClick}
          className="text-muted-foreground hover:text-foreground font-medium text-sm transition-colors"
        >
          {link.name}
        </a>
      ))}
    </>
  );
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLinks />
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring animate-pulse-ring hover:scale-105"
          >
            Book a Free Call
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 p-2 -mr-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-6 text-lg">
              <NavLinks onClick={() => setMobileMenuOpen(false)} />
            </nav>
            <div className="mt-8 pt-8 border-t border-white/10">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Book a Free Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
