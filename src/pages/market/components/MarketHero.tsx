import { Music, ChevronDown } from 'lucide-react';
import bgImage from '../../../assets/background.png';

export default function MarketHero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-indigo-950/70 to-slate-950" />
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <div className="absolute top-24 left-16 w-64 h-64 bg-violet-400 rounded-full mix-blend-screen filter blur-3xl animate-blob" />
        <div className="absolute top-48 right-12 w-64 h-64 bg-indigo-300 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-purple-400 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-violet-200 mb-8">
          <Music className="w-4 h-4" />
          藍調時光市集
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
          藍調時光市集－慢語時光
        </h1>
        <p className="text-xl md:text-2xl text-violet-200 mb-12 font-light">
          在芹壁，時間總是慢一點。<br className="hidden md:block" />跟著音樂、海風與燈光，留下屬於你的島嶼慢時光。
        </p>

        <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10 text-left space-y-4 text-violet-100 leading-relaxed">
          <p>音樂在空氣中流動，燈光與海風交織，市集沿著聚落展開，人們在石屋之間來回穿梭。你可以邊走邊逛、邊聽邊停，也可以什麼都不做，只是坐著，看海、發呆。</p>
          <p>不論是傍晚的微光，或是夜晚的燈影，這裡都有一段剛剛好的時間，等你留下來。</p>
        </div>

        <button
          onClick={() => document.getElementById('sessions')?.scrollIntoView({ behavior: 'smooth' })}
          className="mt-12 text-white/60 hover:text-white transition-colors"
        >
          <ChevronDown className="w-8 h-8 animate-bounce mx-auto" />
        </button>
      </div>
    </section>
  );
}
