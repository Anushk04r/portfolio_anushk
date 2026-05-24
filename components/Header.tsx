"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [activeItem, setActiveItem] = useState("ABOUT");
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navItems = [
    { name: "ABOUT", href: "#about" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "PROJECTS", href: "#projects" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 glass-panel rounded-full p-2 flex items-center justify-between shadow-2xl"
    >
      <nav className="flex items-center gap-1 md:gap-2 text-xs md:text-sm font-medium tracking-wider">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => setActiveItem(item.name)}
            className={`relative px-4 py-2 rounded-full transition-colors duration-300 z-10 ${
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
    </motion.header>
  );
}
