import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      name:        (fd.get('name')        as string) ?? '',
      company:     (fd.get('company')     as string) ?? '',
      email:       (fd.get('email')       as string) ?? '',
      phone:       (fd.get('phone')       as string) ?? '',
      industry:    (fd.get('industry')    as string) ?? '',
      service:     (fd.get('service')     as string) ?? '',
      description: (fd.get('description') as string) ?? '',
      budget:      (fd.get('budget')      as string) ?? '',
    };

    try {
      const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL as string | undefined)?.replace(/\/$/, '') ?? '';
      const res = await fetch(`${apiBaseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json() as { success?: boolean; error?: string };

      if (res.ok && data.success) {
        toast({
          title: '✅ Message Sent Successfully!',
          description: "We've received your requirements and will get back to you within 24 hours.",
        });
        form.reset();
      } else {
        toast({
          title: 'Something went wrong',
          description: data.error ?? 'Please try again or contact us on WhatsApp.',
          variant: 'destructive',
        });
      }
    } catch {
      toast({
        title: 'Network Error',
        description: 'Could not reach the server. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Let's Build Something Intelligent Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Tell us about your project — we'll get back to you within 24 hours.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <p className="text-muted-foreground mb-8">
              Whether you need a custom AI agent, a full-scale platform, or just want to explore how AI can help your business — we're here to talk.
            </p>

            <div className="space-y-6">
              <a href="mailto:annarapuvirupaksh@gmail.com" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group">
                <div className="w-12 h-12 rounded-full bg-card border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium">annarapuvirupaksh@gmail.com</span>
              </a>

              <a href="tel:+916305567851" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group">
                <div className="w-12 h-12 rounded-full bg-card border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium">+91 63055 67851</span>
              </a>

              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="w-12 h-12 rounded-full bg-card border border-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="font-medium block text-foreground">Hyderabad, India</span>
                  <span className="text-sm">Based in India. Available globally.</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 bg-card border border-white/5 p-6 sm:p-8 rounded-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-sm font-medium text-muted-foreground">Full Name</label>
                  <input
                    id="contact-name" name="name" required type="text"
                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-company" className="text-sm font-medium text-muted-foreground">Company / Organization</label>
                  <input
                    id="contact-company" name="company" type="text"
                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="Acme Corp"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-sm font-medium text-muted-foreground">Email Address</label>
                  <input
                    id="contact-email" name="email" required type="email"
                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-phone" className="text-sm font-medium text-muted-foreground">Phone Number</label>
                  <input
                    id="contact-phone" name="phone" required type="tel"
                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-industry" className="text-sm font-medium text-muted-foreground">Industry / Domain</label>
                  <select
                    id="contact-industry" name="industry" required defaultValue=""
                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none"
                  >
                    <option value="" disabled>Select Industry</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Defense">Defense</option>
                    <option value="Education">Education</option>
                    <option value="Salon">Salon</option>
                    <option value="School">School</option>
                    <option value="Retail">Retail</option>
                    <option value="Finance">Finance</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-service" className="text-sm font-medium text-muted-foreground">Service Interested In</label>
                  <select
                    id="contact-service" name="service" required defaultValue=""
                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none"
                  >
                    <option value="" disabled>Select Service</option>
                    <option value="AI Chatbot">AI Chatbot</option>
                    <option value="Voice AI Agent">Voice AI Agent</option>
                    <option value="WhatsApp Automation">WhatsApp Automation</option>
                    <option value="Website Development">Website Development</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-description" className="text-sm font-medium text-muted-foreground">Project Description</label>
                <textarea
                  id="contact-description" name="description" required rows={3}
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                  placeholder="Tell us briefly about what you want to build..."
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-budget" className="text-sm font-medium text-muted-foreground">Budget Range</label>
                <select
                  id="contact-budget" name="budget" required defaultValue=""
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none"
                >
                  <option value="" disabled>Select Budget</option>
                  <option value="Under ₹50K">Under ₹50K</option>
                  <option value="₹50K–₹2L">₹50K – ₹2L</option>
                  <option value="₹2L–₹5L">₹2L – ₹5L</option>
                  <option value="₹5L+">₹5L+</option>
                  <option value="Let's discuss">Let's discuss</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>Send My Requirements <Send className="w-5 h-5" /></>
                )}
              </button>
            </form>

            <div className="mt-8 text-center border-t border-white/10 pt-6">
              <p className="text-muted-foreground mb-4">Or reach us directly on WhatsApp</p>
              <a
                href="https://wa.me/916305567851"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#25D366] px-8 text-base font-bold text-white transition-all hover:bg-[#25D366]/90 hover:scale-105"
              >
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
