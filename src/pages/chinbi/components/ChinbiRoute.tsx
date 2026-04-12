import { MapPin } from 'lucide-react';

const spots = [
  {
    no: '01',
    name: '芹壁聚落＋芹壁天后宮',
    desc: '是馬祖最具代表性的傳統聚落，有發現嗎？花崗岩石屋依山面海而建哦！芹壁天后宮守護著聚落，融合了閩東建築與海洋文化的風貌。',
    tag: '聚落',
  },
  {
    no: '02',
    name: '戰爭和平紀念公園',
    desc: '這裡曾是重要軍事據點哦！現在轉為紀念園區，保留戰地設施，讓大家重新認識馬祖的歷史變遷。',
    tag: '歷史',
  },
  {
    no: '03',
    name: '坂里聚落',
    desc: '這裡的步調特別慢，有感覺嗎？聚落保留傳統空間與生活樣貌，石屋與巷弄之間，呈現較純樸的在地日常風景～',
    tag: '聚落',
  },
  {
    no: '04',
    name: '大坵島',
    desc: '你知道嗎？這裡沒有住人類哦！以前軍方曾引進梅花鹿飼養，後來隨著撤軍，鹿群自然繁衍，就變成現在的大坵特色了。',
    tag: '島嶼',
  },
];

export default function ChinbiRoute() {
  return (
    <section className="pt-24 px-6 bg-gradient-to-b from-amber-950 to-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500">
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <span className="text-amber-400 text-sm font-medium tracking-widest uppercase">Route</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">跟著鷗霸，一起慢慢走北竿</h2>
        <div className="h-px bg-gradient-to-r from-amber-500 to-transparent mb-6" />

        <p className="text-amber-100 leading-relaxed mb-10">
          北竿以石屋聚落與壯麗海岸聞名，保留完整閩東建築與戰地文化。跟著我一起沿著海岸與村落漫步，感受傳統生活與歷史痕跡交織，是體驗馬祖風景與人文的重要島嶼哦～
        </p>

        {/* 地圖佔位 */}
        <div className="bg-white/5 border border-dashed border-white/20 rounded-3xl p-12 flex items-center justify-center mb-10">
          <p className="text-white/30 text-sm">北竿地圖（待補）</p>
        </div>

        <div className="space-y-4">
          {spots.map((spot) => (
            <div key={spot.no} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-5">
              <div className="flex-shrink-0 text-center">
                <span className="text-amber-400 font-bold text-lg">{spot.no}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <p className="text-white font-semibold">{spot.name}</p>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    {spot.tag}
                  </span>
                </div>
                <p className="text-amber-100 text-sm leading-relaxed">{spot.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
