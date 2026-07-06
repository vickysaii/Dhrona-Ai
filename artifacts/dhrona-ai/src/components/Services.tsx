import React from 'react';
import { motion } from 'framer-motion';
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
  GraduationCap 
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Chatbots",
      description: "Custom RAG-powered chatbots trained on your business data for 24/7 intelligent customer support."
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Voice AI Agents",
      description: "Human-like AI phone agents that handle calls, appointments, and queries without human intervention."
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "WhatsApp Automation",
      description: "Automate customer communication, lead nurturing, and support directly on WhatsApp using AI."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI Business Automation",
      description: "End-to-end workflow automation using AI to reduce manual effort and boost operational efficiency."
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Domain-Specific AI Solutions",
      description: "Custom AI systems built for Healthcare, Defense, Education, Salons, Schools, and more."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Website Development",
      description: "Professional, modern websites built from scratch — responsive, fast, and optimized for conversions."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "AI-Powered Analytics",
      description: "Smart dashboards and data intelligence tools that turn your raw data into actionable insights."
    },
    {
      icon: <Link className="w-8 h-8" />,
      title: "API & System Integration",
      description: "Seamlessly connect AI tools with your existing CRM, ERP, or third-party platforms."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "AI for Defense & Security",
      description: "Secure, specialized AI systems for defense applications including surveillance, monitoring, and threat analysis."
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "AI in Education",
      description: "Intelligent tutoring systems, automated grading, and personalized learning tools for schools and EdTech."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="py-24 bg-[#0D1117]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our AI Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Everything you need to automate, scale, and grow — powered by AI
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-background/50 border border-white/5 p-8 rounded-xl glow-on-hover flex flex-col gap-4 group"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Full-width dark banner strip */}
      <div className="w-full bg-background border-y border-secondary/20 py-6 mt-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-medium tracking-wide text-sm sm:text-base md:text-lg">
            From Ideation → Design → Development → Testing → Deployment → Support — We Handle Everything.
          </p>
        </div>
      </div>
    </section>
  );
}
