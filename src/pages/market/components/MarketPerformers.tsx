import { Mic2 } from 'lucide-react';

const performers = [
  { date: '5/1', theme: '初見藍調', performer: '小益愛唱歌', tags: ['#唱歌', '#點唱機'] },
  { date: '5/2', theme: '藍調親子', performer: '魔術&氣球', tags: ['#互動', '#親子'] },
  { date: '5/3', theme: '藍調海風', performer: '潤潁', tags: ['#音樂', '#琵琶'] },
  { date: '5/30', theme: '藍調青春', performer: '艾力', tags: ['#台語', '#點唱機'] },
  { date: '5/31', theme: '藍調療癒', performer: '海洋瑜伽', tags: ['#心靈', '#慢時間'] },
  { date: '6/6', theme: '藍調回聲', performer: '黃少康', tags: ['#KOL', '#強力歌喉'] },
];

export default function MarketPerformers() {
  return (
    <section className="pt-24 px-6 bg-indigo-950">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500">
            <Mic2 className="w-5 h-5 text-white" />
          </div>
          <span className="text-indigo-400 text-sm font-medium tracking-widest uppercase">Performers</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">每一天，都有不同的藍調主題</h2>
        <div className="h-px bg-gradient-to-r from-indigo-500 to-transparent mb-8" />

        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {performers.map((p, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-indigo-400 text-sm font-bold">{p.date}</span>
                <span className="text-white font-semibold">{p.theme}</span>
              </div>
              <p className="text-violet-200 mb-3">{p.performer}</p>
              <div className="flex gap-2 flex-wrap">
                {p.tags.map((tag, j) => (
                  <span key={j} className="text-xs px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-violet-100 leading-relaxed">
          <p>每日安排不同主題演出，結合音樂、互動與現場氛圍，讓旅人隨著日期與場域變化，感受不一樣的慢島時光。</p>
        </div>
      </div>
    </section>
  );
}
