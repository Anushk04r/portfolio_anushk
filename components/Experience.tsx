"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { useState } from "react";

export default function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const experiences = [
    {
      company: "WorkWall",
      location: "Delhi, India",
      role: "Software Developer",
      date: "Apr 2026 — Present",
      achievements: [
        "Engineered and scaled an event-driven omnichannel notification platform processing 50K+ events/day across WhatsApp, Email and push notifications using Twilio, Firebase, and SendGrid, reducing P95 delivery latency by 60%.",
        "Developed a semantic candidate search engine across 100K+ profiles using NLP-based intent extraction, Redis caching, and ranking optimization, improving search relevance by 75% and reducing response time from 8s to 1.2s.",
        "Automated end-to-end contract lifecycle workflows using DocuSign APIs, GCP schedulers, and backend automation services, reducing document turnaround time from 3 days to under 2 hours."
      ]
    },
    {
      company: "Critical Insights India Pvt. Ltd.",
      location: "Delhi, India",
      role: "Software Developer",
      date: "Dec 2025 — Mar 2026",
      achievements: [
        "Contributing to enterprise healthcare products in an Agile squad environment using Angular, Spring Boot, and PostgreSQL.",
        "Built a face-recognition-based authentication system using FaceNet embeddings stored in PostgreSQL.",
        "Designed and implemented a real-time speech-to-text pipeline for clinical documentation, enabling live dictation during patient rounds with low-latency inference.",
        "Integrated LLMs for post-processing to automatically refine raw transcripts into structured clinical summaries."
      ]
    },
    {
      company: "SIS Group Enterprises",
      location: "Delhi, India",
      role: "Software Developer Intern",
      date: "Jun 2025 — Aug 2025",
      achievements: [
        "Built and deployed 15+ production React components from Figma specifications, integrating REST APIs across AWS S3/EC2 environments in a cross-functional team."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-4">
          Experience
        </h2>
        <div className="h-1 w-20 bg-accent rounded-full" />
      </motion.div>

      <div className="max-w-5xl mx-auto px-6 relative" onMouseLeave={() => setHoveredIndex(null)}>
        {/* Timeline line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent md:-translate-x-1/2" />

        <div className="flex flex-col gap-16 md:gap-24">
          {experiences.map((exp, idx) => {
            const isHovered = hoveredIndex === idx;
            const isDimmed = hoveredIndex !== null && !isHovered;

            return (
              <motion.div
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 transition-opacity duration-500 ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                } ${isDimmed ? "opacity-30 blur-[2px]" : "opacity-100"}`}
              >
                {/* Timeline dot */}
                <div 
                  className={`absolute left-8 md:left-1/2 w-5 h-5 rounded-full border-4 border-background -translate-x-[9px] md:-translate-x-1/2 mt-6 md:mt-8 z-10 transition-colors duration-300 ${
                    isHovered ? "bg-accent shadow-[0_0_20px_rgba(6,182,212,0.8)]" : "bg-gray-600"
                  }`}
                />

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-1/2 glass-panel p-8 rounded-3xl transition-all duration-300 ${
                  isHovered ? "border-accent/50 shadow-[0_0_30px_rgba(6,182,212,0.15)] -translate-y-2 bg-white/10" : "border-white/5 bg-white/5"
                }`}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div className="flex items-center gap-3 mb-2 md:mb-0">
                      <div className={`p-2 rounded-lg transition-colors ${isHovered ? "bg-accent/20" : "bg-white/10"}`}>
                        <Briefcase className={`w-5 h-5 ${isHovered ? "text-accent" : "text-gray-400"}`} />
                      </div>
                      <h3 className="text-xl font-bold text-white tracking-wide">{exp.role}</h3>
                    </div>
                    <span className="text-accent font-medium text-sm md:text-base bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                      {exp.date}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-6">
                    <span className="font-semibold text-gray-200 text-lg">{exp.company}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-500" />
                    <span className="text-gray-400 text-sm">{exp.location}</span>
                  </div>

                  <ul className="space-y-4 text-gray-300 text-sm leading-relaxed">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-accent mt-1">▹</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
