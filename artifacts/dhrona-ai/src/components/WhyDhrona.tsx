import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Target, Microscope, DollarSign, Rocket, Eye, Globe2, Lock } from 'lucide-react';

export default function WhyDhrona() {
  const reasons = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "End-to-End Ownership",
      description: "We handle everything from strategy to deployment. No outsourcing, no handoffs, no excuses."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Industry-Specific AI",
      description: "We build AI that understands your domain — not generic tools resold with your logo on them."
    },
    {
      icon: <Microscope className="w-6 h-6" />,
      title: "Research-Backed Development",
      description: "Our team blends real AI/ML engineering with production-grade deployment — not just API wrappers."
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Startup-Friendly Pricing",
      description: "Enterprise-grade AI at pricing that actually makes sense for growing businesses."
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Speed to Market",
      description: "We deliver working AI systems faster than traditional agencies — because we build, not consult."
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Transparent Collaboration",
      description: "You get full visibility into the build process, with regular demos and clear milestones."
    },
    {
      icon: <Globe2 className="w-6 h-6" />,
      title: "Pan-India + Global Reach",
      description: "Based in India, built for the world. We serve clients locally and internationally."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Data Privacy First",
      description: "Your business data stays yours. We build with security, compliance, and privacy baked in."
    }
  ];

  return (
    <section id="why" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Why Choose Dhrona AI Over Other Agencies?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            We're not just another AI vendor. Here's what makes us different.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: Math.floor(index / 2) * 0.1 }}
              className="flex gap-4 p-6 rounded-2xl bg-card border border-white/5 hover:border-primary/30 transition-colors"
            >
              <div className="flex-shrink-0 mt-1 text-primary">
                {reason.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
