"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const contactLinks = [
  {
    label: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
  },
  {
    label: personalInfo.phone,
    href: `tel:${personalInfo.phoneRaw}`,
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.4 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.34 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l1.28-1.28a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: personalInfo.telegramHandle,
    href: personalInfo.telegramUrl,
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
    external: true,
  },
];

export default function Contacts() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contacts"
      aria-label="Контакты"
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
            Связаться
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
            Контакты
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={fadeUp}
            className="space-y-4"
          >
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Открыт к новым проектам и предложениям. Напишите удобным способом —
              отвечу в ближайшее время.
            </p>

            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-4 rounded-xl border border-[rgba(99,102,241,0.2)] bg-[rgba(99,102,241,0.04)] hover:border-[rgba(99,102,241,0.5)] hover:bg-[rgba(99,102,241,0.08)] transition-colors duration-200 group"
              >
                <span className="text-[#6366f1] shrink-0">{link.icon}</span>
                <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                  {link.label}
                </span>
              </a>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeUp}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 p-8 rounded-xl border border-[rgba(99,102,241,0.3)] bg-[rgba(99,102,241,0.06)] text-center">
                <svg
                  className="w-10 h-10 text-[#6366f1]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <p className="text-white font-medium">Сообщение отправлено!</p>
                <p className="text-gray-400 text-sm">Свяжусь с вами в ближайшее время.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs text-gray-400 mb-1.5"
                  >
                    Имя
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)] text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#6366f1] focus:bg-[rgba(99,102,241,0.06)] transition-colors duration-200"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs text-gray-400 mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)] text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#6366f1] focus:bg-[rgba(99,102,241,0.06)] transition-colors duration-200"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs text-gray-400 mb-1.5"
                  >
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Опишите ваш проект или задачу..."
                    className="w-full px-4 py-3 rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)] text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#6366f1] focus:bg-[rgba(99,102,241,0.06)] transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-[#6366f1] text-white rounded-xl font-medium hover:bg-[#4f46e5] active:scale-[0.98] transition-all duration-200"
                >
                  Отправить сообщение
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        variants={fadeUp}
        className="max-w-5xl mx-auto mt-20 pt-8 border-t border-[rgba(255,255,255,0.06)] text-center text-xs text-gray-600"
      >
        © {new Date().getFullYear()} Муравьёв Юрий. Все права защищены.
      </motion.footer>
    </section>
  );
}
