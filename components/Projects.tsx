"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "PrepAlgo AI — DSA Tracker & Interview Assistant",
      tech: ["React", "Node.js", "MongoDB", "Redis", "LLM Microservice"],
      description: [
        "Full-stack DSA preparation platform enabling users to track LeetCode/GFG problems and maintain structured notes.",
        "LLM-powered interview assistant microservice providing guided hints, complexity analysis, and mock interviews.",
        "Interactive dashboard with LeetCode heatmaps, solved-question metrics, and responsive ChatGPT-style UI/UX."
      ],
      colSpan: "lg:col-span-2",
    },
    {
      title: "YouTube RAG Chatbot",
      tech: ["Python", "LangChain", "React", "ChromaDB"],
      description: [
        "Retrieval-Augmented Generation (RAG) pipeline using HuggingFace embeddings to perform semantic search over video transcripts.",
        "LLM-powered chatbot to answer user queries and generate summaries, strictly grounded in retrieved video content."
      ],
      colSpan: "lg:col-span-1",
    },
    {
      title: "Uploadify",
      tech: ["React", "TypeScript", "NextAuth", "Docker"],
      description: [
        "Full-stack web application for uploading, managing, and delivering user-generated images.",
        "Integrated ImageKit for dynamic image uploads, real-time transformations, and optimized content delivery."
      ],
      colSpan: "lg:col-span-1",
    },
    {
      title: "AI Semantic Search",
      tech: ["Next.js", "OpenAI", "Pinecone", "TailwindCSS"],
      description: [
        "Vector search engine leveraging OpenAI embeddings to provide incredibly accurate search results across large document datasets.",
        "Blazing fast semantic matching capabilities outperforming standard lexical search methods."
      ],
      colSpan: "lg:col-span-2",
    }
  ];

  return (
    <section id="projects" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-4">
          Projects
        </h2>
        <div className="h-1 w-20 bg-accent rounded-full" />
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`glass-panel p-8 rounded-3xl flex flex-col h-full border border-white/5 hover:border-accent/40 hover:bg-white/5 transition-all duration-500 group relative overflow-hidden ${project.colSpan || ''}`}
          >
            {/* Background gradient effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-blue-600/5 transition-colors duration-500" />
            
            <div className="relative z-10 flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-white leading-tight group-hover:text-accent transition-colors duration-300">
                {project.title}
              </h3>
              <div className="flex gap-4 text-gray-400">
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-white transition-all duration-300"><FaGithub className="w-5 h-5" /></a>
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent/20 hover:text-accent transition-all duration-300"><ExternalLink className="w-5 h-5" /></a>
              </div>
            </div>

            <div className="relative z-10 flex flex-wrap gap-2 mb-8">
              {project.tech.map((t, i) => (
                <span key={i} className="text-xs font-semibold px-4 py-1.5 bg-background/50 rounded-full text-gray-300 border border-white/10 group-hover:border-white/20 transition-colors">
                  {t}
                </span>
              ))}
            </div>

            <ul className="relative z-10 mt-auto space-y-4 text-sm text-gray-400 leading-relaxed">
              {project.description.map((desc, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-accent/60 mt-0.5 font-bold">»</span>
                  <span className="group-hover:text-gray-300 transition-colors duration-300">{desc}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
