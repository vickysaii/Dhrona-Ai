import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CaseStudy {
  border: string;
  glow: string;
  tag: string;
  title: string;
  problem: string;
  solution: string;
  result: string;
  tags: string[];
}

const cases: CaseStudy[] = [
  {
    border: 'border-t-primary',
    glow: 'hover:shadow-[0_0_24px_rgba(59,130,246,0.15)]',
    tag: '🏥 Healthcare',
    title: 'AI Patient Query Chatbot for a Multi-Specialty Clinic',
    problem:
      'Staff were overwhelmed handling 200+ repetitive patient queries daily via phone and WhatsApp — appointment timings, doctor availability, prescription info.',
    solution:
      'Built a RAG-powered chatbot trained on the clinic\'s own data, deployed on WhatsApp and the clinic website. Integrated with their appointment system.',
    result:
      '300+ queries handled per day autonomously. 80% reduction in front-desk call volume. Zero additional staff hired.',
    tags: ['RAG Chatbot', 'WhatsApp Automation', 'FastAPI', 'pgvector'],
  },
  {
    border: 'border-t-secondary',
    glow: 'hover:shadow-[0_0_24px_rgba(245,158,11,0.15)]',
    tag: '🛡️ Defense',
    title: 'Computer Vision Driver Monitoring System — MCEME, Indian Army',
    problem:
      'Manual driver fitness assessment was inconsistent and time-consuming across high-stakes military vehicle operations.',
    solution:
      'Built a real-time Driver Monitoring System using computer vision, YOLOv8 pose estimation, and OAK-D depth camera to detect drowsiness, distraction, and unsafe behavior.',
    result:
      'Deployed at MCEME (Indian Army). Real-time alerts with sub-100ms latency. Fully operational in production environment.',
    tags: ['Computer Vision', 'YOLOv8', 'OAK-D', 'Defense AI'],
  },
  {
    border: 'border-t-accent',
    glow: 'hover:shadow-[0_0_24px_rgba(6,182,212,0.15)]',
    tag: '🤖 Agentic AI',
    title: 'Autonomous UGV Control System with Gesture Recognition',
    problem:
      'Operating unmanned ground vehicles in field environments required constant manual joystick input — limiting speed and operator safety.',
    solution:
      'Built an agentic UGV control system using ArUco marker detection + YOLOv8 pose-based gesture classification. Operators control the vehicle using hand gestures captured by OAK-D camera in real time.',
    result:
      'Fully hands-free UGV navigation. Gesture-to-command latency under 80ms. Demonstrated in live field environment.',
    tags: ['Agentic AI', 'Computer Vision', 'ROS2', 'Gesture Control'],
  },
];

const labelMap: Record<string, string> = {
  'border-t-primary': 'text-primary bg-primary/10',
  'border-t-secondary': 'text-secondary bg-secondary/10',
  'border-t-accent': 'text-accent bg-accent/10',
};

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Real AI. Real Results.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg text-muted-foreground"
          >
            Here's what we've built — and what it delivered.
          </motion.p>
        </div>

        {/* Cards — horizontal scroll on mobile, 3-col grid on desktop */}
        <div className="flex gap-5 overflow-x-auto pb-4 lg:pb-0 lg:grid lg:grid-cols-3 lg:overflow-visible snap-x snap-mandatory">
          {cases.map((cs, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`flex-shrink-0 w-[85vw] sm:w-[75vw] lg:w-auto snap-center
                          bg-card border-t-4 ${cs.border} border-x border-b border-white/[0.06]
                          rounded-xl p-6 flex flex-col gap-4 transition-shadow duration-300 ${cs.glow}`}
            >
              {/* Industry tag */}
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {cs.tag}
              </span>

              <h3 className="text-base font-bold text-foreground leading-snug">
                {cs.title}
              </h3>

              {/* PSR breakdown */}
              <div className="flex flex-col gap-3 flex-1">
                {[
                  { label: 'Problem', color: 'text-red-400 bg-red-400/10', text: cs.problem },
                  { label: 'Solution', color: 'text-primary bg-primary/10', text: cs.solution },
                  { label: 'Result', color: 'text-emerald-400 bg-emerald-400/10', text: cs.result },
                ].map(({ label, color, text }) => (
                  <div key={label}>
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${color}`}>
                      {label}
                    </span>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-1.5">{text}</p>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.06]">
                {cs.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${labelMap[cs.border]}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 text-center"
        >
          <p className="text-muted-foreground text-base mb-6">
            These are real systems we've built and deployed.{' '}
            <br className="hidden sm:block" />
            Your business could be our next case study.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 h-12 rounded-full bg-primary px-8 text-base font-semibold text-white
                       hover:bg-primary/90 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-200 active:scale-95 group"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
