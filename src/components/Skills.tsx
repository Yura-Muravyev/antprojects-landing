"use client";

import React from "react";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const categoryIcons: Record<string, React.ReactElement> = {
  Управление: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  Анализ: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M2 20h.01M7 20v-4M12 20v-8M17 20V8M22 4v16" />
    </svg>
  ),
  Технологии: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
};

export default function Skills() {
  return (
    <section
      id="skills"
      aria-label="Навыки"
      className="py-24 px-4"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeUp}
          className="mb-14"
        >
          <span className="text-[#6366f1] text-xs font-mono tracking-[0.25em] uppercase">
            Компетенции
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
            Навыки
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {skills.map((group, i) => (
            <motion.article
              key={group.category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              variants={fadeUp}
              className="p-6 rounded-xl border border-[rgba(99,102,241,0.2)] bg-[rgba(99,102,241,0.04)] hover:border-[rgba(99,102,241,0.4)] transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[#6366f1]">
                  {categoryIcons[group.category]}
                </span>
                <h3 className="text-base font-semibold text-white">
                  {group.category}
                </h3>
              </div>

              <ul className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium text-gray-300 rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] hover:border-[rgba(99,102,241,0.4)] hover:text-[#6366f1] transition-colors duration-200"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
