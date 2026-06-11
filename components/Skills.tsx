"use client";

import { motion, Variants } from "framer-motion";
import { Code2, Database, Layout, Server, Terminal, Wrench } from "lucide-react";
import { FaFigma, FaGithub, FaReact, FaPython, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiMongodb, SiNextdotjs } from "react-icons/si";

export default function Skills() {
  const categories = [
    {
      title: "Frontend",
      icon: <Layout className="w-5 h-5 text-cyan-400" />,
      skills: [
        { name: "React", icon: <FaReact className="w-4 h-4" />, color: "text-blue-400" },
        { name: "Next.js", icon: <SiNextdotjs className="w-4 h-4" />, color: "text-white" },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4" />, color: "text-cyan-400" },
        { name: "TypeScript", icon: <SiTypescript className="w-4 h-4" />, color: "text-blue-500" },
      ]
    },
    {
      title: "Backend & Database",
      icon: <Server className="w-5 h-5 text-green-400" />,
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="w-4 h-4" />, color: "text-green-500" },
        { name: "Python", icon: <FaPython className="w-4 h-4" />, color: "text-yellow-400" },
        { name: "MongoDB", icon: <SiMongodb className="w-4 h-4" />, color: "text-green-600" },
        { name: "SQL", icon: <Database className="w-4 h-4" />, color: "text-blue-300" },
      ]
    },
    {
      title: "Tools & Others",
      icon: <Wrench className="w-5 h-5 text-purple-400" />,
      skills: [
        { name: "Git / GitHub", icon: <FaGithub className="w-4 h-4" />, color: "text-white" },
        { name: "Figma", icon: <FaFigma className="w-4 h-4" />, color: "text-pink-500" },
        { name: "Vercel", icon: <Terminal className="w-4 h-4" />, color: "text-gray-300" },
        { name: "C++", icon: <Code2 className="w-4 h-4" />, color: "text-blue-600" },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    } as const,
  },
};

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-4">
          Skills
        </h2>
        <div className="h-1 w-20 bg-accent rounded-full" />
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-panel p-8 rounded-3xl border border-white/5 bg-white/[0.02]"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold text-white tracking-wide">{cat.title}</h3>
            </div>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-4"
            >
              {cat.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 px-4 py-2 bg-background/50 rounded-full border border-white/10 hover:border-accent/50 hover:bg-white/5 transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] cursor-default group"
                >
                  <span className={`${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                    {skill.icon}
                  </span>
                  <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
