import React from 'react';
import { Linkedin, Github, Instagram, Twitter } from 'lucide-react';

const LogoMark = () => (
  <div className="flex items-center gap-2">
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    <div className="flex items-baseline gap-1">
      <span className="font-display font-bold text-lg tracking-tight text-white">DHRONA</span>
      <span className="font-display font-semibold text-base text-white">A<span className="text-accent">i</span></span>
    </div>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-[#050508] border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
            <LogoMark />
            <p className="text-muted-foreground text-sm font-medium">
              Intelligent AI. Real Results.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Home</a>
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#why" className="hover:text-primary transition-colors">Why Us</a>
            <a href="#tech" className="hover:text-primary transition-colors">Tech Stack</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all">
              <Github className="w-5 h-5" />
            </a>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground text-center">
          <p>© {new Date().getFullYear()} Dhrona AI. All rights reserved.</p>
          <p>Built with ❤️ in Hyderabad, India</p>
        </div>
      </div>
    </footer>
  );
}
