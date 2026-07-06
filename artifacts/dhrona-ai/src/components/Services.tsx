import React from 'react';
import { motion, type Variants } from 'framer-motion';
import {
  Bot,
  Phone,
  MessageSquare,
  Zap,
  Layers,
  Globe,
  BarChart3,
  Link,
  Shield,
  GraduationCap,
  Brain,
  Cpu,
  SlidersHorizontal,
  Eye,
  GitBranch,
} from 'lucide-react';

const services = [
  {
    icon: <Bot className="w-7 h-7" />,
    title: "AI Chatbots",
    description:
      "Custom RAG-powered chatbots trained on your business data for 24/7 intelligent customer support.",
  },
  {
    icon: <Phone className="w-7 h-7" />,
    title: "Voice AI Agents",
    description:
      "Human-like AI phone agents that handle calls, appointments, and queries without human intervention.",
  },
  {
    icon: <MessageSquare className="w-7 h-7" />,
    title: "WhatsApp Automation",
    description:
      "Automate customer communication, lead nurturing, and support directly on WhatsApp using AI.",
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: "AI Business Automation",
    description:
      "End-to-end workflow automation using AI to reduce manual effort and boost operational efficiency.",
  },
  {
    icon: <Layers className="w-7 h-7" />,
    title: "Domain-Specific AI Solutions",
    description:
      "Custom AI systems built for Healthcare, Defense, Education, Salons, Schools, and more.",
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: "Website Development",
    description:
      "Professional, modern websites built from scratch — responsive, fast, and optimized for conversions.",
  },
  {
    icon: <BarChart3 className="w-7 h-7" />,
    title: "AI-Powered Analytics",
    description:
      "Smart dashboards and data intelligence tools that turn your raw data into actionable insights.",
  },
  {
    icon: <Link className="w-7 h-7" />,
    title: "API & System Integration",
    description:
      "Seamlessly connect AI tools with your existing CRM, ERP, or third-party platforms.",
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: "AI for Defense & Security",
    description:
      "Secure, specialized AI systems for defense applications including surveillance, monitoring, and threat analysis.",
  },
  {
    icon: <GraduationCap className="w-7 h-7" />,
    title: "AI in Education",
    description:
      "Intelligent tutoring systems, automated grading, and personalized learning tools for schools and EdTech.",
  },
  {
    icon: <Brain className="w-7 h-7" />,
    title: "Agentic AI Systems",
    description:
      "Autonomous AI agents that think, plan, and execute multi-step tasks independently — from research bots to full business process agents.",
  },
  {
    icon: <Cpu className="w-7 h-7" />,
    title: "Digital Twins",
    description:
      "Create real-time virtual replicas of your physical assets, factories, or processes to simulate, monitor, and optimize without real-world risk.",
  },
  {
    icon: <SlidersHorizontal className="w-7 h-7" />,
    title: "LLM Fine-Tuning",
    description:
      "Custom-train large language models on your proprietary business data for domain-specific accuracy that generic models can't match.",
  },
  {
    icon: <Eye className="w-7 h-7" />,
    title: "Computer Vision",
    description:
      "AI-powered visual intelligence — object detection, facial recognition, quality inspection, surveillance, and gesture control for real-world deployment.",
  },
  {
    icon: <GitBranch className="w-7 h-7" />,
    title: "AI Workflow Orchestration",
    description:
      "Connect and automate complex multi-step business workflows using AI orchestration frameworks like LangGraph and CrewAI.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#0D1117]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our AI Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg text-muted-foreground"
          >
            Everything you need to automate, scale, and grow — powered by AI
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } }}
              className="bg-background/50 border border-white/5 p-7 rounded-xl flex flex-col gap-4 group cursor-default
                         hover:border-primary/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-colors duration-300"
            >
              {/* Icon wrapper — rotates 10° on hover */}
              <div
                className="w-13 h-13 w-[52px] h-[52px] rounded-xl bg-primary/10 flex items-center justify-center text-primary
                           group-hover:bg-primary group-hover:text-white group-hover:rotate-[10deg]
                           transition-all duration-300"
              >
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Full-width pipeline banner */}
      <div className="w-full bg-background border-y border-secondary/20 py-5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-medium tracking-wide text-sm sm:text-base">
            From Ideation → Design → Development → Testing → Deployment → Support — We Handle Everything.
          </p>
        </div>
      </div>
    </section>
  );
}
