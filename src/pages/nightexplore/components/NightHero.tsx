import { Moon, ChevronDown } from 'lucide-react';
import bannerImage from '../../../assets/banner.jpg';

export default function NightHero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-blue-950/70 to-slate-950" />
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-24 left-16 w-64 h-64 bg-blue-400 rounded-full mix-blend-screen filter blur-3xl animate-blob" />
        <div className="absolute top-48 right-12 w-64 h-64 bg-cyan-300 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-indigo-400 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-blue-200 mb-8">
          <Moon className="w-4 h-4" />
          慢島夜行體驗
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
          慢島夜行・追星追淚體驗
        </h1>
        <p className="text-xl md:text-2xl text-blue-200 mb-12 font-light">
          跟著夜色走進海岸，把這片藍光與星光，<br className="hidden md:block" />留在馬祖的夜裡。
        </p>

        <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10 text-left space-y-4 text-blue-100 leading-relaxed">
          <p>當夜色落下，馬祖開始發光。</p>
          <p>
            這不是一場單純的夜間導覽，而是一段走進海與星之間的體驗。跟著在地導覽員，走進島嶼最安靜的時刻——看海水微光閃動，追尋藍眼淚的蹤跡；抬頭，是滿天星斗與無邊夜色；腳下，是海浪與沙粒交織的細碎光影。
          </p>
          <p>
            你會發現，這裡的夜，不只是黑，而是會發光的。把這片藍光與星光，裝進記憶裡，也帶走一段只屬於馬祖的夜。
          </p>
        </div>

        <button
          onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
          className="mt-12 text-white/60 hover:text-white transition-colors"
        >
          <ChevronDown className="w-8 h-8 animate-bounce mx-auto" />
        </button>
      </div>
    </section>
  );
}
