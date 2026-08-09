"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const skills = {
  "Frontend": ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  "Backend / Data": ["Python", "REST APIs", "Supabase", "PostgreSQL"],
  "AI / CV": ["OpenCV", "YOLO", "Model Integration"],
  "Tools": ["Git", "GitHub", "Vercel", "Figma"],
};

const projects = [
  {
    title: "Face Mask Detection Attendance System",
    description:
      "Computer vision solution that detects mask usage and streamlines attendance workflows with practical admin tooling.",
    href: "https://github.com/ErnerdXD/Face-Mask-Detection-Attendance-System",
    stack: ["Python", "OpenCV", "Computer Vision"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.main
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.45 } }}
            className="fixed inset-0 z-[100] grid place-items-center bg-[#050814] text-slate-100"
          >
            <div className="flex flex-col items-center gap-5">
              <motion.div
                className="h-14 w-14 rounded-full border-4 border-cyan-300/20 border-t-cyan-300"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
              />
              <motion.p
                initial={{ opacity: 0.4 }}
                animate={{ opacity: 1 }}
                transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.8 }}
                className="text-xs tracking-[0.35em] text-cyan-200"
              >
                LOADING
              </motion.p>
            </div>
          </motion.main>
        )}
      </AnimatePresence>

      {!loading && (
        <main className="min-h-screen bg-[#050814] text-slate-100 selection:bg-cyan-300 selection:text-black">
          <div
            aria-hidden
            className="pointer-events-none fixed inset-0 -z-10"
            style={{
              background:
                "radial-gradient(42rem 42rem at 10% -10%, rgba(34,211,238,0.16), transparent 60%), radial-gradient(30rem 30rem at 95% 5%, rgba(99,102,241,0.16), transparent 60%), radial-gradient(32rem 32rem at 50% 110%, rgba(16,185,129,0.10), transparent 60%)",
            }}
          />

          <section className="mx-auto max-w-6xl px-6 pb-16 pt-14 sm:pt-20">
            <motion.nav
              initial="hidden"
              animate="show"
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              className="mb-14 flex items-center justify-between"
            >
              <p className="text-sm font-semibold tracking-[0.22em] text-cyan-300/90">
                ERNERDXD
              </p>
              <div className="flex items-center gap-2 sm:gap-3">
                <a
                  href="https://github.com/ErnerdXD"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur transition hover:border-cyan-300/60 hover:text-cyan-200"
                >
                  GitHub ?
                </a>
              </div>
            </motion.nav>

            <div className="grid gap-10 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
              <motion.div
                initial="hidden"
                animate="show"
                variants={fadeUp}
                transition={{ duration: 0.6, delay: 0.08 }}
              >
                <p className="mb-4 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
                  Software Developer
                </p>
                <h1 className="text-4xl font-black leading-[1.05] sm:text-6xl">
                  Hi, I&apos;m{" "}
                  <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                    Ernest
                  </span>
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                  I build practical products and intelligent systems — from modern web apps to
                  computer vision solutions — with a focus on speed, usability, and impact.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#projects"
                    className="rounded-xl bg-gradient-to-r from-cyan-300 to-sky-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:brightness-110"
                  >
                    View Projects
                  </a>
                  <a
                    href="#contact"
                    className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 backdrop-blur transition hover:border-white/35"
                  >
                    Contact
                  </a>
                </div>
              </motion.div>

              <motion.aside
                initial="hidden"
                animate="show"
                variants={fadeUp}
                transition={{ duration: 0.6, delay: 0.18 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Now</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-200">
                  <li>?? Shipping portfolio improvements</li>
                  <li>?? Exploring AI + CV projects</li>
                  <li>? Building production-ready features</li>
                </ul>
              </motion.aside>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-6 pb-16" id="skills">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <h2 className="text-2xl font-bold sm:text-3xl">Skills</h2>
              <p className="mt-2 text-slate-400">Technologies I use to design, build, and ship.</p>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-2">
              {Object.entries(skills).map(([group, items], idx) => (
                <motion.div
                  key={group}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan-200/90">
                    {group}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section id="projects" className="mx-auto max-w-6xl px-6 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex items-end justify-between"
            >
              <h2 className="text-2xl font-bold sm:text-3xl">Featured Projects</h2>
              <span className="text-sm text-slate-400">{projects.length} selected</span>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project, i) => (
                <motion.a
                  key={project.title}
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-cyan-300/60"
                >
                  <h3 className="text-lg font-semibold text-slate-100 group-hover:text-cyan-200">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <p className="mt-5 text-sm font-medium text-cyan-200/90">Open Project ?</p>
                </motion.a>
              ))}
            </div>
          </section>

          <section id="contact" className="mx-auto max-w-6xl px-6 pb-20">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8"
            >
              <h2 className="text-2xl font-bold sm:text-3xl">Let&apos;s build something</h2>
              <p className="mt-3 max-w-2xl text-slate-300">
                I&apos;m open to collaborations, internships, and freelance opportunities.
                Reach out and let&apos;s talk.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="mailto:youremail@example.com"
                  className="rounded-xl bg-gradient-to-r from-cyan-300 to-sky-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:brightness-110"
                >
                  Email Me
                </a>
                <a
                  href="https://github.com/ErnerdXD"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/35"
                >
                  GitHub Profile
                </a>
              </div>
            </motion.div>
          </section>
        </main>
      )}
    </>
  );
}
