import React from 'react';
import { motion } from 'framer-motion';

export default function TechStack() {
  const categories = [
    {
      name: "AI & ML",
      color: "bg-blue-500",
      items: ["Python", "PyTorch", "TensorFlow", "LangChain", "LlamaIndex", "Hugging Face", "Groq", "OpenAI", "Anthropic Claude"]
    },
    {
      name: "Databases",
      color: "bg-green-500",
      items: ["PostgreSQL", "Supabase", "pgvector", "MongoDB", "Redis", "ChromaDB"]
    },
    {
      name: "Backend & APIs",
      color: "bg-yellow-500",
      items: ["FastAPI", "Node.js", "Express.js", "Docker", "REST APIs"]
    },
    {
      name: "Voice & Comms",
      color: "bg-purple-500",
      items: ["Vapi", "Twilio", "WhatsApp API", "ElevenLabs"]
    },
    {
      name: "Frontend",
      color: "bg-cyan-500",
      items: ["React.js", "Next.js", "Tailwind CSS", "Vercel"]
    },
    {
      name: "Cloud",
      color: "bg-orange-500",
      items: ["AWS", "Google Cloud", "Render", "GitHub Actions"]
    },
    {
      name: "Computer Vision",
      color: "bg-red-500",
      items: ["OpenCV", "YOLOv8", "ONNX Runtime"]
    },
    {
      name: "Other",
      color: "bg-pink-500",
      items: ["Streamlit", "n8n", "Zapier", "Retell AI"]
    }
  ];

  return (
    <section id="tech" className="py-24 bg-[#0D1117]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Powered by Industry-Leading Technology
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            We use the best tools available to build AI systems that are fast, reliable, and scalable.
          </motion.p>
        </div>

        {/* Desktop View: Grouped by category */}
        <div className="hidden md:flex flex-col gap-8 max-w-5xl mx-auto">
          {categories.map((category, idx) => (
            <motion.div 
              key={category.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="flex flex-col sm:flex-row gap-4 sm:items-center"
            >
              <div className="sm:w-48 flex-shrink-0 text-sm font-bold text-muted-foreground uppercase tracking-wider">
                {category.name}
              </div>
              <div className="flex flex-wrap gap-3">
                {category.items.map(item => (
                  <div 
                    key={item} 
                    className="flex items-center gap-2 bg-background border border-white/10 px-4 py-2 rounded-full text-sm hover:border-primary/50 transition-colors"
                  >
                    <span className={`w-2 h-2 rounded-full ${category.color}`}></span>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View: Continuous Marquee */}
        <div className="md:hidden overflow-hidden -mx-4 px-4 relative">
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#0D1117] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#0D1117] to-transparent z-10"></div>
          
          <div className="flex flex-col gap-4">
            <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]">
              {[...categories[0].items, ...categories[1].items, ...categories[2].items, ...categories[0].items, ...categories[1].items].map((item, i) => (
                <div key={i} className="mx-2 flex items-center gap-2 bg-background border border-white/10 px-4 py-2 rounded-full text-sm">
                  {item}
                </div>
              ))}
            </div>
            <div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite_reverse]">
              {[...categories[3].items, ...categories[4].items, ...categories[5].items, ...categories[3].items, ...categories[4].items].map((item, i) => (
                <div key={i} className="mx-2 flex items-center gap-2 bg-background border border-white/10 px-4 py-2 rounded-full text-sm">
                  {item}
                </div>
              ))}
            </div>
            <div className="flex whitespace-nowrap animate-[marquee_22s_linear_infinite]">
              {[...categories[6].items, ...categories[7].items, ...categories[0].items, ...categories[6].items, ...categories[7].items].map((item, i) => (
                <div key={i} className="mx-2 flex items-center gap-2 bg-background border border-white/10 px-4 py-2 rounded-full text-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-sm italic text-muted-foreground">
            Don't see your tech? We integrate with whatever stack you're already running.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
