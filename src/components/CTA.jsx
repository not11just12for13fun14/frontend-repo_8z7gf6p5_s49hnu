function CTA() {
  return (
    <section className="relative py-16">
      <div className="max-w-4xl mx-auto text-center px-4">
        <div className="rounded-2xl p-1 bg-gradient-to-r from-cyan-400/40 via-blue-500/30 to-indigo-600/40">
          <div className="rounded-2xl bg-slate-900/80 border border-white/10 px-8 py-12">
            <h3 className="text-2xl sm:text-3xl font-semibold text-white">Готовы показать свои 3D работы?</h3>
            <p className="text-white/70 mt-2">Загрузите модель и получите красивую голографическую карточку с автоматической визуализацией.</p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <button className="px-5 py-3 rounded-xl bg-cyan-500 text-slate-900 font-semibold hover:bg-cyan-400">Загрузить модель</button>
              <button className="px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/15">Узнать подробнее</button>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_20%_10%,rgba(56,189,248,0.2),transparent),radial-gradient(40%_30%_at_80%_0%,rgba(129,140,248,0.2),transparent)]" />
    </section>
  );
}

export default CTA;
