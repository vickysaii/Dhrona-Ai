import React from 'react';
import { Linkedin, Github, Instagram, Twitter } from 'lucide-react';

const LogoMark = () => (
  <div className="flex items-center gap-2.5">
    <img
      src="/logo-new.png"
      alt="Dhrona AI"
      className="h-9 w-9 object-contain drop-shadow-[0_0_6px_rgba(245,158,11,0.45)]"
      draggable={false}
    />
    <div className="flex flex-col leading-none">
      <div className="flex items-baseline gap-0.5">
        <span className="font-display font-bold text-lg tracking-tight text-white">DHRONA</span>
        <span className="font-display font-bold text-lg text-primary ml-1">AI</span>
      </div>
      <span className="text-[8px] uppercase tracking-[0.18em] text-secondary/70 font-semibold mt-0.5">
        Architects of Intelligence
      </span>
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
