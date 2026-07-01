import { Users, CheckCircle } from 'lucide-react';

export default function CollectionGroup() {
  return (
    <section className="py-24 px-6 bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500">
            <Users className="w-5 h-5 text-white" />
          </div>
          <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">Group Tours</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">團體旅客參與方式</h2>
        <div className="h-px bg-gradient-to-r from-cyan-500 to-transparent mb-8" />

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 space-y-5">
          <p className="text-blue-100 leading-relaxed">
            團體旅客可由導遊或領隊統一辦理兌換，請備妥：
          </p>
          <ul className="space-y-3">
            {['團體成員打卡照片及留言資料', '團體名冊或行程資料'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-blue-100 font-medium">
                <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-blue-100 leading-relaxed">
            團體旅客各成員仍須符合活動規定，並以現場查驗通過為準。
          </p>
        </div>
      </div>
    </section>
  );
}
