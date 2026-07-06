import React from 'react';
import { motion } from 'framer-motion';

const allTech = [
  // AI & ML
  { name: 'Python', color: 'bg-blue-400' },
  { name: 'PyTorch', color: 'bg-orange-400' },
  { name: 'TensorFlow', color: 'bg-orange-500' },
  { name: 'LangChain', color: 'bg-green-400' },
  { name: 'LlamaIndex', color: 'bg-purple-400' },
  { name: 'Hugging Face', color: 'bg-yellow-400' },
  { name: 'Groq', color: 'bg-cyan-400' },
  { name: 'OpenAI', color: 'bg-green-500' },
  { name: 'Anthropic Claude', color: 'bg-amber-400' },
  // Databases
  { name: 'PostgreSQL', color: 'bg-blue-500' },
  { name: 'Supabase', color: 'bg-emerald-500' },
  { name: 'pgvector', color: 'bg-blue-600' },
  { name: 'MongoDB', color: 'bg-green-600' },
  { name: 'Redis', color: 'bg-red-500' },
  { name: 'ChromaDB', color: 'bg-purple-500' },
  // Backend
  { name: 'FastAPI', color: 'bg-teal-400' },
  { name: 'Node.js', color: 'bg-green-400' },
  { name: 'Express.js', color: 'bg-slate-400' },
  { name: 'Docker', color: 'bg-blue-400' },
  { name: 'REST APIs', color: 'bg-indigo-400' },
  // Voice & Comms
  { name: 'Vapi', color: 'bg-violet-400' },
  { name: 'Twilio', color: 'bg-red-400' },
  { name: 'WhatsApp API', color: 'bg-green-500' },
  { name: 'ElevenLabs', color: 'bg-pink-400' },
  // Frontend
  { name: 'React.js', color: 'bg-cyan-400' },
  { name: 'Next.js', color: 'bg-slate-300' },
  { name: 'Tailwind CSS', color: 'bg-sky-400' },
  { name: 'Vercel', color: 'bg-slate-200' },
  // Cloud
  { name: 'AWS', color: 'bg-orange-400' },
  { name: 'Google Cloud', color: 'bg-blue-400' },
  { name: 'Render', color: 'bg-teal-500' },
  { name: 'GitHub Actions', color: 'bg-slate-400' },
  // Computer Vision
  { name: 'OpenCV', color: 'bg-blue-500' },
  { name: 'YOLOv8', color: 'bg-purple-500' },
  { name: 'ONNX Runtime', color: 'bg-gray-400' },
  // Other
  { name: 'Streamlit', color: 'bg-red-400' },
  { name: 'n8n', color: 'bg-orange-500' },
  { name: 'Zapier', color: 'bg-orange-400' },
  { name: 'Retell AI', color: 'bg-violet-500' },
  { name: 'LangGraph', color: 'bg-green-400' },
  { name: 'CrewAI', color: 'bg-blue-500' },
];

// Split into two rows for opposite-direction marquees
const row1 = allTech.slice(0, Math.ceil(allTech.length / 2));
const row2 = allTech.slice(Math.ceil(allTech.length / 2));

function MarqueeRow({
  items,
  reverse = false,
  speed = 30,
}: {
  items: typeof allTech;
  reverse?: boolean;
  speed?: number;
}) {
  // Double items for seamless wrap (animation moves -50% = exactly 1 copy width)
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden group">
      <div
        className={`flex whitespace-nowrap gap-3 ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        } group-hover:[animation-play-state:paused]`}
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((tech, i) => (
          <div
            key={`${tech.name}-${i}`}
            className="flex-shrink-0 flex items-center gap-2 bg-background border border-white/10 px-4 py-2 rounded-full text-sm hover:border-primary/50 hover:bg-primary/5 transition-colors duration-200 cursor-default"
          >
            <span className={`w-2 h-2 rounded-full flex-shrink-0 ${tech.color}`} />
            <span className="text-muted-foreground">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section id="tech" className="py-24 bg-[#0D1117]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Powered by Industry-Leading Technology
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg text-muted-foreground"
          >
            We use the best tools available to build AI systems that are fast, reliable, and scalable.
          </motion.p>
        </div>
      </div>

      {/* Full-bleed marquee area with edge fades */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0D1117] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0D1117] to-transparent z-10 pointer-events-none" />

        <div className="flex flex-col gap-4 py-2">
          <MarqueeRow items={row1} reverse={false} speed={35} />
          <MarqueeRow items={row2} reverse={true} speed={28} />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 text-sm italic text-muted-foreground text-center"
        >
          Don't see your tech? We integrate with whatever stack you're already running.
        </motion.p>
      </div>
    </section>
  );
}
