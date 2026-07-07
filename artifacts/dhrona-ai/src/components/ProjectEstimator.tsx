import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, RotateCcw, CheckCircle2, Lock } from 'lucide-react';

// ─── Data ────────────────────────────────────────────────────────────────────

const INDUSTRIES = [
  { emoji: '🏥', label: 'Healthcare' },
  { emoji: '🛡️', label: 'Defense' },
  { emoji: '🎓', label: 'Education' },
  { emoji: '✂️', label: 'Salon & Spa' },
  { emoji: '🏫', label: 'Schools' },
  { emoji: '🛒', label: 'Retail' },
  { emoji: '💰', label: 'Finance' },
  { emoji: '🏠', label: 'Real Estate' },
  { emoji: '🍽️', label: 'Hospitality' },
  { emoji: '🏭', label: 'Manufacturing' },
  { emoji: '⚖️', label: 'Legal' },
  { emoji: '🔧', label: 'Other' },
];

const SERVICES = [
  { emoji: '🤖', label: 'AI Chatbot', desc: 'Answers queries, captures leads 24/7' },
  { emoji: '🎙️', label: 'Voice AI Agent', desc: 'Handles calls automatically' },
  { emoji: '💬', label: 'WhatsApp Automation', desc: 'Automates customer messaging' },
  { emoji: '🧠', label: 'Agentic AI System', desc: 'Autonomous multi-step task execution' },
  { emoji: '👁️', label: 'Computer Vision', desc: 'Visual detection and recognition' },
  { emoji: '🎛️', label: 'LLM Fine-Tuning', desc: 'Custom-trained AI on your data' },
  { emoji: '🪞', label: 'Digital Twin', desc: 'Virtual replica of your process or asset' },
  { emoji: '📊', label: 'AI Analytics Dashboard', desc: 'Turns data into insights' },
  { emoji: '🌐', label: 'Website Development', desc: 'Professional business website' },
  { emoji: '⚙️', label: 'Full AI Automation', desc: 'End-to-end workflow automation' },
];

const TIMELINES = [
  { emoji: '⚡', label: 'ASAP (Under 2 weeks)' },
  { emoji: '🗓️', label: '1 Month' },
  { emoji: '📆', label: '2–3 Months' },
  { emoji: '🔭', label: 'Flexible / Just Exploring' },
];

const BUDGETS = [
  { label: 'Under ₹50,000', prefix: '💰' },
  { label: '₹50K – ₹2 Lakhs', prefix: '💰💰' },
  { label: '₹2L – ₹5 Lakhs', prefix: '💰💰💰' },
  { label: '₹5 Lakhs+', prefix: '🚀' },
  { label: "Let's Discuss", prefix: '🤝' },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function getRecommendation(industry: string, services: string[]): string {
  const has = (s: string) => services.includes(s);
  if (industry === 'Healthcare' && has('AI Chatbot')) return 'RAG-Powered Healthcare Chatbot';
  if ((industry === 'Salon & Spa' || industry === 'Retail') && has('WhatsApp Automation'))
    return 'WhatsApp Booking Automation for Salons';
  if (industry === 'Defense' && has('Computer Vision'))
    return 'Real-Time Computer Vision Surveillance System';
  if (has('Agentic AI System')) return 'Autonomous Agentic AI System';
  if (has('LLM Fine-Tuning')) return 'Domain-Specific LLM Fine-Tuned on Your Data';
  if (has('Full AI Automation')) return 'End-to-End AI Business Automation Platform';
  if (services.length > 0) return `Custom AI Solution — ${services.join(', ')}`;
  return 'Custom AI Solution';
}

function getTimeline(t: string): string {
  if (t.includes('ASAP')) return '1–2 weeks';
  if (t.includes('1 Month')) return '2–4 weeks';
  if (t.includes('2–3 Months')) return '4–10 weeks';
  return "We'll plan together";
}

function getInvestment(budget: string, services: string[]): string {
  if (budget === 'Under ₹50,000') return '₹25,000 – ₹50,000';
  if (budget === '₹50K – ₹2 Lakhs') return '₹50,000 – ₹1,80,000';
  if (budget === '₹2L – ₹5 Lakhs') return '₹2,00,000 – ₹5,00,000';
  if (budget === '₹5 Lakhs+' || services.includes('Full AI Automation'))
    return '₹5,00,000+ (Custom Enterprise Quote)';
  return "Let's talk — we'll find what fits your budget";
}

// ─── Slide variants ───────────────────────────────────────────────────────────

const slideVariants = {
  enter: (d: number) => ({ x: d * 56, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d: number) => ({ x: -d * 56, opacity: 0 }),
};

const INCLUDED = [
  'Free 30-min discovery call',
  'Detailed project proposal document',
  'Fixed-price quote before we start',
  'End-to-end build and deployment',
  'Post-launch support included',
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function ProjectEstimator() {
  const [step, setStep] = useState(1); // 1-4 steps, 5 = result
  const [direction, setDirection] = useState(1);
  const [industry, setIndustry] = useState<string | null>(null);
  const [services, setServices] = useState<string[]>([]);
  const [timeline, setTimeline] = useState<string | null>(null);
  const [budget, setBudget] = useState<string | null>(null);

  const goTo = (next: number) => {
    setDirection(next > step ? 1 : -1);
    setStep(next);
  };

  const handleNext = () => {
    if (step === 1 && !industry) return;
    if (step === 2 && services.length === 0) return;
    if (step === 3 && !timeline) return;
    if (step === 4 && !budget) return;
    goTo(step + 1);
  };

  const canProceed =
    (step === 1 && !!industry) ||
    (step === 2 && services.length > 0) ||
    (step === 3 && !!timeline) ||
    (step === 4 && !!budget);

  const reset = () => {
    setDirection(-1);
    setStep(1);
    setIndustry(null);
    setServices([]);
    setTimeline(null);
    setBudget(null);
  };

  const toggleService = (label: string) => {
    setServices((prev) =>
      prev.includes(label) ? prev.filter((s) => s !== label) : [...prev, label]
    );
  };

  const totalSteps = 4;
  const isResult = step === 5;

  return (
    <div className="max-w-3xl mx-auto">
      {/* Divider */}
      <div className="flex items-center gap-4 my-14">
        <div className="flex-1 h-[1px] bg-white/[0.08]" />
        <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase whitespace-nowrap px-2">
          — Get Your Free AI Project Estimate —
        </span>
        <div className="flex-1 h-[1px] bg-white/[0.08]" />
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-2xl border border-primary/20 bg-[#0D1117] p-7 md:p-10 overflow-hidden"
      >
        {/* Card heading */}
        <div className="mb-7">
          <h3 className="text-lg md:text-xl font-bold text-foreground">
            🧮 Build Your AI Solution — Get an Instant Estimate
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            Answer 4 quick questions and we'll give you a tailored scope and price range in seconds.
          </p>
        </div>

        {/* Progress bar */}
        {!isResult && (
          <div className="mb-8">
            <div className="flex justify-between text-xs text-muted-foreground mb-2">
              <span>Step {step} of {totalSteps}</span>
              <span>{Math.round((step / totalSteps) * 100)}% complete</span>
            </div>
            <div className="h-1.5 bg-white/[0.08] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary rounded-full"
                animate={{ width: `${(step / totalSteps) * 100}%` }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
        )}

        {/* Step content */}
        <div className="overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            {/* ── STEP 1 — Industry ── */}
            {step === 1 && (
              <motion.div
                key="step1"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-semibold text-foreground mb-5">
                  What industry are you in?
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
                  {INDUSTRIES.map((ind) => (
                    <button
                      key={ind.label}
                      onClick={() => setIndustry(ind.label)}
                      className={`flex flex-col items-center justify-center gap-1.5 rounded-xl p-3 min-h-[72px] border text-center transition-all duration-200
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60
                        ${industry === ind.label
                          ? 'border-primary bg-primary/15 shadow-[0_0_12px_rgba(59,130,246,0.2)]'
                          : 'border-white/10 bg-white/[0.03] hover:border-primary/40 hover:bg-white/[0.07]'
                        }`}
                    >
                      <span className="text-xl leading-none">{ind.emoji}</span>
                      <span className="text-[11px] font-medium text-foreground leading-tight">{ind.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ── STEP 2 — Services ── */}
            {step === 2 && (
              <motion.div
                key="step2"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-semibold text-foreground mb-1">
                  What AI solution are you looking for?
                </p>
                <p className="text-xs text-muted-foreground mb-5">Select all that apply</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {SERVICES.map((svc) => {
                    const selected = services.includes(svc.label);
                    return (
                      <button
                        key={svc.label}
                        onClick={() => toggleService(svc.label)}
                        className={`flex items-center gap-3 rounded-xl px-4 py-3 border text-left transition-all duration-200
                          focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60
                          ${selected
                            ? 'border-primary bg-primary/15 shadow-[0_0_10px_rgba(59,130,246,0.15)]'
                            : 'border-white/10 bg-white/[0.03] hover:border-primary/40 hover:bg-white/[0.06]'
                          }`}
                        aria-pressed={selected}
                      >
                        <span className="text-lg flex-shrink-0">{svc.emoji}</span>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-foreground">{svc.label}</div>
                          <div className="text-[11px] text-muted-foreground leading-snug">{svc.desc}</div>
                        </div>
                        {selected && (
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 ml-auto" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* ── STEP 3 — Timeline ── */}
            {step === 3 && (
              <motion.div
                key="step3"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-semibold text-foreground mb-5">
                  When do you need this ready?
                </p>
                <div className="flex flex-col gap-3">
                  {TIMELINES.map((t) => (
                    <button
                      key={t.label}
                      onClick={() => setTimeline(t.label)}
                      className={`flex items-center gap-3 rounded-xl px-5 py-4 border min-h-[52px] text-left transition-all duration-200
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60
                        ${timeline === t.label
                          ? 'border-primary bg-primary/15 shadow-[0_0_12px_rgba(59,130,246,0.2)]'
                          : 'border-white/10 bg-white/[0.03] hover:border-primary/40 hover:bg-white/[0.06]'
                        }`}
                    >
                      <span className="text-xl">{t.emoji}</span>
                      <span className="text-sm font-semibold text-foreground">{t.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ── STEP 4 — Budget ── */}
            {step === 4 && (
              <motion.div
                key="step4"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-semibold text-foreground mb-5">
                  What's your approximate budget?
                </p>
                <div className="flex flex-col gap-3">
                  {BUDGETS.map((b) => (
                    <button
                      key={b.label}
                      onClick={() => setBudget(b.label)}
                      className={`flex items-center gap-3 rounded-xl px-5 py-4 border min-h-[52px] text-left transition-all duration-200
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60
                        ${budget === b.label
                          ? 'border-primary bg-primary/15 shadow-[0_0_12px_rgba(59,130,246,0.2)]'
                          : 'border-white/10 bg-white/[0.03] hover:border-primary/40 hover:bg-white/[0.06]'
                        }`}
                    >
                      <span className="text-xl">{b.prefix}</span>
                      <span className="text-sm font-semibold text-foreground">{b.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ── RESULTS ── */}
            {step === 5 && industry && timeline && budget && (
              <motion.div
                key="result"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Result card with gradient border effect */}
                <div className="rounded-xl border border-primary/40 bg-background p-6 md:p-8"
                  style={{ boxShadow: '0 0 28px rgba(59,130,246,0.12)' }}
                >
                  <h4 className="text-lg font-bold text-foreground mb-5">
                    ✅ Your Custom AI Estimate is Ready
                  </h4>

                  {/* Selection summary tags */}
                  <div className="flex flex-wrap gap-2 mb-6 pb-5 border-b border-white/[0.07]">
                    {[
                      industry,
                      ...services,
                      timeline,
                      budget,
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium bg-primary/10 text-primary border border-primary/20 px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Recommended solution */}
                  <div className="mb-5">
                    <span className="text-[11px] uppercase tracking-widest text-muted-foreground font-semibold">
                      Recommended Solution
                    </span>
                    <p className="mt-1.5 text-base font-bold text-foreground">
                      {getRecommendation(industry, services)}
                    </p>
                  </div>

                  {/* Timeline + Investment side by side */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                    <div className="bg-white/[0.04] rounded-xl p-4 border border-white/[0.07]">
                      <span className="text-[11px] uppercase tracking-widest text-muted-foreground font-semibold">
                        Estimated Timeline
                      </span>
                      <p className="mt-1.5 text-base font-bold text-primary">
                        {getTimeline(timeline)}
                      </p>
                    </div>
                    <div className="bg-white/[0.04] rounded-xl p-4 border border-white/[0.07]">
                      <span className="text-[11px] uppercase tracking-widest text-muted-foreground font-semibold">
                        Estimated Investment
                      </span>
                      <p className="mt-1.5 text-base font-bold text-primary">
                        {getInvestment(budget, services)}
                      </p>
                    </div>
                  </div>

                  <p className="text-[11px] text-muted-foreground/70 italic mb-6">
                    This is an indicative estimate. Final pricing depends on exact scope. We'll confirm
                    everything before any work begins.
                  </p>

                  {/* What's included */}
                  <div className="mb-7">
                    <span className="text-[11px] uppercase tracking-widest text-muted-foreground font-semibold">
                      What's Included
                    </span>
                    <ul className="mt-3 flex flex-col gap-2">
                      {INCLUDED.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <a
                      href="#contact"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 rounded-full bg-primary px-8
                                 text-sm font-bold text-white hover:bg-primary/90
                                 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-200 group"
                    >
                      Book Your Free Call Now
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <button
                      onClick={reset}
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      Start Over
                    </button>
                  </div>

                  <p className="flex items-center gap-1.5 text-[11px] text-muted-foreground/60 mt-4">
                    <Lock className="w-3 h-3" />
                    No commitment required. No spam. Just a real conversation.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation — Back + Next/Submit */}
        {!isResult && (
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/[0.06]">
            <button
              onClick={() => goTo(step - 1)}
              disabled={step === 1}
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground
                         hover:text-foreground disabled:opacity-0 disabled:pointer-events-none transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </button>

            <button
              onClick={handleNext}
              disabled={!canProceed}
              className="inline-flex items-center gap-2 h-11 rounded-full bg-primary px-7 text-sm font-bold text-white
                         hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed
                         hover:shadow-[0_0_16px_rgba(59,130,246,0.4)] transition-all duration-200 group"
            >
              {step === 4 ? 'Get My Estimate' : 'Next'}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
