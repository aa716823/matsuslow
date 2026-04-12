import { Star } from 'lucide-react';

export default function NightRegister() {
  return (
    <section id="register" className="py-24 px-6 bg-gradient-to-b from-slate-950 to-blue-950">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
            <Star className="w-5 h-5 text-white" />
          </div>
          <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">Registration</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">免費報名，額滿為止</h2>
        <div className="h-px bg-gradient-to-r from-blue-500 to-transparent mb-8" />

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 mb-8">
          <p className="text-blue-100 leading-relaxed mb-8">
            本活動採<span className="font-semibold text-white">線上報名方式</span>辦理，額滿為止。每場次名額依各島別及實際報名情形彈性調整，預計每場約 <span className="font-semibold text-white">10 至 50 人</span>。完成線上報名後，即可依主辦單位公告方式參與活動。
          </p>

          <ul className="space-y-3 mb-10">
            {[
              '本活動免費參加',
              '含專業導覽、旅行平安保險',
              '每位完成活動者可獲 星空夜瓶 乙份',
              '完成活動者另有機會參加 馬祖來回機票抽獎，共兩組（2 人為 1 組）',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-blue-100">
                <span className="mt-1 w-5 h-5 flex-shrink-0 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://survey.hotaigroup.com.tw/s/r19yd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-4 px-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-xl hover:from-blue-400 hover:to-cyan-400 transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-900/40 text-center"
            >
              立即報名
            </a>
            <button className="flex-1 py-4 px-6 bg-white/10 text-blue-200 font-bold rounded-xl border border-white/15 hover:bg-white/15 transition-all duration-300">
              查看場次資訊
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
