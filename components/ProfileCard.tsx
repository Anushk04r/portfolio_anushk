"use client";

import { AnimatePresence, motion, useMotionValue, useTransform } from "framer-motion";
import { Mail, Phone, MapPin, Code2, X } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function ProfileCard() {
  const [showFallbackAvatar, setShowFallbackAvatar] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const profileImageSrc = "/profile.jpg";

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

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOverlayOpen(false);
      }
    }

    if (isOverlayOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOverlayOpen]);

  return (
    <>
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

          <button
            type="button"
            onClick={() => !showFallbackAvatar && setIsOverlayOpen(true)}
            style={{ transform: "translateZ(30px)" }}
            className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden mb-6 bg-gray-800 border-2 border-white/10 flex items-center justify-center shadow-xl cursor-zoom-in group/image"
            aria-label="Open profile photo in overlay"
          >
            {!showFallbackAvatar ? (
              <>
                <Image
                  src={profileImageSrc}
                  alt="Anushk Prakash profile photo"
                  fill
                  sizes="(max-width: 768px) 192px, 224px"
                  className="w-full h-full object-cover relative z-10 transition-transform duration-500 group-hover/image:scale-105"
                  onError={() => setShowFallbackAvatar(true)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-20 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
                <span className="absolute bottom-3 right-3 z-30 text-xs uppercase tracking-wider bg-black/60 text-white px-2 py-1 rounded-md border border-white/20 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                  Click to expand
                </span>
              </>
            ) : (
              <>
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
              </>
            )}
          </button>

          <div
            style={{ transform: "translateZ(20px)" }}
            className="w-full max-w-xs mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2 rounded-full mb-4">
              <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-accent" />
              </div>
              <span className="text-xs font-bold text-gray-200 tracking-wider uppercase">
                Anushk Prakash Code
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold tracking-wide text-white uppercase">
              Anushk Prakash
            </h2>
            <p className="text-sm text-accent/90 font-medium tracking-[0.2em] uppercase mt-2">
              Software Developer
            </p>
          </div>

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

      <AnimatePresence>
        {isOverlayOpen && !showFallbackAvatar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md p-4 md:p-8 flex items-center justify-center"
            onClick={() => setIsOverlayOpen(false)}
          >
            <motion.button
              type="button"
              onClick={() => setIsOverlayOpen(false)}
              className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Close image overlay"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-5 h-5" />
            </motion.button>

            <motion.div
              initial={{ y: 24, scale: 0.95, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 24, scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
              className="relative w-full max-w-3xl rounded-2xl overflow-hidden border border-white/20 shadow-[0_0_80px_rgba(0,0,0,0.45)]"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={profileImageSrc}
                alt="Anushk Prakash profile photo expanded"
                width={1200}
                height={1200}
                className="w-full h-auto max-h-[80vh] object-contain bg-black"
                onError={() => setIsOverlayOpen(false)}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
