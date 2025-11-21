import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';

const cards = [
  {
    id: 1,
    title: 'Holo ID – Classic',
    author: 'NeonFlux Studio',
    tags: ['identity', 'fintech'],
    image: '/preview1.jpg'
  },
  {
    id: 2,
    title: 'Holo ID – Sapphire',
    author: 'NeonFlux Studio',
    tags: ['holographic', 'vibrant'],
    image: '/preview2.jpg'
  },
  {
    id: 3,
    title: 'Holo ID – Aurora',
    author: 'XR Collective',
    tags: ['futuristic', 'tech'],
    image: '/preview3.jpg'
  },
  {
    id: 4,
    title: 'Holo ID – Midnight',
    author: 'XR Collective',
    tags: ['glow', 'blue'],
    image: '/preview4.jpg'
  }
];

function Card({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="group relative rounded-2xl p-1 bg-gradient-to-br from-cyan-400/30 via-blue-500/20 to-indigo-600/30 hover:from-cyan-400/50 hover:to-indigo-600/50 transition-colors"
    >
      <div className="rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-white/10 overflow-hidden">
        <div className="aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-900 relative">
          <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_20%_10%,rgba(56,189,248,0.25),transparent),radial-gradient(40%_30%_at_80%_0%,rgba(129,140,248,0.25),transparent)] mix-blend-overlay" />
        </div>

        <div className="p-4">
          <div className="flex items-center gap-2 text-white/90 mb-1">
            <span className="font-semibold">{item.title}</span>
            <BadgeCheck className="h-4 w-4 text-cyan-400" />
          </div>
          <p className="text-sm text-white/60">{item.author}</p>

          <div className="mt-3 flex flex-wrap gap-2">
            {item.tags.map((t) => (
              <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between">
            <button className="px-3 py-2 rounded-lg bg-cyan-500 text-slate-900 text-sm font-semibold hover:bg-cyan-400">
              Открыть
            </button>
            <button className="px-3 py-2 rounded-lg bg-white/10 text-white text-sm hover:bg-white/15">
              Предпросмотр
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CardGrid() {
  return (
    <section className="relative py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Коллекция 3D карточек</h2>
            <p className="text-white/70 mt-1">Голографические, современные, яркие</p>
          </div>
          <button className="px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-white hover:bg-white/15">
            Фильтры
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cards.map((item, i) => (
            <Card key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_20%_10%,rgba(56,189,248,0.12),transparent),radial-gradient(40%_30%_at_80%_0%,rgba(129,140,248,0.12),transparent)]" />
    </section>
  );
}

export default CardGrid;
