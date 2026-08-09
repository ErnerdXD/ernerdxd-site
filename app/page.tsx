export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-neutral-400">
          Portfolio
        </p>
        <h1 className="text-5xl font-bold leading-tight sm:text-6xl">
          Ernest <span className="text-cyan-400">(ErnerdXD)</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-neutral-300">
          I build web projects, learn in public, and ship fast. Welcome to my
          corner of the internet.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://github.com/ErnerdXD"
            target="_blank"
            className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-black transition hover:opacity-90"
          >
            GitHub
          </a>
          <a
            href="mailto:youremail@example.com"
            className="rounded-xl border border-neutral-700 px-5 py-3 font-semibold transition hover:border-neutral-500"
          >
            Contact Me
          </a>
        </div>
      </section>

      <section className="mx-auto grid max-w-4xl gap-4 px-6 pb-20 sm:grid-cols-2">
        {[
          {
            title: "Project One",
            desc: "Short description of your project and what it does.",
            link: "#",
          },
          {
            title: "Project Two",
            desc: "Another project with a clear, simple description.",
            link: "#",
          },
        ].map((project) => (
          <a
            key={project.title}
            href={project.link}
            className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5 transition hover:border-cyan-400/60"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-2 text-neutral-400">{project.desc}</p>
          </a>
        ))}
      </section>
    </main>
  );
}