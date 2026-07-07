import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import ProjectEstimator from './ProjectEstimator';

interface IndustryData {
  label: string;
  title: string;
  bullets: string[];
  cta: string;
}

const industries: IndustryData[] = [
  {
    label: 'Healthcare',
    title: 'AI for Hospitals, Clinics & Healthcare Providers',
    bullets: [
      'AI chatbots for patient queries, appointment booking, and prescription info',
      'Voice agents for automated follow-up calls and reminders',
      'Computer vision for patient monitoring and anomaly detection',
      'LLM fine-tuned on medical records for intelligent clinical assistance',
    ],
    cta: 'See Healthcare Solutions',
  },
  {
    label: 'Defense',
    title: 'AI for Defense, Security & Surveillance',
    bullets: [
      'Computer vision systems for real-time threat detection and monitoring',
      'Autonomous UGV/drone control using gesture and vision-based commands',
      'Driver monitoring systems for military vehicle safety',
      'Secure, on-premise AI deployments with zero cloud dependency',
    ],
    cta: 'See Defense Solutions',
  },
  {
    label: 'Education',
    title: 'AI for Schools, Colleges & EdTech Platforms',
    bullets: [
      'AI tutoring assistants trained on your curriculum',
      'Automated assignment grading and performance tracking',
      'WhatsApp bots for parent-teacher communication',
      'LLM-powered doubt-solving chatbots for students',
    ],
    cta: 'See Education Solutions',
  },
  {
    label: 'Salon & Spa',
    title: 'AI for Salons, Spas & Beauty Businesses',
    bullets: [
      'WhatsApp AI agent for appointment booking and automated reminders',
      'Voice agent to handle incoming calls and slot confirmations',
      'Loyalty program automation and personalized offers via WhatsApp',
      'AI chatbot for service menu queries and upselling recommendations',
    ],
    cta: 'See Salon Solutions',
  },
  {
    label: 'Schools',
    title: 'AI for Schools & Educational Institutions',
    bullets: [
      'AI chatbot for student queries, admissions info, and fee payment',
      'WhatsApp automation for parent-teacher communication and updates',
      'Automated attendance and performance tracking systems',
      'AI-powered personalized learning paths for every student',
    ],
    cta: 'See Schools Solutions',
  },
  {
    label: 'Retail',
    title: 'AI for Retail & E-Commerce Businesses',
    bullets: [
      'AI product recommendation engine to increase average order value',
      'WhatsApp chatbot for order tracking, returns, and customer support',
      'AI-powered inventory forecasting and demand prediction',
      'Automated upselling and cross-selling via personalized messages',
    ],
    cta: 'See Retail Solutions',
  },
  {
    label: 'Finance',
    title: 'AI for Finance, Banking & Investment Firms',
    bullets: [
      'AI chatbot for customer queries, account info, and loan eligibility',
      'Intelligent fraud detection and risk assessment systems',
      'Automated document processing and KYC verification',
      'AI-powered financial advisor bots for personalized investment guidance',
    ],
    cta: 'See Finance Solutions',
  },
  {
    label: 'Real Estate',
    title: 'AI for Real Estate Agencies & Property Developers',
    bullets: [
      'AI chatbot for property queries, virtual tours, and lead qualification',
      'WhatsApp automation for follow-ups, site visit bookings, and updates',
      'AI-powered lead scoring and CRM integration for sales teams',
      'Automated document generation for agreements and proposals',
    ],
    cta: 'See Real Estate Solutions',
  },
];

export default function IndustryPersonalizer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const active = industries[activeIndex];

  // Keyboard arrow navigation for tabs
  const handleKeyDown = (e: React.KeyboardEvent, i: number) => {
    let next = i;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      next = (i + 1) % industries.length;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      next = (i - 1 + industries.length) % industries.length;
    } else if (e.key === 'Home') {
      e.preventDefault();
      next = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      next = industries.length - 1;
    } else {
      return;
    }
    setActiveIndex(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section id="industries" className="py-24 bg-[#0D1117]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Built for Your Industry
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg text-muted-foreground"
          >
            Click your industry to see exactly how Dhrona AI can help you.
          </motion.p>
        </div>

        {/* Tab list — semantic tablist */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          role="tablist"
          aria-label="Select your industry"
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {industries.map((ind, i) => (
            <button
              key={ind.label}
              ref={(el) => { tabRefs.current[i] = el; }}
              role="tab"
              id={`industry-tab-${i}`}
              aria-selected={i === activeIndex}
              aria-controls={`industry-panel-${i}`}
              tabIndex={i === activeIndex ? 0 : -1}
              onClick={() => setActiveIndex(i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1117] ${
                i === activeIndex
                  ? 'bg-primary border-primary text-white shadow-[0_0_14px_rgba(59,130,246,0.4)]'
                  : 'border-white/15 text-muted-foreground bg-white/[0.04] hover:border-primary/50 hover:text-foreground hover:bg-white/[0.07]'
              }`}
            >
              {ind.label}
            </button>
          ))}
        </motion.div>

        {/* Tab panels */}
        <div className="max-w-3xl mx-auto">
          {industries.map((ind, i) => (
            <div
              key={ind.label}
              role="tabpanel"
              id={`industry-panel-${i}`}
              aria-labelledby={`industry-tab-${i}`}
              hidden={i !== activeIndex}
            >
              <AnimatePresence mode="wait">
                {i === activeIndex && (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-background border border-white/[0.07] rounded-2xl p-8 md:p-10"
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
                      {ind.title}
                    </h3>

                    <ul className="flex flex-col gap-4 mb-8">
                      {ind.bullets.map((bullet, bi) => (
                        <li key={bi} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground text-base leading-relaxed">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 h-11 rounded-full bg-primary px-7 text-sm font-semibold text-white
                                 hover:bg-primary/90 hover:shadow-[0_0_18px_rgba(59,130,246,0.4)] transition-all duration-200 group"
                    >
                      {ind.cta}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* AI Project Estimator — below the tab panels, same section */}
        <ProjectEstimator />
      </div>
    </section>
  );
}
