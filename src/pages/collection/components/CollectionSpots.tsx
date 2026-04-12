import { MapPin } from 'lucide-react';

const spots = [
  { name: '大坵島', island: '島嶼' },
  { name: '馬祖地質公園', island: '南竿' },
  { name: '坤坵沙灘', island: '西莒' },
  { name: '大浦聚落', island: '東莒' },
  { name: '芹壁聚落', island: '北竿' },
  { name: '北海坑道', island: '南竿' },
];

export default function CollectionSpots() {
  return (
    <section className="pt-24 px-6 bg-gradient-to-b from-blue-950 to-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">Spots</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">六大亮點打卡地點</h2>
        <div className="h-px bg-gradient-to-r from-blue-500 to-transparent mb-8" />

        {/* 地圖佔位 */}
        <div className="bg-white/5 border border-dashed border-white/20 rounded-3xl p-12 flex items-center justify-center mb-8">
          <p className="text-white/30 text-sm">地圖圖片（待補）</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
          {spots.map((spot, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-start gap-3">
              <div className="mt-0.5 w-7 h-7 flex-shrink-0 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-xs font-bold">
                {i + 1}
              </div>
              <div>
                {spot.island && (
                  <p className="text-blue-400 text-xs mb-0.5">{spot.island}</p>
                )}
                <p className="text-white font-semibold">{spot.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-blue-100 leading-relaxed space-y-2">
          <p>從第一屆到第二屆台灣觀光100亮點，</p>
          <p>六個地方、六段風景、六片拼圖，等你一步一步走進去。</p>
        </div>
      </div>
    </section>
  );
}
