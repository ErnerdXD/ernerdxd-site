const projects = [
  {
    title: "Project One",
    description: "A full-stack web app focused on performance, clean UI, and great user experience.",
    href: "#",
    stack: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "Project Two",
    description: "A practical tool that solves a real workflow problem with a fast, responsive interface.",
    href: "#",
    stack: ["React", "Node.js", "API"],
  },
  {
    title: "Project Three",
    description: "An experimental project where I explored product design, iteration, and rapid shipping.",
    href: "#",
    stack: ["Vercel", "Postgres", "UX"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070b14] text-slate-100 selection:bg-cyan-300 selection:text-black">
      {/* subtle background glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(40rem 40rem at 15% -10%, rgba(34,211,238,0.18), transparent 60%), radial-gradient(30rem 30rem at 90% 10%, rgba(99,102,241,0.16), transparent 60%), radial-gradient(35rem 35rem at 50% 110%, rgba(16,185,129,0.12), transparent 60%)",
        }}
      />

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pt-24">
        {/* nav */}
        <header className="mb-16 flex items-center justify-between">
          <p className="text-sm font-medium tracking-[0.2em] text-cyan-300/90">
            ERNERDXD
          </p>
          <a
            href="https://github.com/ErnerdXD"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur transition hover:border-cyan-300/60 hover:text-cyan-200"
          >
            GitHub ↗
          </a>
        </header>

        {/* hero */}
        <div className="grid gap-10 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
          <div>
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
              clarity, and real-world impact. I enjoy turning ideas into polished,
              production-ready products.
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
          </div>

          {/* quick card */}
          <aside className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
              Currently
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-200">
              <li>🚀 Building web apps with Next.js</li>
              <li>🧠 Learning in public</li>
              <li>⚡ Shipping fast on Vercel</li>
            </ul>
          </aside>
        </div>
      </section>

      {/* projects */}
      <section id="projects" className="mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-bold sm:text-3xl">Featured Projects</h2>
          <span className="text-sm text-slate-400">{projects.length} selected</span>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noreferrer"
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
                Open Project ↗
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* footer */}
      <footer className="mx-auto max-w-6xl px-6 pb-10">
        <div className="flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Ernest (ErnerdXD). All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ErnerdXD"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-cyan-200"
            >
              GitHub
            </a>
            <a
              href="mailto:youremail@example.com"
              className="transition hover:text-cyan-200"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}