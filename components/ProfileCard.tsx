"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import React from "react";

export default function ProfileCard() {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-accent" />,
      label: "EMAIL",
      value: "anushkprakash04@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5 text-accent" />,
      label: "PHONE",
      value: "+91 8810370023",
    },
    {
      icon: <FaLinkedin className="w-5 h-5 text-accent" />,
      label: "LINKEDIN",
      value: "Anushk Prakash",
    },
    {
      icon: <MapPin className="w-5 h-5 text-accent" />,
      label: "LOCATION",
      value: "Delhi, India",
    },
  ];

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{ perspective: 1000 }}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="h-full w-full"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="glass-panel rounded-2xl p-6 md:p-8 flex flex-col items-center h-full border border-white/5 shadow-[0_0_40px_rgba(6,182,212,0.1)] relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        {/* Avatar Container */}
        <div 
          style={{ transform: "translateZ(30px)" }}
          className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden mb-6 bg-gray-800 border-2 border-white/10 flex items-center justify-center shadow-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 opacity-50 transition-opacity" />
          <svg
            className="w-24 h-24 text-gray-500 relative z-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>

        <h2 
          style={{ transform: "translateZ(20px)" }}
          className="text-2xl font-heading font-bold tracking-wider mb-8 text-center uppercase"
        >
          Anushk Prakash
        </h2>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

        <div 
          style={{ transform: "translateZ(10px)" }}
          className="w-full flex flex-col gap-6"
        >
          {contactInfo.map((info, idx) => (
            <div key={idx} className="flex items-center gap-4 group/item">
              <div className="p-3 bg-white/5 rounded-xl border border-white/5 group-hover/item:border-accent/50 group-hover/item:bg-accent/10 transition-all duration-300">
                {info.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-400 font-medium tracking-wider mb-1 group-hover/item:text-accent/80 transition-colors">
                  {info.label}
                </span>
                <span className="text-sm text-gray-100 font-medium truncate max-w-[180px] group-hover/item:text-white transition-colors">
                  {info.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
