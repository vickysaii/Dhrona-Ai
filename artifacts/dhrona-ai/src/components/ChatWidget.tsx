import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  id: number;
  from: 'bot' | 'user';
  text: string;
  ts: number;
}

const BOT_RESPONSES: Record<string, string> = {
  "What services do you offer?":
    "We offer AI Chatbots, Voice AI Agents, WhatsApp Automation, Agentic AI Systems, Computer Vision, LLM Fine-Tuning, Digital Twins, and more. We build end-to-end AI solutions for any industry 🚀 Want to know about a specific service?",
  "How much does it cost?":
    "Our solutions are priced to be accessible for Indian startups and SMEs — starting from ₹25,000 for basic automations and scaling up based on complexity. We'll give you a custom quote after a free 30-minute discovery call. Want to book one?",
  "Book a free call":
    "Great choice! 🎉 Head to the Contact section on this page and fill in your details — we'll schedule your free 30-minute discovery call within 24 hours. Or reach us directly on WhatsApp!",
};

const DEFAULT_RESPONSE =
  "That's a great question! Our team will be happy to answer it in detail. Fill the Contact form below or reach us on WhatsApp and we'll get back to you within a few hours 👇";

const INITIAL_MESSAGE: Message = {
  id: 0,
  from: 'bot',
  text: "Hi! 👋 I'm Dhrona AI's assistant. Ask me about our services, pricing, or how we can help your business.",
  ts: Date.now(),
};

const QUICK_REPLIES = [
  "What services do you offer?",
  "How much does it cost?",
  "Book a free call",
];

function TypingDots() {
  return (
    <div className="flex gap-1 items-center px-4 py-3">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="w-2 h-2 rounded-full bg-primary/70"
          style={{
            animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [inputVal, setInputVal] = useState('');
  const [typing, setTyping] = useState(false);
  const [idCounter, setIdCounter] = useState(1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const responseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const focusTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Clean up all pending timers on unmount
  useEffect(() => {
    return () => {
      if (responseTimerRef.current) clearTimeout(responseTimerRef.current);
      if (focusTimerRef.current) clearTimeout(focusTimerRef.current);
    };
  }, []);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      if (focusTimerRef.current) clearTimeout(focusTimerRef.current);
      focusTimerRef.current = setTimeout(() => inputRef.current?.focus(), 350);
    }
  }, [open]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: idCounter, from: 'user', text: text.trim(), ts: Date.now() };
    setMessages((prev) => [...prev, userMsg]);
    setIdCounter((n) => n + 1);
    setInputVal('');
    setTyping(true);

    if (responseTimerRef.current) clearTimeout(responseTimerRef.current);
    const delay = 900 + Math.random() * 600;
    responseTimerRef.current = setTimeout(() => {
      const replyText = BOT_RESPONSES[text.trim()] ?? DEFAULT_RESPONSE;
      const botMsg: Message = { id: idCounter + 1, from: 'bot', text: replyText, ts: Date.now() };
      setTyping(false);
      setMessages((prev) => [...prev, botMsg]);
      setIdCounter((n) => n + 2);
    }, delay);
  };

  const handleSend = () => sendMessage(inputVal);
  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); }
  };

  return (
    <div className="fixed bottom-6 right-5 z-[200] flex flex-col items-end gap-2">
      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="w-[340px] sm:w-[360px] rounded-2xl overflow-hidden shadow-2xl shadow-black/60 border border-white/10 flex flex-col"
            style={{ height: '500px', background: '#0D1117' }}
          >
            {/* Header */}
            <div className="bg-[#111827] px-4 py-3 flex items-center justify-between border-b border-white/[0.07] flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-foreground">Dhrona AI Assistant</span>
                    <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-none mt-0.5">
                    Ask me anything about our services
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="w-7 h-7 rounded-lg flex items-center justify-center text-muted-foreground hover:bg-white/10 hover:text-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 scroll-smooth">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.from === 'bot'
                        ? 'bg-[#1a2236] text-foreground rounded-tl-sm'
                        : 'bg-primary text-white rounded-tr-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {typing && (
                <div className="flex justify-start">
                  <div className="bg-[#1a2236] rounded-2xl rounded-tl-sm">
                    <TypingDots />
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick replies */}
            {messages.length <= 2 && !typing && (
              <div className="px-3 pb-2 flex flex-wrap gap-1.5 flex-shrink-0">
                {QUICK_REPLIES.map((qr) => (
                  <button
                    key={qr}
                    onClick={() => sendMessage(qr)}
                    className="text-[11px] font-medium border border-primary/40 text-primary rounded-full px-3 py-1.5
                               hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 cursor-pointer"
                  >
                    {qr}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="border-t border-white/[0.07] px-3 py-3 flex gap-2 bg-[#111827] flex-shrink-0">
              <label htmlFor="chat-input" className="sr-only">
                Your message
              </label>
              <input
                ref={inputRef}
                id="chat-input"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Type your question..."
                aria-label="Type your question"
                className="flex-1 bg-white/[0.05] border border-white/10 rounded-xl px-3 py-2 text-sm text-foreground
                           placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-colors"
              />
              <button
                onClick={handleSend}
                disabled={!inputVal.trim() || typing}
                aria-label="Send message"
                className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-white flex-shrink-0
                           hover:bg-primary/80 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger bubble */}
      <div className="flex flex-col items-center gap-1">
        {!open && (
          <motion.span
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-semibold text-foreground bg-[#0D1117] border border-white/10 px-2.5 py-1 rounded-full shadow-sm whitespace-nowrap"
          >
            Try Dhrona AI
          </motion.span>
        )}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close chat' : 'Open chat'}
          className="relative w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white shadow-xl shadow-primary/30
                     hover:scale-110 active:scale-95 transition-transform duration-200"
        >
          {/* Pulse ring */}
          {!open && (
            <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
          )}
          <AnimatePresence mode="wait">
            {open ? (
              <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
                <X className="w-6 h-6" />
              </motion.span>
            ) : (
              <motion.span key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
                <MessageCircle className="w-6 h-6" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Bounce keyframes injected globally via style tag trick */}
      <style>{`
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-5px); }
        }
      `}</style>
    </div>
  );
}
