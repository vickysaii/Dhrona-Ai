import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const problems = [
  {
    title: "No AI Strategy, Just Hype",
    desc: "Most businesses have heard of AI but have zero plan for actually implementing it. Competitors who do are already pulling ahead.",
  },
  {
    title: "Wasted Budget on Wrong Tools",
    desc: "Companies are paying for generic SaaS AI tools that don't fit their actual workflow — burning money with no measurable ROI.",
  },
  {
    title: "Legacy Systems Blocking Automation",
    desc: "Old software, disconnected databases, and manual processes make it impossible to plug in modern AI without the right integration partner.",
  },
  {
    title: "No In-House AI Talent",
    desc: "Hiring AI engineers in India costs ₹15–40 LPA minimum. Most SMEs and startups simply cannot afford a full internal AI team.",
  },
  {
    title: "Data Sitting Unused",
    desc: "Indian businesses generate massive amounts of data daily — invoices, calls, patient records, CCTV footage — and 90% of it is never analysed or used.",
  },
  {
    title: "Fear of Data Privacy Risks",
    desc: "Businesses want to use AI but are scared of data leaks, vendor lock-in, and not knowing where their sensitive data goes.",
  },
  {
    title: "Slow Manual Customer Support",
    desc: "Support teams drowning in repetitive WhatsApp messages, calls, and emails — while customers expect instant, 24/7 responses.",
  },
  {
    title: "Missing the Global AI Shift",
    desc: "Global competitors are deploying voice agents, RAG chatbots, and agentic systems right now. Indian businesses still relying on manual ops will be left behind by 2027.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, x: -24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function PainPoints() {
  return (
    <section id="pain-points" className="py-24 bg-background relative overflow-hidden">
      {/* Subtle red ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(239,68,68,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
          >
            Why Most Indian Businesses Are{' '}
            <span className="text-amber-400">Falling Behind</span> in the AI Race
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg text-muted-foreground"
          >
            These are the real problems slowing down growth — and we fix every single one of them.
          </motion.p>
        </div>

        {/* Problem grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="relative flex gap-4 bg-card border border-white/5 rounded-xl p-6 overflow-hidden group hover:border-red-500/20 transition-colors duration-300"
            >
              {/* Pulsing left red accent border */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-xl overflow-hidden">
                <div className="w-full h-full bg-red-500/70 animate-pulse-border" />
              </div>

              <div className="pl-2">
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2">
                  {problem.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {problem.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Callout strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-card via-amber-950/20 to-card border border-amber-500/20 rounded-2xl p-8 md:p-10"
        >
          <p className="text-lg md:text-xl font-semibold text-foreground mb-6 leading-relaxed">
            Dhrona AI was built specifically to solve these problems — for Indian businesses,
            at Indian budgets, with{' '}
            <span className="text-amber-400">global-standard AI.</span>
          </p>
          <a
            href="#contact"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105 active:scale-95"
          >
            Let's Fix This Together
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
