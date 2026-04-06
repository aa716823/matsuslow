import { Calendar, ArrowRight } from 'lucide-react';
import mascot03 from '../assets/oba_03.svg';

export default function CTASection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-600 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          開啟你的慢島時間
        </h2>

        <p className="text-xl md:text-2xl text-blue-50 mb-12 leading-relaxed">
          從亮點打卡開始，走進聚落、走進夜色、走進市集與手作體驗，<br />
          把這趟旅程，慢慢收進你的馬祖記憶裡。
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group relative px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
            報名參加
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="relative inline-block">
            <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-lg border border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-300 flex items-center gap-3">
              <Calendar className="w-5 h-5" />
              活動日程表
            </button>
            <img
              src={mascot03}
              alt="鷗霸"
              className="absolute -right-[8rem] -bottom-[7rem] w-[10rem] h-[10rem] md:-right-[10rem] md:-bottom-[7rem] md:w-[12rem] md:h-[12rem] object-contain pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
