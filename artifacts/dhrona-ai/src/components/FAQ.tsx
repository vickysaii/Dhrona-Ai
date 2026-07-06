import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "What industries does Dhrona AI serve?",
    a: "We serve all industries — Healthcare, Defense, Education, Salons, Schools, Retail, Finance, Real Estate, Legal, Hospitality, and more. If your business has a process, we can automate or enhance it with AI.",
  },
  {
    q: "How long does it take to build and deploy an AI solution?",
    a: "Timelines depend on project complexity. A standard AI chatbot or WhatsApp automation typically takes 1–2 weeks. Custom agentic systems or LLM fine-tuning projects range from 3–8 weeks. We always share a clear timeline before starting.",
  },
  {
    q: "Do I need technical knowledge to work with Dhrona AI?",
    a: "Not at all. You bring the business problem — we handle everything technical. We explain every step in plain language so you're always in control without needing to understand the code.",
  },
  {
    q: "How much does an AI solution cost?",
    a: "Our solutions are priced to be accessible for Indian startups and SMEs. Projects start from ₹25,000 for basic automations and scale up based on complexity. We offer flexible packages — get in touch for a custom quote.",
  },
  {
    q: "Will my business data be safe?",
    a: "Absolutely. We build with data privacy as a core requirement — not an afterthought. Your data stays yours. We sign NDAs before starting any project and follow secure development practices throughout.",
  },
  {
    q: "Can you integrate AI with my existing software or website?",
    a: "Yes. We specialize in integrating AI into existing systems — whether you use a CRM, ERP, custom software, or third-party platforms. We build connectors and APIs that plug in cleanly.",
  },
  {
    q: "Do you provide support after deployment?",
    a: "Yes. Every project includes post-deployment support and monitoring. We offer ongoing maintenance packages so your AI system keeps performing as your business scales.",
  },
  {
    q: "What makes Dhrona AI different from hiring a freelancer?",
    a: "Freelancers build features. Dhrona AI builds systems. We bring a full team — AI engineers, designers, and deployment specialists — with accountability, proper documentation, and long-term support that a single freelancer cannot offer.",
  },
  {
    q: "Can you fine-tune an AI model on my company's specific data?",
    a: "Yes. LLM fine-tuning is one of our core services. We train models on your proprietary data — manuals, past conversations, product catalogs, medical records (anonymized) — to create AI that speaks your business language precisely.",
  },
  {
    q: "How do I get started?",
    a: "Simple — fill out the contact form on this page or reach us on WhatsApp. Describe your problem or idea, and we'll schedule a free 30-minute discovery call to scope out the solution.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-background">
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
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg text-muted-foreground"
          >
            Everything you want to know before we start building.
          </motion.p>
        </div>

        {/* Accordion */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-white/[0.06]">
              <button
                id={`faq-btn-${i}`}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                aria-expanded={openIndex === i}
                aria-controls={`faq-panel-${i}`}
              >
                <span className="text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200 pr-6">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-btn-${i}`}
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-muted-foreground leading-relaxed text-base">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
