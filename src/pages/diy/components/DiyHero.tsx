import { Scissors, ChevronDown } from 'lucide-react';
import bgImage from '../../../assets/background.png';

export default function DiyHero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-teal-950/70 to-slate-950" />
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-24 left-16 w-64 h-64 bg-teal-400 rounded-full mix-blend-screen filter blur-3xl animate-blob" />
        <div className="absolute top-48 right-12 w-64 h-64 bg-emerald-300 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-cyan-400 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-teal-200 mb-8">
          <Scissors className="w-4 h-4" />
          藍調手作體驗所
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
          藍調手作體驗所
        </h1>
        <p className="text-xl md:text-2xl text-teal-200 mb-12 font-light">
          慢慢做、慢慢體驗、慢慢感受，<br className="hidden md:block" />
          把馬祖的風味與記憶，做成一份可以帶走的作品。
        </p>

        <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10 text-left space-y-4 text-teal-100 leading-relaxed">
          <p>透過手作體驗，將馬祖的風味與記憶轉化為一份可以帶走的作品。從在地食材、傳統飲食到文化象徵，讓旅客在動手製作的過程中，慢慢理解島嶼的生活節奏，將一段專屬於馬祖的時間，實際收藏帶回。</p>
          <p>本活動以「慢慢做、慢慢體驗、慢慢感受」為核心概念，規劃多場結合地方飲食與文化創作的手作課程，透過講師帶領及實作參與，增加旅客與地方文化的互動深度，也讓旅程留下更多可以被記住的細節。</p>
        </div>

        <button
          onClick={() => document.getElementById('diy-items')?.scrollIntoView({ behavior: 'smooth' })}
          className="mt-12 text-white/60 hover:text-white transition-colors"
        >
          <ChevronDown className="w-8 h-8 animate-bounce mx-auto" />
        </button>
      </div>
    </section>
  );
}
