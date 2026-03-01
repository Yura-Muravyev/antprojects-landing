"use client";

import { motion } from "framer-motion";
import { aboutText, stats } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section
      id="about"
      aria-label="О себе"
      className="py-24 px-4"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeUp}
          className="mb-12"
        >
          <span className="text-[#6366f1] text-xs font-mono tracking-[0.25em] uppercase">
            Обо мне
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
            Кто я такой
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={fadeUp}
          >
            <p className="text-gray-400 text-base leading-relaxed">
              {aboutText}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeUp}
            className="grid grid-cols-3 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.article
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.25 + i * 0.1 }}
                variants={fadeUp}
                className="flex flex-col items-center justify-center text-center p-5 rounded-xl border border-[rgba(99,102,241,0.2)] bg-[rgba(99,102,241,0.04)] hover:border-[rgba(99,102,241,0.5)] hover:bg-[rgba(99,102,241,0.08)] transition-colors duration-300"
              >
                <span className="text-3xl sm:text-4xl font-bold text-[#6366f1] leading-none mb-2">
                  {stat.value}
                </span>
                <span className="text-xs text-gray-400 leading-snug">
                  {stat.label}
                </span>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
