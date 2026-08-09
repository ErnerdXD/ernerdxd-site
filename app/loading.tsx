export default function Loading() {
  return (
    <main className="min-h-screen bg-[#070b14] text-slate-100 grid place-items-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 rounded-full border-4 border-cyan-300/25 border-t-cyan-300 animate-spin" />
        <p className="text-sm tracking-[0.2em] text-cyan-200/90">LOADING</p>
      </div>
    </main>
  );
}
