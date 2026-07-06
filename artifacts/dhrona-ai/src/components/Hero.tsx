import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center pt-20 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8 py-12 lg:py-0">
        
        {/* Left Column - Content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-secondary mr-2 animate-pulse"></span>
            AI Solutions for Every Industry
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[40px] leading-[1.1] sm:text-5xl lg:text-[64px] font-bold tracking-tight mb-6"
          >
            We Build AI That Works For <span className="text-primary relative inline-block">
              YOUR
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0 15 Q 50 0 100 15" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span> Business
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            From intelligent chatbots to voice agents and full-scale AI automation — Dhrona AI delivers cutting-edge solutions tailored to Healthcare, Defense, Education, and beyond.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <a
              href="#services"
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 group"
            >
              Explore Our Services
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 text-base font-semibold text-white transition-all hover:bg-white/10 hover:border-white/40"
            >
              Book a Free Consultation
            </a>
          </motion.div>
        </div>

        {/* Right Column - Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex-1 w-full max-w-lg lg:max-w-none relative aspect-square lg:aspect-auto lg:h-[600px] flex items-center justify-center"
        >
          {/* Abstract AI Visualization */}
          <div className="relative w-full h-full max-w-md mx-auto animate-float">
            <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">
              {/* Connections */}
              <g stroke="rgba(59, 130, 246, 0.4)" strokeWidth="1.5" fill="none">
                <path d="M200 200 L120 100" strokeDasharray="4 4">
                  <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" repeatCount="indefinite" />
                </path>
                <path d="M200 200 L280 100" strokeDasharray="4 4">
                  <animate attributeName="stroke-dashoffset" from="100" to="0" dur="4s" repeatCount="indefinite" />
                </path>
                <path d="M200 200 L100 240" strokeDasharray="4 4">
                  <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2.5s" repeatCount="indefinite" />
                </path>
                <path d="M200 200 L300 240" strokeDasharray="4 4">
                  <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3.5s" repeatCount="indefinite" />
                </path>
                <path d="M200 200 L200 320" strokeDasharray="4 4">
                  <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" repeatCount="indefinite" />
                </path>
                <path d="M120 100 L280 100" stroke="rgba(6, 182, 212, 0.2)" />
                <path d="M100 240 L200 320" stroke="rgba(6, 182, 212, 0.2)" />
                <path d="M300 240 L200 320" stroke="rgba(6, 182, 212, 0.2)" />
              </g>

              {/* Central Node */}
              <circle cx="200" cy="200" r="40" fill="url(#coreGradient)">
                <animate attributeName="r" values="38;42;38" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="200" cy="200" r="50" fill="none" stroke="#3B82F6" strokeWidth="1" strokeDasharray="10 5" opacity="0.5">
                <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="10s" repeatCount="indefinite" />
              </circle>

              {/* Peripheral Nodes */}
              <g fill="#0D1117" stroke="#3B82F6" strokeWidth="2">
                <circle cx="120" cy="100" r="15" />
                <circle cx="280" cy="100" r="20" stroke="#06B6D4" />
                <circle cx="100" cy="240" r="18" />
                <circle cx="300" cy="240" r="14" stroke="#06B6D4" />
                <circle cx="200" cy="320" r="22" />
              </g>

              {/* Inner Node Details */}
              <g fill="#F1F5F9">
                <circle cx="120" cy="100" r="4" />
                <circle cx="280" cy="100" r="6" fill="#06B6D4" />
                <circle cx="100" cy="240" r="5" />
                <circle cx="300" cy="240" r="3" fill="#06B6D4" />
                <circle cx="200" cy="320" r="6" />
              </g>

              <defs>
                <radialGradient id="coreGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
                  <stop offset="100%" stopColor="#0D1117" stopOpacity="0.8" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Marquee Ticker */}
      <div className="absolute bottom-0 left-0 w-full border-t border-white/5 bg-background/50 backdrop-blur-sm overflow-hidden py-3">
        <div className="flex whitespace-nowrap animate-marquee">
          {/* Double the content for seamless looping */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-8 items-center px-4 font-mono text-sm tracking-wider text-muted-foreground/60 uppercase">
              <span>Healthcare</span>
              <span className="text-primary/40">•</span>
              <span>Defense</span>
              <span className="text-primary/40">•</span>
              <span>Education</span>
              <span className="text-primary/40">•</span>
              <span>Salons</span>
              <span className="text-primary/40">•</span>
              <span>Schools</span>
              <span className="text-primary/40">•</span>
              <span>Retail</span>
              <span className="text-primary/40">•</span>
              <span>Finance</span>
              <span className="text-primary/40">•</span>
              <span>Real Estate</span>
              <span className="text-primary/40">•</span>
              <span>Legal</span>
              <span className="text-primary/40">•</span>
              <span>Hospitality</span>
              <span className="text-primary/40">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
