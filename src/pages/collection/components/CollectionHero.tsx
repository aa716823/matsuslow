import { MapPin, ChevronDown } from 'lucide-react';
import bgImage from '../../../assets/background.png';

export default function CollectionHero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-blue-950/70 to-slate-950" />
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <div className="absolute top-24 left-16 w-72 h-72 bg-blue-400 rounded-full mix-blend-screen filter blur-3xl animate-blob" />
        <div className="absolute top-48 right-12 w-64 h-64 bg-cyan-300 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-indigo-400 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-blue-200 mb-8">
          <MapPin className="w-4 h-4" />
          慢島時間收集
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
          慢島時間收集・鷗霸拼圖行動
        </h1>
        <p className="text-xl md:text-2xl text-blue-200 mb-12 font-light">
          走進馬祖六大亮點，收集六片拼圖，<br className="hidden md:block" />也收集一段屬於你的慢島記憶。
        </p>

        <button
          onClick={() => document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' })}
          className="mt-4 text-white/60 hover:text-white transition-colors"
        >
          <ChevronDown className="w-8 h-8 animate-bounce mx-auto" />
        </button>
      </div>
    </section>
  );
}
