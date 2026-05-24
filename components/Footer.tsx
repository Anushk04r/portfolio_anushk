"use client";

import Link from "next/link";
import { Mail, Code2 } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full glass-panel border-t border-white/10 rounded-t-[3rem] mt-12 pt-16 pb-8 px-8 md:px-16 flex flex-col md:flex-row justify-between items-center gap-12 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Left: Nav Stack */}
      <div className="flex flex-col items-center md:items-start gap-4 z-10">
        <Link href="#about" className="text-sm font-semibold tracking-wider text-gray-400 hover:text-accent transition-colors">ABOUT</Link>
        <Link href="#experience" className="text-sm font-semibold tracking-wider text-gray-400 hover:text-accent transition-colors">EXPERIENCE</Link>
        <Link href="#projects" className="text-sm font-semibold tracking-wider text-gray-400 hover:text-accent transition-colors">PROJECTS</Link>
        <Link href="#contact" className="text-sm font-semibold tracking-wider text-gray-400 hover:text-accent transition-colors">CONTACT</Link>
      </div>

      {/* Center: Let's Talk */}
      <div className="flex flex-col items-center gap-6 z-10">
        <h2 className="text-4xl md:text-5xl font-heading font-black tracking-widest text-white uppercase text-center" style={{ textShadow: "0 4px 20px rgba(34,211,238,0.3)" }}>
          Let&apos;s Talk
        </h2>
        <div className="flex items-center gap-4">
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-accent hover:border-accent/50 hover:bg-white/10 transition-all">
            <FaGithub className="w-4 h-4" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-accent hover:border-accent/50 hover:bg-white/10 transition-all">
            <FaLinkedin className="w-4 h-4" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-accent hover:border-accent/50 hover:bg-white/10 transition-all">
            <FaInstagram className="w-4 h-4" />
          </a>
          <a href="mailto:anushkprakash04@gmail.com" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-accent hover:border-accent/50 hover:bg-white/10 transition-all">
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Right: Created By */}
      <div className="flex flex-col items-center md:items-end gap-8 z-10">
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-500 font-medium">Created by</span>
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 py-1.5 px-3 rounded-full">
            <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
              <Code2 className="w-3 h-3 text-accent" />
            </div>
            <span className="text-xs font-bold text-gray-200">ANUSHK PRAKASH</span>
          </div>
        </div>
        
        <span className="text-xs text-gray-600 font-medium">
          &copy; {currentYear} All Rights Reserved
        </span>
      </div>
    </footer>
  );
}
