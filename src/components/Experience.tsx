"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Experience() {
  return (
    <section
      id="experience"
      aria-label="Опыт работы"
      className="py-24 px-4"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeUp}
          className="mb-14"
        >
          <span className="text-[#6366f1] text-xs font-mono tracking-[0.25em] uppercase">
            Карьера
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
            Опыт работы
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-3 top-2 bottom-2 w-px bg-[rgba(99,102,241,0.2)]" />

          <ol className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.li
                key={exp.company}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                variants={fadeUp}
                className="relative pl-10"
              >
                {/* Timeline dot */}
                <span className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 border-[#6366f1] bg-[#0a0a0a] flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-[#6366f1]" />
                </span>

                <article className="p-6 rounded-xl border border-[rgba(99,102,241,0.2)] bg-[rgba(99,102,241,0.04)] hover:border-[rgba(99,102,241,0.4)] transition-colors duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className="text-lg font-semibold text-white">
                      {exp.company}
                    </h3>
                    <time className="text-xs font-mono text-[#6366f1] bg-[rgba(99,102,241,0.12)] px-2.5 py-1 rounded-full shrink-0">
                      {exp.period}
                    </time>
                  </div>

                  <p className="text-sm text-gray-400 mb-1">{exp.companyFull}</p>
                  <p className="text-sm font-medium text-gray-300 mb-4">
                    {exp.role}
                  </p>

                  <ul className="space-y-2">
                    {exp.results.map((result) => (
                      <li
                        key={result}
                        className="flex items-start gap-2.5 text-sm text-gray-400"
                      >
                        <svg
                          className="w-4 h-4 text-[#6366f1] mt-0.5 shrink-0"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {result}
                      </li>
                    ))}
                  </ul>
                </article>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
