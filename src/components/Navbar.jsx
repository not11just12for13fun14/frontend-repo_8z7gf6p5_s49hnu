import { Menu, Search, Cube } from "lucide-react";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-600 p-[1px]">
            <div className="h-full w-full rounded-xl bg-slate-900 grid place-items-center">
              <Cube className="h-5 w-5 text-cyan-300" />
            </div>
          </div>
          <span className="text-white font-semibold tracking-tight">HoloModels</span>
        </div>

        <div className="hidden md:flex items-center gap-2 flex-1 max-w-md mx-6">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Поиск 3D моделей..."
              className="w-full h-10 pl-10 pr-3 rounded-xl bg-white/5 text-white placeholder:text-white/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
          </div>
        </div>

        <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/5 border border-white/10 text-white">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
