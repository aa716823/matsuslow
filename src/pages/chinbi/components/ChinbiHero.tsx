import { Home, ChevronDown } from 'lucide-react';
import bgImage from '../../../assets/background.png';

export default function ChinbiHero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-amber-950/60 to-slate-950" />
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-24 left-16 w-64 h-64 bg-amber-400 rounded-full mix-blend-screen filter blur-3xl animate-blob" />
        <div className="absolute top-48 right-12 w-64 h-64 bg-orange-300 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-yellow-400 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-amber-200 mb-8">
          <Home className="w-4 h-4" />
          芹壁慢慢走
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
          芹壁慢慢走・鷗霸夥伴行動
        </h1>
        <p className="text-xl md:text-2xl text-amber-200 mb-12 font-light">
          走進芹壁，不只是旅行，<br className="hidden md:block" />而是和聚落一起慢慢生活一段時間。
        </p>

        <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10 text-left space-y-4 text-amber-100 leading-relaxed">
          <p>沿著石屋與海岸之間的路慢慢前行，在一間店停下、與一個人交會、完成一次消費，</p>
          <p>這些看似日常的片刻，都是你與這座島建立連結的方式。</p>
          <p>當你願意慢下來，你會發現，這裡留下的不只是風景，而是一段與地方一起發生的時間。</p>
        </div>

        <button
          onClick={() => document.getElementById('shops')?.scrollIntoView({ behavior: 'smooth' })}
          className="mt-12 text-white/60 hover:text-white transition-colors"
        >
          <ChevronDown className="w-8 h-8 animate-bounce mx-auto" />
        </button>
      </div>
    </section>
  );
}
