import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const stats = [
    { value: "10+", label: "Industries Served" },
    { value: "End-to-End", label: "Delivery" },
    { value: "Production-Ready", label: "AI Systems" }
  ];

  return (
    <section id="about" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-12"
          >
            Transforming Businesses with Intelligent AI
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center p-6 rounded-2xl bg-card border border-white/5"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2 font-display">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium text-sm md:text-base uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            Dhrona AI is an AI agency that partners with businesses across all industries to design, build, and deploy AI systems — from scratch to production. We don't just build tools; we solve real business problems with AI that actually delivers results.
          </motion.p>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="w-full h-[1px] absolute bottom-0 left-0 animated-divider" 
      />
    </section>
  );
}
