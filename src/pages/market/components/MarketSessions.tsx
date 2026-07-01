import { Calendar } from 'lucide-react';

const sessions = [
  { date: '5/1（五）', venue: '芹壁聚落', time: '18:30－20:30' },
  { date: '5/2（六）', venue: '芹壁聚落', time: '18:30－20:30' },
  { date: '5/3（日）', venue: '芹壁聚落', time: '18:30－20:30' },
  { date: '5/30（六）', venue: '坂里遊客中心', time: '14:00－17:00' },
  { date: '5/31（日）', venue: '坂里遊客中心', time: '14:00－17:00' },
  { date: '6/6（六）', venue: '芹壁聚落', time: '18:30－20:30' },
];

export default function MarketSessions() {
  return (
    <section id="sessions" className="pt-24 px-6 bg-gradient-to-b from-slate-950 to-indigo-950">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500">
            <Calendar className="w-5 h-5 text-white" />
          </div>
          <span className="text-violet-400 text-sm font-medium tracking-widest uppercase">Sessions</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">跟著日期，走進每一場慢語時光</h2>
        <div className="h-px bg-gradient-to-r from-violet-500 to-transparent mb-8" />

        <p className="text-violet-100 leading-relaxed mb-8">
          《藍調時光市集－慢語時光》預計辦理 6 場次，分別於
          <span className="text-white font-semibold"> 芹壁聚落 </span>與
          <span className="text-white font-semibold"> 坂里遊客中心 </span>辦理。
          芹壁場以傍晚到夜晚的海岸聚落氛圍為主，坂里場則以午後時段展開，讓旅人依照不同日期，感受不同的慢島風景。
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {sessions.map((s, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-4">
              <div className="w-14 h-14 flex-shrink-0 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-white text-sm font-bold text-center leading-tight">
                {s.date.split('（')[0]}
              </div>
              <div>
                <p className="text-white font-semibold">{s.venue}</p>
                <p className="text-violet-300 text-sm">{s.date.match(/（.+）/)?.[0].replace('（', '').replace('）', '')} · {s.time}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-white/40 text-sm px-2">
          如遇天候、交通船班或其他不可抗力因素，主辦單位得視實際情況調整活動時間，並以官方公告為準。
        </p>
      </div>
    </section>
  );
}
