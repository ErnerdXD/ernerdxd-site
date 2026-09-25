"use client";

import { motion } from "framer-motion";

const products = [
  {
    name: "Classic NFC Card",
    description: "A clean, durable card that sends customers straight to your Google review page.",
    price: "From RM15",
    tags: ["NFC only", "Black or white", "Custom logo"],
    tone: "from-slate-700 to-slate-950",
  },
  {
    name: "NFC + QR Card",
    description: "Tap with a phone or scan the QR code. The most flexible choice for every customer.",
    price: "From RM20",
    tags: ["NFC + QR", "Black or white", "Custom design"],
    tone: "from-cyan-700 to-blue-950",
    featured: true,
  },
  {
    name: "Premium Branded Card",
    description: "A more polished branded card for businesses that want their review request to stand out.",
    price: "From RM30",
    tags: ["NFC + QR", "Premium finish", "Fully branded"],
    tone: "from-amber-700 to-orange-950",
  },
];

export default function NFCPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#071018] text-slate-100 selection:bg-cyan-300 selection:text-slate-950">
      <div className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(circle_at_15%_0%,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_90%_15%,rgba(59,130,246,0.16),transparent_28%)]" />

      <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="/" className="text-sm font-bold tracking-[0.22em] text-cyan-200">ERNERDXD</a>
        <a href="/" className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300/60 hover:text-cyan-200">Back to portfolio</a>
      </nav>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20 pt-14 sm:pt-20">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">Google review tools</p>
          <h1 className="text-5xl font-black leading-[0.98] tracking-tight sm:text-7xl">Make it easier to get <span className="bg-gradient-to-r from-cyan-200 to-blue-400 bg-clip-text text-transparent">more reviews.</span></h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">Simple NFC review cards for cafés, salons, restaurants, retail shops and local businesses. Customers tap or scan, then leave a review in seconds.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#models" className="rounded-xl bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:brightness-110">View available models</a>
            <a href="https://wa.me/60123456789" target="_blank" rel="noreferrer" className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold transition hover:border-cyan-300/60">Ask for a quote</a>
          </div>
        </motion.div>

        <div id="models" className="mt-20 grid gap-5 md:grid-cols-3">
          {products.map((product, index) => (
            <motion.article key={product.name} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className={`relative overflow-hidden rounded-3xl border ${product.featured ? "border-cyan-300/70" : "border-white/10"} bg-white/[0.055] p-5 backdrop-blur-xl`}>
              {product.featured && <span className="absolute right-4 top-4 rounded-full bg-cyan-300 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-slate-950">Most flexible</span>}
              <div className={`grid h-52 place-items-center rounded-2xl bg-gradient-to-br ${product.tone}`}>
                <div className="grid h-32 w-48 place-items-center rounded-xl border border-white/25 bg-white/15 shadow-2xl backdrop-blur-sm"><div className="text-center"><div className="mx-auto mb-3 h-10 w-10 rounded-lg border-2 border-white/70 p-1"><div className="h-full w-full rounded-sm bg-white/80" /></div><span className="text-[10px] font-bold tracking-[0.25em] text-white/90">YOUR LOGO</span></div></div>
              </div>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">{product.price}</p>
              <h2 className="mt-2 text-2xl font-bold">{product.name}</h2>
              <p className="mt-3 min-h-14 text-sm leading-relaxed text-slate-300">{product.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">{product.tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">{tag}</span>)}</div>
            </motion.article>
          ))}
        </div>

        <section className="mt-20 grid gap-5 rounded-3xl border border-white/10 bg-white/[0.045] p-6 sm:grid-cols-3 sm:p-8">
          {[['01', 'Choose a model', 'Pick NFC-only or NFC + QR based on how your customers use their phones.'], ['02', 'Send your details', 'Share your logo, business name and Google review link.'], ['03', 'Receive your card', 'Your card is programmed, branded and ready to place at your counter.']].map(([number, title, text]) => <div key={number}><p className="text-sm font-black text-cyan-300">{number}</p><h3 className="mt-3 font-bold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-400">{text}</p></div>)}
        </section>

        <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-3xl bg-cyan-300 p-6 text-slate-950 sm:flex-row sm:items-center sm:p-8"><div><h2 className="text-2xl font-black">Want a custom quote?</h2><p className="mt-1 text-sm text-slate-800/80">Prices depend on quantity, finish and branding.</p></div><a href="https://wa.me/60123456789" target="_blank" rel="noreferrer" className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800">Message on WhatsApp →</a></div>
      </section>
    </main>
  );
}
