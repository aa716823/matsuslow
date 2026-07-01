import { Calendar } from 'lucide-react';

export default function CollectionTime() {
  return (
    <section className="pt-24 px-6 bg-blue-950">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500">
            <Calendar className="w-5 h-5 text-white" />
          </div>
          <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">Schedule</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">活動時間</h2>
        <div className="h-px bg-gradient-to-r from-cyan-500 to-transparent mb-8" />

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">活動時間</p>
            <p className="text-2xl font-bold text-white"><span className="text-4xl">2026</span> 年 5 月 11 日 - 7 月 31 日</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">兌換時間</p>
            <p className="text-2xl font-bold text-white"><span className="text-4xl">2026</span> 年 5 月 11 日 - 8 月 9 日</p>
          </div>
        </div>
      </div>
    </section>
  );
}
