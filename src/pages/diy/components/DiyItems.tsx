import { Paintbrush } from 'lucide-react';
import diy1 from '../../../assets/diy_1.png';
import diy2 from '../../../assets/diy_2.png';
import diy3 from '../../../assets/diy_3.png';
import liquor from '../../../assets/liquor.jpg';
import amulet from '../../../assets/amulet.jpg';

const foods = [
  { name: '馬蔥餅', img: diy1 },
  { name: '地瓜餃', img: diy2 },
  { name: '龜桃', img: diy3 },
];

export default function DiyItems() {
  return (
    <section id="diy-items" className="pt-24 px-6 bg-gradient-to-b from-slate-950 to-teal-950">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500">
            <Paintbrush className="w-5 h-5 text-white" />
          </div>
          <span className="text-teal-400 text-sm font-medium tracking-widest uppercase">DIY Items</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">把馬祖的味道與故事，慢慢做進作品裡</h2>
        <div className="h-px bg-gradient-to-r from-teal-500 to-transparent mb-8" />

        <p className="text-teal-100 leading-relaxed mb-12">
          《藍調手作體驗所》以地方飲食、文化記憶與島嶼生活為發想，規劃三大主題 DIY 體驗，讓旅人在製作的過程中，不只是完成作品，也更靠近馬祖的日常與文化。
        </p>

        {/* 01 */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-teal-400 font-bold text-lg">01</span>
            <h3 className="text-white font-semibold text-xl">北竿・慢味學堂</h3>
          </div>
          <p className="text-teal-100 text-sm leading-relaxed mb-6">
            以馬祖在地傳統點心與飲食文化為主題，透過講師帶領，動手體驗地方風味的製作過程。
          </p>
          <div className="grid grid-cols-3 gap-4">
            {foods.map((f, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                <img src={f.img} alt={f.name} className="w-full aspect-square object-cover" />
                <p className="text-white text-center py-3 text-sm font-medium">{f.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 02 */}
        <div className="mb-10 bg-white/5 border border-amber-500/20 rounded-2xl overflow-hidden">
          <img src={liquor} alt="慢島微醺日" className="w-full aspect-square object-cover" />
          <div className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-teal-400 font-bold text-lg">02</span>
              <h3 className="text-white font-semibold text-xl">慢島微醺日・燒酒與島嶼故事</h3>
            </div>
            <p className="text-teal-100 text-sm leading-relaxed mb-3">
              以馬祖燒酒文化為主軸，透過講師帶領，認識地方飲食記憶、燒酒風味與島嶼故事。
            </p>
            <p className="text-red-400 text-xs font-medium">⚠ 本場次含燒酒體驗內容，限年滿 18 歲者參加。</p>
          </div>
        </div>

        {/* 03 */}
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
          <img src={amulet} alt="馬祖記憶護身符吊飾" className="w-full aspect-square object-cover" />
          <div className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-teal-400 font-bold text-lg">03</span>
              <h3 className="text-white font-semibold text-xl">馬祖記憶護身符吊飾</h3>
            </div>
            <p className="text-teal-100 text-sm leading-relaxed">
              以文化創作手作為主題，透過設計與製作，把馬祖意象轉化為一件能被帶走的旅程紀念。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
