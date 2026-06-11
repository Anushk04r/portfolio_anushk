"use client";

import { motion, Variants } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function AboutSection() {
  const cvPath = "/CV_Anushk_Prakash.pdf";

  const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

  const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="flex flex-col h-full justify-center lg:pl-8"
    >
      <motion.h1 
        variants={itemVariants}
        className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-4 uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500"
      >
        About Me
      </motion.h1>
      
      <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
        <div className="h-px w-12 bg-accent" />
        <h3 className="text-xl md:text-2xl text-accent font-medium uppercase tracking-widest">
          Hi, I am Anushk Prakash
        </h3>
      </motion.div>
      
      <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-10 text-gray-100 leading-tight">
        Software Developer & <br className="hidden md:block"/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">Full Stack Engineer</span>
      </motion.h2>

      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-gray-400 leading-relaxed text-sm md:text-base font-light">
        <p>
          I&apos;m Anushk Prakash &ndash; a passionate software developer currently pursuing my B.Tech in <span className="text-gray-200 font-medium">Electronics and Communication Engineering (IoT)</span> at NSUT, New Delhi. I love building highly scalable web architectures and solving real-world problems through robust code. Whether it&apos;s crafting clean UI designs or optimizing complex backend workflows, I&apos;m always eager to learn, create, and grow.
        </p>
        <p>
          I&apos;m deeply driven by curiosity and a commitment to <span className="text-gray-200 font-medium">engineering excellence</span>. From developing event-driven notification platforms to experimenting with advanced <span className="text-gray-200 font-medium">LLM and RAG integrations</span>, I enjoy pushing boundaries and turning ideas into tangible, high-impact solutions.
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6">
        <a
          href={cvPath}
          download
          className="relative flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors group overflow-hidden"
        >
          <div className="absolute inset-0 bg-accent/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <span className="relative z-10">Download CV</span>
          <Download className="w-4 h-4 relative z-10 group-hover:-translate-y-1 group-hover:text-accent transition-all" />
        </a>

        <div className="flex items-center gap-4">
          {[
            { icon: <FaGithub className="w-5 h-5" />, href: "#" },
            { icon: <FaLinkedin className="w-5 h-5" />, href: "#" },
            { icon: <FaInstagram className="w-5 h-5" />, href: "#" },
          ].map((social, i) => (
            <a 
              key={i} 
              href={social.href} 
              className="p-4 bg-white/5 rounded-full border border-white/10 hover:bg-accent/10 hover:border-accent hover:text-accent transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/20"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
