import { Gift } from 'lucide-react';
import prizesImg from '../../../assets/prizes_1.png';
import prizes2Img from '../../../assets/prizes_2.png';

export default function CollectionPrize() {
  return (
    <section className="pt-24 px-6 bg-blue-950">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500">
            <Gift className="w-5 h-5 text-white" />
          </div>
          <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">Prizes</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">完成打卡，可兌換的慢島紀念</h2>
        <div className="h-px bg-gradient-to-r from-cyan-500 to-transparent mb-8" />

        <div className="space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
            <img src={prizesImg} alt="每點打卡獎品" className="w-full object-cover" />
          </div>


          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10">
            <h3 className="text-blue-300 font-semibold text-lg mb-4">完成全部 6 個打卡點額外兌換</h3>
            <img src={prizes2Img} alt="完成全部打卡點獎品" className="w-full object-cover" />
          </div>

          <p className="text-white/40 text-sm px-2">
            各點位獎品可能於活動期間提前兌完，實際數量以官方公告為準。
          </p>
        </div>
      </div>
    </section>
  );
}
