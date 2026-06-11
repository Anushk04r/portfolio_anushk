"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Mail, Code2,Download } from "lucide-react";

export default function Header() {
  const [activeItem, setActiveItem] = useState("ABOUT");

  const navItems = [
    { name: "ABOUT", href: "#about" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "PROJECTS", href: "#projects" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background pt-4 pb-4">
      <div className="flex items-center justify-between w-full px-4 md:px-8 lg:px-12 xl:px-16 h-[12px] md:h-[56px] max-w-[1600px] mx-auto">
        {/* Left Section */}
        <div className="hidden lg:flex flex-1 justify-start h-full">
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-5 rounded-full h-full">
            <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
              <Code2 className="w-4 h-4 text-accent" />
            </div>
            <span className="text-sm font-bold text-gray-200">ANUSHK PRAKASH</span>
          </div>
        </div>

        {/* Center Section */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="mx-auto w-max glass-panel rounded-full p-2 flex items-center justify-between shadow-2xl h-full shrink-0"
        >
          <nav className="flex items-center gap-1 md:gap-2 text-xs md:text-sm font-medium tracking-wider h-full">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setActiveItem(item.name)}
              className={`relative px-4 md:px-5 h-full flex items-center justify-center rounded-full transition-colors duration-300 z-10 ${
                activeItem === item.name ? "text-background font-bold" : "text-gray-300 hover:text-white"
              }`}
            >
              {activeItem === item.name && (
                <motion.div
                  layoutId="active-nav-pill"
                  className="absolute inset-0 bg-accent rounded-full -z-10 shadow-[0_0_15px_var(--color-accent-glow)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {item.name}
            </Link>
          ))}
          </nav>
        </motion.div>

        {/* Right Section */}
        <div className="hidden lg:flex flex-1 justify-end h-full">
          <button className="relative flex items-center justify-center gap-2 border border-white/10 text-white px-6 lg:px-8 rounded-full font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors group overflow-hidden text-sm h-full">
            <div className="absolute inset-0 bg-accent/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10">Download CV</span>
            <Download className="w-4 h-4 relative z-10" />
          </button>
        </div>
      </div>
    </header>
  );
}
