import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/80 backdrop-blur-md mb-4">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-xs">Живая 3D сцена на базе Spline</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white drop-shadow-[0_0_25px_rgba(59,130,246,0.35)]">
            Витрина 3D моделей с будущим настроением
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-xl">
            Исследуйте коллекцию стильных, голографических 3D карточек. Современный дизайн, мягкие свечения и плавные анимации.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="px-5 py-3 rounded-xl bg-cyan-500 text-slate-900 font-semibold hover:bg-cyan-400 transition-colors">
              Смотреть коллекцию
            </button>
            <button className="px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/15 transition-colors">
              Как это работает
            </button>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_20%_10%,rgba(56,189,248,0.25),transparent),radial-gradient(40%_30%_at_80%_0%,rgba(129,140,248,0.25),transparent)]" />
    </section>
  );
}

export default Hero;
