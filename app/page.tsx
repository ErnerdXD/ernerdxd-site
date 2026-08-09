"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Face Mask Detection Attendance System",
    description:
      "Computer vision project that detects face masks and supports attendance tracking workflows.",
    href: "https://github.com/ErnerdXD/Face-Mask-Detection-Attendance-System",
    stack: ["Python", "Computer Vision", "OpenCV"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070b14] text-slate-100 selection:bg-cyan-300 selection:text-black">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(40rem 40rem at 15% -10%, rgba(34,211,238,0.18), transparent 60%), radial-gradient(30rem 30rem at 90% 10%, rgba(99,102,241,0.16), transparent 60%), radial-gradient(35rem 35rem at 50% 110%, rgba(16,185,129,0.12), transparent 60%)",
        }}
      />

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pt-24">
        <motion.header
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.45 }}
          className="mb-16 flex items-center justify-between"
        >
          <p className="text-sm font-medium tracking-[0.2em] text-cyan-300/90">
            ERNERDXD
          </p>
          <a
            href="https://github.com/ErnerdXD"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur transition hover:border-cyan-300/60 hover:text-cyan-200"
          >
            GitHub ?
          </a>
        </motion.header>

        <div className="grid gap-10 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <p className="mb-4 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
              Portfolio
            </p>
            <h1 className="text-4xl font-black leading-[1.05] sm:text-6xl">
              Ernest{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                (ErnerdXD)
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              I design and build modern web experiences with a focus on speed,
              clarity, and real-world impact.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-xl bg-gradient-to-r from-cyan-300 to-sky-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:brightness-110"
              >
                View Projects
              </a>
              <a
                href="mailto:youremail@example.com"
                className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 backdrop-blur transition hover:border-white/35"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          <motion.aside
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
          >
            <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
              Currently
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-200">
              <li>?? Building web apps</li>
              <li>?? Learning in public</li>
              <li>? Shipping fast</li>
            </ul>
          </motion.aside>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 pb-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-end justify-between"
        >
          <h2 className="text-2xl font-bold sm:text-3xl">Featured Project</h2>
          <span className="text-sm text-slate-400">{projects.length} selected</span>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
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

              <p className="mt-5 text-sm font-medium text-cyan-200/90">
                Open Project ?
              </p>
            </motion.a>
          ))}
        </div>
      </section>
    </main>
  );
}
