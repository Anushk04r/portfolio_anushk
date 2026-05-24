"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate sending
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <section id="contact" className="py-24 relative">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-4">
          Contact
        </h2>
        <div className="h-1 w-20 bg-accent rounded-full" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto px-6"
      >
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-accent/30 transition-colors duration-500">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] group-hover:bg-accent/10 transition-colors duration-500 pointer-events-none" />
          
          <h3 className="text-3xl md:text-4xl font-heading font-bold mb-3 text-white leading-tight">
            Let&apos;s build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">great</span> together.
          </h3>
          <p className="text-gray-400 mb-10 text-lg">Reach out if you want to collaborate on a project, or just want to say hi.</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2 group/input">
                <label htmlFor="name" className="text-sm text-gray-400 font-medium tracking-wide group-focus-within/input:text-accent transition-colors">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="bg-background/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all shadow-inner placeholder:text-gray-600"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-2 group/input">
                <label htmlFor="email" className="text-sm text-gray-400 font-medium tracking-wide group-focus-within/input:text-accent transition-colors">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="bg-background/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all shadow-inner placeholder:text-gray-600"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 group/input">
              <label htmlFor="subject" className="text-sm text-gray-400 font-medium tracking-wide group-focus-within/input:text-accent transition-colors">Subject</label>
              <input
                type="text"
                id="subject"
                required
                className="bg-background/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all shadow-inner placeholder:text-gray-600"
                placeholder="Collaboration opportunity"
              />
            </div>

            <div className="flex flex-col gap-2 group/input">
              <label htmlFor="message" className="text-sm text-gray-400 font-medium tracking-wide group-focus-within/input:text-accent transition-colors">Message</label>
              <textarea
                id="message"
                required
                rows={5}
                className="bg-background/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all shadow-inner resize-none placeholder:text-gray-600"
                placeholder="Tell me about your project..."
              />
            </div>

            <motion.button
              whileHover={status === "idle" ? { scale: 1.02 } : {}}
              whileTap={status === "idle" ? { scale: 0.98 } : {}}
              type="submit"
              disabled={status === "loading" || status === "success"}
              className={`mt-4 font-bold rounded-xl px-8 py-4 flex items-center justify-center gap-3 transition-all duration-300 ${
                status === "idle" 
                  ? "bg-accent text-black hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]" 
                  : status === "loading"
                  ? "bg-white/10 text-gray-300 cursor-wait"
                  : "bg-green-500/20 text-green-400 border border-green-500/50 cursor-default"
              }`}
            >
              {status === "idle" && (
                <>
                  <span>SEND MESSAGE</span>
                  <Send className="w-5 h-5" />
                </>
              )}
              {status === "loading" && (
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 border-2 border-gray-300 border-t-transparent rounded-full animate-spin" />
                  <span>SENDING...</span>
                </div>
              )}
              {status === "success" && (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  <span>MESSAGE SENT!</span>
                </>
              )}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
