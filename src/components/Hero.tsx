"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

function useTypewriter(text: string, speed = 80) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (displayed.length >= text.length) return;
    const timeout = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed);
    return () => clearTimeout(timeout);
  }, [displayed, text, speed]);

  return displayed;
}

export default function Hero() {
  const typedTitle = useTypewriter(personalInfo.title, 80);

  return (
    <section
      id="hero"
      aria-label="Главная"
      className="min-h-screen flex items-center justify-center px-4 py-24 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.12)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#6366f1] text-xs font-mono tracking-[0.25em] uppercase mb-6"
        >
          Личный сайт
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-5 leading-tight"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="text-xl sm:text-2xl md:text-3xl font-mono text-[#6366f1] mb-6 h-10 flex items-center justify-center gap-1"
        >
          <span>{typedTitle}</span>
          <span className="animate-cursor text-[#6366f1]">|</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="text-base sm:text-lg text-gray-400 mb-12 max-w-xl mx-auto"
        >
          {personalInfo.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a
            href={personalInfo.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-[#6366f1] text-white rounded-xl font-medium hover:bg-[#4f46e5] transition-colors duration-200"
          >
            <svg
              className="w-4 h-4 shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            Telegram
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center justify-center gap-2 px-6 py-3 border border-[rgba(99,102,241,0.4)] text-white rounded-xl font-medium hover:border-[#6366f1] hover:bg-[rgba(99,102,241,0.08)] transition-colors duration-200"
          >
            <svg
              className="w-4 h-4 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M2 7l10 7 10-7" />
            </svg>
            Email
          </a>

          <a
            href={`tel:${personalInfo.phoneRaw}`}
            className="flex items-center justify-center gap-2 px-6 py-3 border border-[rgba(99,102,241,0.4)] text-white rounded-xl font-medium hover:border-[#6366f1] hover:bg-[rgba(99,102,241,0.08)] transition-colors duration-200"
          >
            <svg
              className="w-4 h-4 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.4 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.34 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l1.28-1.28a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Телефон
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="mt-16"
        >
          <a
            href="#about"
            aria-label="Прокрутить вниз"
            className="inline-flex flex-col items-center gap-1 text-gray-600 hover:text-[#6366f1] transition-colors duration-200"
          >
            <svg
              className="w-5 h-5 animate-bounce"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
